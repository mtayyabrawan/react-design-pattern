import { useState, type MouseEvent, type ReactNode } from "react";

function MouseTrackerChildren({
    children,
}: {
    children: (position: Record<"x" | "y", number>) => ReactNode;
}) {
    const [position, setPosition] = useState<Record<"x" | "y", number>>({
        x: 0,
        y: 0,
    });
    function handleMouseMove(e: MouseEvent) {
        setPosition({ x: e.clientX, y: e.clientY });
    }
    return (
        <div
            className="size-96 bg-neutral-300 mx-auto rounded-2xl flex justify-center items-center  flex-col gap-5"
            onMouseMove={handleMouseMove}
        >
            {children(position)}
        </div>
    );
}

export default MouseTrackerChildren;
