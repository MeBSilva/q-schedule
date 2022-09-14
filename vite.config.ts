// eslint-disable-next-line
import { defineConfig } from "vite";
// eslint-disable-next-line
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  // build: { outDir: "dist", emptyOutDir: true },
});
