import { cpSync, createReadStream, existsSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type Connect, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const shopifyDir = path.resolve(rootDir, "shop-app");

const CONTENT_TYPES: Record<string, string> = {
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

function shopifyStaticPlugin(): Plugin {
  const serve: Connect.NextHandleFunction = (req, res, next) => {
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

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), shopifyStaticPlugin()],
  base: "/regallery",
});
