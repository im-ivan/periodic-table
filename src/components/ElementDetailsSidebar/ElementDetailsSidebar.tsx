import type { IElement } from "../../shared/IElement"

interface IElementDetailsProps {
    element: IElement | null
}

export const ElementDetailsSidebar = ({ element }: IElementDetailsProps) => {

    return <>
        <div className="min-w-80 h-screen bg-amber-700">
            <h3>{element?.name}</h3>
            <h3>{element?.symbol}</h3>
            <h3>{element?.number}</h3>
            <h3>Period</h3>
            <h3>group</h3>
            <h3>phase</h3>
            <h3>electron configuration</h3>
            <h3>Atomic mass</h3>
            <h3>boil</h3>
            <h3>density</h3>
            <h3>category</h3>
            <h3>melt</h3>
            <h3>molarheat</h3>
            <h3>named by</h3>
            <h3>discovered</h3>
            <h3>isotopes</h3>
            <h3>abundance</h3>
        </div>
    </>
}