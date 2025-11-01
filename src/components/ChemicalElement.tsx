import type { IElement } from "../shared/IElement";
export interface IChemicalElementProps {
  element: IElement;
}

export const ChemicalElement = ({ element }: IChemicalElementProps) => {
  return (
    <div className="chemical-element border size-20 flex items-center flex-col">
      <h5 className="atomicNumber self-start">{element.number}</h5>
      <h4 className="symbol">{element.symbol}</h4>
      <h5 className="atomicMass">{element.atomic_mass}</h5>
    </div>
  );
};
