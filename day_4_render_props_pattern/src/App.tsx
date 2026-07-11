// import BikeTracker from "./messy/bike-tracker";
// import CarTracker from "./messy/car-tracker";

import MouseTracker from "./with-pattern/mouse-tracker";

function App() {
    return (
        <div className="min-h-svh w-full bg-neutral-100 pt-5">
            {/* <CarTracker />
            <BikeTracker /> */}
            <MouseTracker
                render={({ x, y }) => (
                    <>
                        <span className="text-9xl">🚗</span>
                        <span className="text-lg">
                            ({x}x, {y}y)
                        </span>
                    </>
                )}
            />
            <MouseTracker
                render={({ x, y }) => (
                    <>
                        <span className="text-9xl">🏍</span>
                        <span className="text-lg">
                            ({x}x, {y}y)
                        </span>
                    </>
                )}
            />
        </div>
    );
}

export default App;
