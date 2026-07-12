// import BikeTracker from "./messy/bike-tracker";
// import CarTracker from "./messy/car-tracker";

import MouseTracker from "./with-pattern/mouse-tracker";
import MouseTrackerChildren from "./with-pattern/mouse-tracker-children";

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
            <h2 className="text-xl text-center my-6">With Children</h2>
            <MouseTrackerChildren>
                {({ x, y }) => (
                    <>
                        <span className="text-9xl">🚗</span>
                        <span className="text-lg">
                            ({x}x, {y}y)
                        </span>
                    </>
                )}
            </MouseTrackerChildren>
            <MouseTrackerChildren>
                {({ x, y }) => (
                    <>
                        <span className="text-9xl">🏍</span>
                        <span className="text-lg">
                            ({x}x, {y}y)
                        </span>
                    </>
                )}
            </MouseTrackerChildren>
        </div>
    );
}

export default App;
