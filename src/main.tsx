import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChemicalElement } from "./components/Element.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <ChemicalElement></ChemicalElement>
  </StrictMode>
);
