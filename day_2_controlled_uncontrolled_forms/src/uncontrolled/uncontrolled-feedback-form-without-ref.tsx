import type { SubmitEvent } from "react";

function UncontrolledFeedbackFormWithoutRef() {
    function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries()) as Record<
            "name" | "email" | "message",
            string
        >;
        console.log("Form Submitted:", data);
        e.target.reset();
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
                type="text"
                name="name"
                placeholder="Name"
            />
            <input
                className="border rounded-lg p-2 my-3 outline-hidden"
                type="email"
                name="email"
                placeholder="Email"
            />
            <textarea
                className="border rounded-lg p-2 my-3 outline-hidden resize-none"
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

export default UncontrolledFeedbackFormWithoutRef;
