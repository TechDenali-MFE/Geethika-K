import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [react(),
    tailwindcss(),
      cssInjectedByJsPlugin(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.widget.tsx"),
      name: "CaasWidget",
      formats: ["iife"],
      fileName: () => "demobundle.js",
    },
    rollupOptions: {
      external: [],
    },
    minify: true,
  },
  define: {
    // Replace process.env with empty object
    "process.env": {},
  },
});
