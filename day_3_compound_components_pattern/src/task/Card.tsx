import type { ReactNode } from "react";

function Card({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col justify-start items-start gap-2 rounded-2xl bg-blue-200 ring ring-black/30 p-4 max-w-md w-full h-max">
            {children}
        </div>
    );
}

function Image({
    src,
    alt,
    className,
}: {
    src: string;
    alt: string;
    className: string;
}) {
    return (
        <img src={src} alt={alt} className={`w-full rounded-xl ${className}`} />
    );
}

function Header({ children }: { children: ReactNode }) {
    return (
        <h2 className="text-2xl font-semibold text-center  text-neutral-950 w-full tracking-tight">
            {children}
        </h2>
    );
}

function Body({ children }: { children: ReactNode }) {
    return (
        <p className="text-base font-normal text-start text-neutral-700 w-full py-2">
            {children}
        </p>
    );
}

function Footer({ children }: { children: ReactNode }) {
    return (
        <p className="text-sm flex font-normal justify-start items-center flex-wrap text-neutral-600 w-full gap-4 p-2">
            {children}
        </p>
    );
}

Card.Image = Image;
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
