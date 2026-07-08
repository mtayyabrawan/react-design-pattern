import type { ReactNode } from "react";

function Modal({
    children,
    isOpen,
    toggleModal,
}: {
    children: ReactNode;
    isOpen: boolean;
    toggleModal: () => void;
}) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm">
            <div className="mx-auto max-w-xl mt-10 bg-neutral-200 rounded-2xl p-2 space-y-2 relative">
                <button
                    type="button"
                    className="bg-red-600 text-white rounded-full absolute size-7 cursor-pointer outline-hidden -right-1 -top-1"
                    onClick={toggleModal}
                >
                    X
                </button>
                {children}
            </div>
        </div>
    );
}

function Header({ children }: { children: ReactNode }) {
    return (
        <div className="border-b border-gray-300 w-full pb-4">{children}</div>
    );
}

function Body({ children }: { children: ReactNode }) {
    return <div className="w-full p-2">{children}</div>;
}

function Footer({ children }: { children: ReactNode }) {
    return (
        <div className="w-full flex flex-row justify-end items-center gap-2 p-2">
            {children}
        </div>
    );
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
