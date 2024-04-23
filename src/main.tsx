/// <reference types="vite/client" />
import "tailwindcss/tailwind.css";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
