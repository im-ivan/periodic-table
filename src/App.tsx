import { useState } from "react";
import "./App.css";
import { ElementDetailsSidebar } from "./components/ElementDetailsSidebar/ElementDetailsSidebar";
import { PeriodicTable } from "./components/PeriodicTable/PeriodicTable";
import type { IElement } from "./shared/IElement";

function App() {
  const [selectedElement, setSelectedElement] = useState<IElement | null>(null)
  return (
    <>
      <ElementDetailsSidebar element={selectedElement} />
      <PeriodicTable onElementClick={setSelectedElement} />
    </>
  );
}

export default App;
