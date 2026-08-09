import { cpSync, createReadStream, existsSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const shopifyDir = path.resolve(rootDir, "shop-app");

const CONTENT_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function shopifyStaticPlugin() {
  const serve = (req, res, next) => {
    const url = req.url || "";
    const [pathname, query = ""] = url.split("?");
    const querySuffix = query ? `?${query}` : "";

    const prefixes = ["/regallery/shop-app", "/shop-app"];
    const prefix = prefixes.find(
      (item) => pathname === item || pathname.startsWith(`${item}/`),
    );

    if (!prefix) {
      next();
      return;
    }

    if (pathname === prefix) {
      res.statusCode = 302;
      res.setHeader("Location", `${prefix}/${querySuffix}`);
      res.end();
      return;
    }

    let relativePath = pathname.slice(prefix.length) || "/";
    if (relativePath.endsWith("/")) {
      relativePath = `${relativePath}index.html`;
    }

    const filePath = path.normalize(path.join(shopifyDir, relativePath));
    if (!filePath.startsWith(shopifyDir) || !existsSync(filePath)) {
      next();
      return;
    }

    const stats = statSync(filePath);
    if (stats.isDirectory()) {
      res.statusCode = 302;
      res.setHeader("Location", `${pathname}/${querySuffix}`);
      res.end();
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.setHeader(
      "Content-Type",
      CONTENT_TYPES[ext] || "application/octet-stream",
    );
    createReadStream(filePath).pipe(res);
  };

  return {
    name: "shopify-static",
    configureServer(server) {
      server.middlewares.use(serve);
    },
    configurePreviewServer(server) {
      server.middlewares.use(serve);
    },
    closeBundle() {
      if (!existsSync(shopifyDir)) return;
      cpSync(shopifyDir, path.resolve(rootDir, "dist/shop-app"), {
        recursive: true,
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), shopifyStaticPlugin()],
  base: "/regallery",
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash].[ext]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});
