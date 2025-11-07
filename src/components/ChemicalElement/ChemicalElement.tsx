import type { IElement } from "../../shared/IElement";
import elementbg from "../../assets/img/elementbg.jpg";

export interface IChemicalElementProps {
  element: IElement;
  bgOpacity?: number; // opcional, permite ajustar a opacidade da imagem
}

export const categoryColors: Record<string, string> = {
  "actinide": "bg-indigo-200/30",
  "alkali-metal": "bg-red-200/30",
  "alkaline-earth-metal": "bg-yellow-200/30",
  "nonmetal": "bg-green-200/30",
  "lanthanide": "bg-orange-200",
  "metalloid": "bg-purple-200",
  "noble-gas": "bg-blue-200",
  "metal": "bg-gray-300",
  "halogen": "bg-pink-200",
  "post-transition-metal": "bg-red-400",
  "transition-metal": "bg-gray-200",
  "unknown": "bg-orange-400/30"
};
const formatCategory = (category: string): string => {
  if (category.includes("nonmetal")) {
    return "nonmetal";
  } else if (category.includes("unknown")) {
    return "unknown";
  } else {
    return category.replace(/ /g, "-");
  }
};

export const ChemicalElement = ({ element, bgOpacity = 0.6 }: IChemicalElementProps) => {
  const formatedCategory = formatCategory(element.category)
  const categoryColor = categoryColors[formatedCategory] || ""
  return (
    <div className="relative min-w-1 min-h-1 flex flex-col items-center justify-center  overflow-hidden">

      {/* Imagem de fundo com opacidade */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${elementbg})`,
          opacity: bgOpacity, // controla o alfa da imagem
        }}
      />

      {/* Conteúdo em cima da imagem */}
      <div className={`${formatedCategory} ${categoryColor} text-[1vw] relative z-10 flex flex-col items-center justify-center w-full h-full text-center p-1`}>
        <h5 className="atomicNumber self-start ">{element.number}</h5>
        <h4 className="symbol text-[2vw] font-bold">{element.symbol}</h4>
        <h5 className="atomicMass">{element.atomic_mass}</h5>
      </div>
    </div>
  );
};
