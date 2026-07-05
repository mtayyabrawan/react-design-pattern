import { useRef, type SubmitEvent } from "react";

function UncontrolledFeedbackForm() {
    const nameRef = useRef<null | HTMLInputElement>(null);
    const emailRef = useRef<null | HTMLInputElement>(null);
    const messageRef = useRef<null | HTMLTextAreaElement>(null);
    function handleSubmit(e: SubmitEvent) {
        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const message = messageRef.current?.value;
        e.preventDefault();
        if (!name) {
            nameRef.current?.focus();
            return;
        }
        if (!email?.includes("@")) {
            emailRef.current?.focus();
            return;
        }
        if (!message) {
            messageRef.current?.focus();
            return;
        }
        console.log("Form submitted:", { name, email, message });
    }
    return (
        <form
            className="flex flex-col max-w-2xl mx-auto mt-5 bg-neutral-300 p-5 rounded-xl"
            noValidate
            onSubmit={handleSubmit}
        >
            <h1 className="text-2xl font-semibold text-purple-500">
                Feedback Us
            </h1>
            <input
                className="border rounded-lg p-2 my-3 outline-hidden"
                ref={nameRef}
                type="text"
                name="name"
                placeholder="Name"
            />
            <input
                className="border rounded-lg p-2 my-3 outline-hidden"
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Email"
            />
            <textarea
                className="border rounded-lg p-2 my-3 outline-hidden resize-none"
                ref={messageRef}
                name="message"
                placeholder="Your message"
            />
            <button
                className="bg-purple-500 text-white p-2 rounded-lg cursor-pointer outline-hidden"
                type="submit"
            >
                Send Feedback
            </button>
        </form>
    );
}

export default UncontrolledFeedbackForm;
