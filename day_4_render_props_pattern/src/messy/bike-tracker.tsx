import { useState, type MouseEvent } from "react";

function BikeTracker() {
    const [position, setPosition] = useState<Record<"x" | "y", number>>({
        x: 0,
        y: 0,
    });
    function handleMouseMove(e: MouseEvent) {
        setPosition({ x: e.clientX, y: e.clientY });
    }
    return (
        <div
            className="size-96 bg-neutral-300 mx-auto rounded-2xl flex justify-center items-center  flex-col gap-5 mt-5"
            onMouseMove={handleMouseMove}
        >
            <span className="text-9xl">🏍</span>
            <span className="text-lg">
                ({position.x}x, {position.y}y)
            </span>
        </div>
    );
}

export default BikeTracker;
