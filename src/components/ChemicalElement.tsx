import type { IElement } from "../shared/IElement";

export const ChemicalElement = (element: IElement) => {
  return (
    <div className="chemical-element border size-20 flex items-center flex-col">
      <h5 className="atomicNumber self-start">{element.atomicNumber}</h5>
      <h4 className="symbol">{element.symbol}</h4>
      <h5 className="atomicMass">{element.atomicMass}</h5>
    </div>
  );
};
