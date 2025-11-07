import type { IElement } from "../../shared/IElement"
import { Accordion, AccordionPanel, AccordionTitle, AccordionContent } from "flowbite-react";


interface IElementDetailsProps {
    element: IElement | null
}

export const ElementDetailsSidebar = ({ element }: IElementDetailsProps) => (
    <div className="">
        <Accordion alwaysOpen={false}>
            <AccordionPanel>
                <AccordionTitle>
                    Detalhes do elemento
                </AccordionTitle>
                <AccordionContent className="p-0">
                    <div className="bg-amber-400">
                        <h3 className="text-center text-xl">{element?.name}</h3>
                        <h3 className="text-6xl text-center"> {element?.symbol}</h3>
                        <h3>Atomic number: {element?.number}</h3>
                        <h3>Atomic mass: {element?.atomic_mass}</h3>
                    </div>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
);