import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Point at source so library edits hot-reload without a rebuild.
      "@cavokfly/article-preview": path.resolve(__dirname, "../src/index.js"),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
