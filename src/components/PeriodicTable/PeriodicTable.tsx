import { ChemicalElement } from "../ChemicalElement/ChemicalElement";
import { elements as data } from "../../assets/data/periodic-table-elements.json";
import type { IElement } from "../../shared/IElement";
import "./PeriodicTable.css";

const elementsList: IElement[] = data.map((e: IElement) => {
  return {
    name: e.name,
    symbol: e.symbol,
    atomic_mass: Number(e.atomic_mass.toFixed(3)),
    number: e.number,
    category: e.category,
    xpos: e.xpos,
    ypos: e.ypos
  };
});

interface IPeriodicTableProps {
  onElementClick?: (element: IElement) => void;
}

export const PeriodicTable = ({ onElementClick }: IPeriodicTableProps) => {
  const handleElementClick = (element: IElement) => {
    if (onElementClick) onElementClick(element)
  }
  return (
    <>
      <div className="">
        {/* <h1 className="text-center text-[4rem] text-white">Tabela Periódica</h1> */}
        <div className="grid-container mx-auto">
          {elementsList.map((e: IElement) => (
            <div key={e.symbol} data-testid="chemical-element-container" style={{ gridRowStart: `${e.ypos}`, gridColumnStart: `${e.xpos}` }} className="element-container box-border border-2 border-transparent hover:border-cyan-500" onClick={() => handleElementClick(e)}>
              <ChemicalElement key={e.symbol} element={e} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
