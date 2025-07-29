import { defineConfig } from "vitest/config";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import react from "@vitejs/plugin-react";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.js",
    moduleResolution: "nodenext",
  },
  resolve: {
    alias: {
      vitest: path.resolve("node_modules/vitest"),
      "@": path.resolve(__dirname, "src"),
      "@/AppContent": path.resolve(__dirname, "src/AppContent"),
      "@/components": path.resolve(__dirname, "src/components"),
    },
  },
});
