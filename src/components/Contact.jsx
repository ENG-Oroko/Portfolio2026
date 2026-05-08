import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_1g3insi",
        "template_1k480mg",
        formRef.current,
        "fDdOb68X-Cw52sZMy"
      );

      setStatus("Message sent successfully!");
      formRef.current.reset();

    } catch (error) {
      console.log("EmailJS Error:", error);
      setStatus(error?.text || "Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-white px-4 py-16 flex items-center justify-center"
    >
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">

          <h2 className="text-3xl font-bold text-cyan-600 mb-2">
            Get in touch
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Send your details and I’ll respond as soon as possible.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">

            {/* CONTACT NAME */}
            <input
              type="text"
              name="contact_name"
              placeholder="Contact Name"
              required
              className="w-full p-3 border rounded-lg text-gray-900"
            />

            {/* CONTACT EMAIL */}
            <input
              type="email"
              name="contact_email"
              placeholder="Contact Email"
              required
              className="w-full p-3 border rounded-lg text-gray-900"
            />

            {/* CONTACT ADDRESS */}
            <input
              type="text"
              name="contact_address"
              placeholder="Contact Address"
              required
              className="w-full p-3 border rounded-lg text-gray-900"
            />

            {/* CONTACT PHONE */}
            <input
              type="tel"
              name="contact_phone"
              placeholder="Contact Phone"
              required
              className="w-full p-3 border rounded-lg text-gray-900"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold text-white transition ${
                loading
                  ? "bg-cyan-400 cursor-not-allowed"
                  : "bg-cyan-600 hover:bg-cyan-700"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* STATUS */}
            {status && (
              <p className="text-center text-sm text-gray-600 mt-2">
                {status}
              </p>
            )}

          </form>
        </div>

        {/* INFO */}
        <div className="flex flex-col justify-center space-y-5">

          <p className="text-gray-600 text-sm">
            Reach out through any channel for a quick response.
          </p>

          <div className="bg-white border p-4 rounded-xl">
            Location: Nairobi, Kenya
          </div>

          <a
            href="mailto:orokodouglas7@hotmail.com"
            className="bg-white border p-4 rounded-xl"
          >
            Email: orokodouglas7@hotmail.com
          </a>

          <a
            href="https://wa.me/254716926957"
            target="_blank"
            rel="noreferrer"
            className="bg-white border p-4 rounded-xl"
          >
            WhatsApp: Chat Now
          </a>

        </div>

      </div>
    </section>
  );
}