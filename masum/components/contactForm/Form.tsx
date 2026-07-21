"use client";

import { useState } from "react";
import { FiCheckCircle, FiSend, FiXCircle } from "react-icons/fi";

export default function Form() {
  const web3FormKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!web3FormKey) {
      console.error("Web3Forms key missing");
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Dynamic Subject
    const name = formData.get("name") || "Someone";
    formData.set("subject", `New message from ${name}`);

    // API key
    formData.append("access_key", web3FormKey);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Hidden */}
        <input type="checkbox" name="botcheck" className="hidden" />

        {/* Name */}
        <div>
          <label className="block text-base text-gray-900 font-semibold mb-2 tracking-[4px]">
            NAME
          </label>
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full border rounded-lg px-4 py-3 placeholder:text-gray-400 placeholder:text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-base text-gray-900 font-semibold mb-2 tracking-[4px]">
            EMAIL
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@email.com"
            className="w-full border rounded-lg px-4 py-3 placeholder:text-gray-400 placeholder:text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-base text-gray-900 font-semibold mb-2 tracking-[4px]">
            MESSAGE
          </label>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Tell me about the project..."
            className="w-full border rounded-lg px-4 py-3 placeholder:text-gray-400 text-gray-900 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-black resize-none"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-full flex items-center justify-center gap-2 cursor-pointer 
          text-sm tracking-wide transition-all duration-300
          ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:opacity-90 active:scale-[0.98]"
          } text-white hover:border border-orange-500`}
        >
          {loading ? "Sending..." : "Send message"}
          {!loading && <FiSend />}
        </button>
      </form>

      {/* Status Modal */}
      {status && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center animate-[fadeIn_.3s_ease]">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div
                className={`p-4 rounded-full ${
                  status === "success" ? "bg-green-100" : "bg-red-100"
                }`}
              >
                {status === "success" ? (
                  <FiCheckCircle className="text-green-600 text-3xl" />
                ) : (
                  <FiXCircle className="text-red-600 text-3xl" />
                )}
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {status === "success" ? "Successfully!" : "Something went wrong"}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {status === "success" ? (
                <>
                  Thank you for reaching out to us. <br />
                  I’ll review your message and get back to you soon.
                </>
              ) : (
                <>
                  Oops! Your message couldn’t be sent. <br />
                  Please try again.
                </>
              )}
            </p>

            {/* Button */}
            <button
              onClick={() => setStatus("")}
              className="mt-6 px-6 py-2 rounded-full bg-black text-white text-sm hover:opacity-90 transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
