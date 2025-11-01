import { ChemicalElement } from "./ChemicalElement";
import { elements as data } from "./../assets/data/periodic-table-elements.json";
import type { IElement } from "../shared/IElement";

const elementsList: IElement[] = data.map((e: IElement) => {
  return {
    symbol: e.symbol,
    atomic_mass: Number(e.atomic_mass.toFixed(3)),
    number: e.number,
    category: e.category
  };
});

export const PeriodicTable = () => {
  return (
    <>
      <div className="grid grid-cols-18 gap-1">
        {elementsList.map((e: IElement) => (
          <ChemicalElement key={e.symbol} element={e} />
        ))}
      </div>
    </>
  );
};
