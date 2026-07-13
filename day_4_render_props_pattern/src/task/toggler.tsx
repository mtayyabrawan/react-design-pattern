import { useState, type ReactNode } from "react";

interface TogglerRenderProps {
    isOpen: boolean;
    toggle: (option?: boolean) => void;
}

interface TogglerProps {
    render: (props: TogglerRenderProps) => ReactNode;
}

function Toggler({ render }: TogglerProps) {
    const [isOpen, setOpen] = useState<boolean>(false);
    function toggle(option?: boolean) {
        setOpen((prev) => (option === undefined ? !prev : option));
    }
    return render({ isOpen, toggle });
}

export default Toggler;
