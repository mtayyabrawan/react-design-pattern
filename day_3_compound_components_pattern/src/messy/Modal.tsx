import type { ReactNode } from "react";

function Modal({
    title,
    body,
    primaryBtn,
    secondaryBtn,
    toggleModal,
}: {
    title: string;
    body: string;
    primaryBtn: ReactNode;
    secondaryBtn: ReactNode;
    toggleModal: () => void;
}) {
    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm">
            <div className="mx-auto max-w-xl mt-10 bg-neutral-200 rounded-2xl p-5 space-y-2 relative">
                <button
                    type="button"
                    className="bg-red-600 text-white rounded-full absolute size-7 cursor-pointer outline-hidden -right-1 -top-1"
                    onClick={toggleModal}
                >
                    X
                </button>
                <h2 className="text-xl font-semibold text-red-500">{title}</h2>
                <p className="text-lg text-neutral-600">{body}</p>
                <div className="flex justify-end items-center w-full gap-4">
                    {secondaryBtn}
                    {primaryBtn}
                </div>
            </div>
        </div>
    );
}

export default Modal;
