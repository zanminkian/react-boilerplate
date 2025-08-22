import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

const rootElement = globalThis.document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(createElement(App));
}
