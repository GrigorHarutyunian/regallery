import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
export default defineConfig({
  plugins: [react()],
  base: "/regalleryy/",
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
