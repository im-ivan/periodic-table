import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PeriodicTable } from "./components/PeriodicTable/PeriodicTable.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>{/* <App /> */ <PeriodicTable />}</StrictMode>
);
