import { useState, useRef, type SubmitEvent, type ChangeEvent } from "react";

export default function ControlledFeedbackForm() {
    const [formData, setFormData] = useState<
        Record<"name" | "email" | "message", string>
    >({ name: "", email: "", message: "" });

    const nameRef = useRef<null | HTMLInputElement>(null);
    const emailRef = useRef<null | HTMLInputElement>(null);
    const messageRef = useRef<null | HTMLTextAreaElement>(null);

    function handleChange(e: ChangeEvent) {
        const { name, value } = e.target as
            | HTMLInputElement
            | HTMLTextAreaElement;
        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    }

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        if (!formData.name) {
            nameRef.current?.focus();
            return;
        }
        if (!formData.email.includes("@")) {
            emailRef.current?.focus();
            return;
        }
        if (!formData.message) {
            messageRef.current?.focus();
            return;
        }
        console.log("Form submitted:", formData);
    }

    return (
        <form
            className="flex flex-col max-w-2xl mx-auto mt-5 bg-neutral-300 p-5 rounded-xl"
            onSubmit={handleSubmit}
            noValidate
        >
            <h1 className="text-2xl font-semibold text-purple-500">
                Feedback Us
            </h1>
            <input
                className="border rounded-lg p-2 my-3 outline-hidden"
                ref={nameRef}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                className="border rounded-lg p-2 my-3 outline-hidden"
                ref={emailRef}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <textarea
                className="border rounded-lg p-2 my-3 outline-hidden resize-none"
                ref={messageRef}
                name="message"
                value={formData.message}
                onChange={handleChange}
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
