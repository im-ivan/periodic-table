import { ChemicalElement } from "./ChemicalElement";
import { elements as data } from "./../assets/data/periodic-table-elements.json";
import type { IElement } from "../shared/IElement";
import "../styles/PeriodicTable.css";

const elementsList: IElement[] = data.map((e: IElement) => {
  return {
    symbol: e.symbol,
    atomic_mass: Number(e.atomic_mass.toFixed(3)),
    number: e.number,
    category: e.category,
    xpos: e.xpos,
    ypos: e.ypos
  };
});

export const PeriodicTable = () => {
  return (
    <>
      <div className="h-[100vh]">
        <h1 className="text-center text-[4rem] text-white">Tabela Periódica</h1>
        <div className="grid-container mx-auto">
          {elementsList.map((e: IElement) => (
            <div style={{ gridRowStart: `${e.ypos}`, gridColumnStart: `${e.xpos}` }} className="element-container">
              <ChemicalElement key={e.symbol} element={e} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
