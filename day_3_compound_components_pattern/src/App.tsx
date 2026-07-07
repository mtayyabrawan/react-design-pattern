import Modal from "./messy/Modal";

function App() {
    return (
        <>
            <Modal
                title="Delete Account"
                body="Are you sure you want to delete account?"
                primaryBtn={
                    <button className="text-neutral-200 bg-red-600 rounded-lg py-2 px-4 text-sm font-medium outline-hidden cursor-pointer">
                        Delete
                    </button>
                }
                secondaryBtn={
                    <button className="text-neutral-200 bg-neutral-600 rounded-lg py-2 px-4 text-sm font-medium outline-hidden cursor-pointer">
                        Cancel
                    </button>
                }
            />
        </>
    );
}

export default App;
