import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import reactCompiler from "babel-plugin-react-compiler";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  base: "./",
  build: { outDir: "../dist" },
  plugins: [react(), babel({ plugins: [reactCompiler] }), tailwindcss()],
});
