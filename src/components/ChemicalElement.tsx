import type { IElement } from "../shared/IElement";
import elementbg from "../assets/img/elementbg.jpg";

export interface IChemicalElementProps {
  element: IElement;
  bgOpacity?: number; // opcional, permite ajustar a opacidade da imagem
}

export const ChemicalElement = ({ element, bgOpacity = 0.5 }: IChemicalElementProps) => {
  return (
    <div className="relative size-20 flex flex-col items-center justify-center  overflow-hidden">

      {/* Imagem de fundo com opacidade */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${elementbg})`,
          opacity: bgOpacity, // controla o alfa da imagem
        }}
      />

      {/* Conteúdo em cima da imagem */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center p-1">
        <h5 className="atomicNumber self-start text-xs">{element.number}</h5>
        <h4 className="symbol text-lg font-bold">{element.symbol}</h4>
        <h5 className="atomicMass text-xs">{element.atomic_mass}</h5>
      </div>
    </div>
  );
};
