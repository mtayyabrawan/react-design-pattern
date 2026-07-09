import { useState, type ReactNode } from "react";

function Accordian({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col justify-start items-center divide-y divide-gray-900 bg-lime-200 max-w-lg mx-auto my-2 rounded-lg">
            {children}
        </div>
    );
}

function Item({ children, title }: { children: ReactNode; title: string }) {
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <div className="w-full">
            <button
                type="button"
                onClick={() => setOpen(!isOpen)}
                className="w-full p-4 outline-hidden cursor-pointer text-lg font-medium text-start"
            >
                {title}
            </button>
            {isOpen && <div className="w-full px-4 pb-2">{children}</div>}
        </div>
    );
}

Accordian.Item = Item;

export default Accordian;
