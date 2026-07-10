import { useState } from "react";
// import Modal from "./messy/Modal";

import Modal from "./with-pattern/Modal";
import Accordian from "./with-pattern/Accordian";
import Card from "./task/Card";

function App() {
    const [isOpen, setOpen] = useState(false);
    function toggleModal() {
        setOpen((prev) => !prev);
    }
    return (
        <div className="h-svh w-full bg-neutral-100 pt-5">
            <button
                type="button"
                className="text-neutral-200 bg-red-600 rounded-lg py-2 px-4 text-sm font-medium outline-hidden cursor-pointer mx-auto block "
                onClick={toggleModal}
            >
                Delete Account
            </button>
            {/* {isOpen && (
                <Modal
                    title="Delete Account"
                    body="Are you sure you want to delete account?"
                    primaryBtn={
                        <button className="text-neutral-200 bg-red-600 rounded-lg py-2 px-4 text-sm font-medium outline-hidden cursor-pointer">
                            Delete
                        </button>
                    }
                    secondaryBtn={
                        <button
                            className="text-neutral-200 bg-neutral-600 rounded-lg py-2 px-4 text-sm font-medium outline-hidden cursor-pointer"
                            onClick={toggleModal}
                        >
                            Cancel
                        </button>
                    }
                    toggleModal={toggleModal}
                />
            )} */}
            <Modal isOpen={isOpen} toggleModal={toggleModal}>
                <Modal.Header>
                    <h2 className="text-xl font-semibold text-red-500">
                        Delete Modal
                    </h2>
                </Modal.Header>
                <Modal.Body>
                    <p className="text-lg text-neutral-600">
                        Are you sure you want to delete your account?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        onClick={toggleModal}
                        className="text-sm font-medium py-2 px-4 rounded-md outline-hidden cursor-pointer bg-neutral-600 text-neutral-200"
                    >
                        Cancel
                    </button>
                    <button className="text-sm font-medium py-2 px-4 rounded-md outline-hidden cursor-pointer bg-red-600 text-neutral-200">
                        Delete
                    </button>
                </Modal.Footer>
            </Modal>
            <Accordian>
                <Accordian.Item title="Which payment methods are available?">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatum, quas!
                </Accordian.Item>
                <Accordian.Item title="Which payment methods are available?">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatum, quas!
                </Accordian.Item>
            </Accordian>
            <div className="grid grid-cols-3 gap-4 p-4">
                <Card>
                    <Card.Image
                        src="/my_photo.png"
                        alt="Muhammad Tayyab"
                        className="aspect-3/4 object-cover"
                    />
                    <Card.Header>Muhammad Tayyab</Card.Header>
                    <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus, nemo expedita nisi eveniet neque molestias saepe
                        est vitae possimus autem facilis esse earum ab. Dicta
                        maxime sit quasi omnis, totam hic vel, odio minima nobis
                        perspiciatis accusamus doloremque sequi explicabo?
                    </Card.Body>
                    <Card.Footer>
                        <a href="#">Lorem ipsum</a>
                        <a href="#">Lorem ipsum</a>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Header>Muhammad Tayyab</Card.Header>
                    <Card.Image
                        src="/my_photo.png"
                        alt="Muhammad Tayyab"
                        className="aspect-square object-cover"
                    />
                    <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus, nemo expedita nisi eveniet neque molestias saepe
                        est vitae possimus autem facilis esse earum ab. Dicta
                        maxime sit quasi omnis, totam hic vel, odio minima nobis
                        perspiciatis accusamus doloremque sequi explicabo?
                    </Card.Body>
                    <Card.Footer>
                        <a href="#">Lorem ipsum</a>
                        <a href="#">Lorem ipsum</a>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Header>Muhammad Tayyab</Card.Header>
                    <Card.Image
                        src="/my_photo.png"
                        alt="Muhammad Tayyab"
                        className="aspect-4/3 object-cover rotate-y-180"
                    />
                    <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus, nemo expedita nisi eveniet neque molestias saepe
                        est vitae possimus autem facilis esse earum ab. Dicta
                        maxime sit quasi omnis, totam hic vel, odio minima nobis
                        perspiciatis accusamus doloremque sequi explicabo?
                    </Card.Body>
                    <Card.Footer>
                        <a href="#">Lorem ipsum</a>
                        <a href="#">Lorem ipsum</a>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}

export default App;
