import { type SubmitEvent } from "react";

type FormData = Record<"name" | "email" | "ph_number" | "message", string> & {
    subject: "general_inquiry" | "technical_issue" | "feedback" | "other";
};

function UnControlledContactFormNoRef() {
    function validate(data: FormData): boolean {
        if (data.name.trim().length < 3) {
            return false;
        } else if (data.name.trim().length > 50) {
            return false;
        } else if (!data.email.includes("@")) {
            return false;
        } else if (data.message.trim().length < 10) {
            return false;
        } else if (data.message.trim().length > 500) {
            return false;
        } else if (data.ph_number.trim().length > 14) {
            return false;
        } else if (data.ph_number.trim().length < 10) {
            return false;
        } else {
            return true;
        }
    }

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries()) as FormData;
        if (validate(data)) {
            console.log("Form Data:", formData);
            alert("Form submitted successfully!");
            e.target.reset();
        } else {
            alert("Invalid form data!");
        }
    }

    return (
        <form
            className="grid grid-cols-2 max-w-2xl mx-auto mt-5 bg-neutral-300 p-5 rounded-xl gap-4"
            noValidate
            onSubmit={handleSubmit}
        >
            <h1 className="text-2xl font-semibold text-purple-500 col-span-2">
                Contact Us
            </h1>
            <input
                className="border rounded-lg p-2 outline-hidden w-full"
                type="text"
                name="name"
                placeholder="Name"
            />
            <input
                className="border rounded-lg p-2 outline-hidden w-full"
                type="email"
                name="email"
                placeholder="Email"
            />
            <input
                className="border rounded-lg p-2 outline-hidden w-full"
                type="text"
                name="ph_number"
                placeholder="Phone Number"
            />
            <select
                name="subject"
                id="subject"
                className="border rounded-lg p-2 outline-hidden w-full"
            >
                <option value="other">Other</option>
                <option value="general_inquiry">General Inquiry</option>
                <option value="technical_issue">Technical Issue</option>
                <option value="feedback">Feedback & Suggestions</option>
            </select>
            <textarea
                className="border rounded-lg p-2 outline-hidden resize-none h-40 w-full col-span-2"
                name="message"
                placeholder="Your message"
            />
            <button
                className="bg-purple-500 text-white p-2 rounded-lg cursor-pointer outline-hidden col-span-2"
                type="submit"
            >
                Send Feedback
            </button>
        </form>
    );
}

export default UnControlledContactFormNoRef;
