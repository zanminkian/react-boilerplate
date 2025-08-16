import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  base: "./",
  build: { outDir: "../dist" },
  plugins: [react(), tailwindcss()],
});
