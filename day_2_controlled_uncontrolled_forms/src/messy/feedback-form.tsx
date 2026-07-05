import { useState, useRef, type SubmitEvent } from "react";

export default function FeedbackForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const messageRef = useRef<null | HTMLTextAreaElement>(null); // using ref for message

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        if (!name) {
            alert("Name required");
            return;
        }
        if (!email.includes("@")) {
            alert("Valid email required");
            return;
        }
        if (!messageRef.current!.value) {
            messageRef.current!.focus();
            return;
        }
        console.log("Form submitted:", {
            name,
            email,
            message: messageRef.current!.value,
        });
    };

    return (
        <form
            className="flex flex-col max-w-2xl mx-auto mt-5 bg-neutral-300 p-5 rounded-xl"
            onSubmit={handleSubmit}
        >
            <h1 className="text-2xl font-semibold text-purple-500">
                Feedback Us
            </h1>
            <input
                className="border rounded-lg p-2 my-3 outline-hidden"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                className="border rounded-lg p-2 my-3 outline-hidden"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <textarea
                className="border rounded-lg p-2 my-3 outline-hidden resize-none"
                ref={messageRef}
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
