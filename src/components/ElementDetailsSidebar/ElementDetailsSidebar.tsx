import type { IElement } from "../../shared/IElement"
import { Accordion, AccordionPanel, AccordionTitle, AccordionContent } from "flowbite-react";


interface IElementDetailsProps {
    element: IElement | null
}

export const ElementDetailsSidebar = ({ element }: IElementDetailsProps) => (
    <div className="">
        <Accordion collapseAll>
            <AccordionPanel>
                <AccordionTitle className="h-3">
                    Detalhes do elemento
                </AccordionTitle>
                <AccordionContent className="p-0">
                    <div className="bg-neutral-900 text-amber-200 p-3">
                        <h3 className="text-center text-xl p-4">{element?.name}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3">
                            <div className="row-span-3 col-start-1">
                                <div className="mb-5 mx-auto border-2 size-30 flex items-center justify-center">
                                    <h3 className="text-6xl ">{element?.symbol}</h3>
                                </div>
                            </div>
                            <h3 className="sm:col-start-2 sm:row-start-1">Atomic mass: {element?.atomic_mass}</h3>
                            <h3 className="sm:col-start-2 sm:row-start-2">Atomic number: {element?.number}</h3>
                            <h3 className="sm:col-start-2 sn:row-start-3">Category: {element?.category}</h3>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
);