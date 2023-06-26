import { defineConfig } from "vite";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import * as pckg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve("src", "index.ts"),
      name: "Hookstils",
      fileName: (format, entry) => `${entry}.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(pckg.peerDependencies)],
      output: {
        globals: {
          react: "react",
        },
      },
    },
  },
});
