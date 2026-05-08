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

      setStatus(
        error?.text
          ? error.text
          : "Failed to send message. Check EmailJS configuration."
      );
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
            Send a message and I’ll respond as soon as possible.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">

            {/* NAME */}
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 outline-none"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 outline-none"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 resize-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 outline-none"
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
            Reach out to me through any of the channels below for a quick response.
          </p>

          {/* EMAIL */}
          <a
            href="mailto:orokodouglas7@hotmail.com"
            className="bg-white border border-gray-200 p-4 rounded-xl hover:border-cyan-500 transition"
          >
            <h3 className="text-gray-500 text-xs">Email</h3>
            <p className="text-gray-900 font-medium">
              orokodouglas7@hotmail.com
            </p>
          </a>

          {/* LOCATION */}
          <div className="bg-white border border-gray-200 p-4 rounded-xl">
            <h3 className="text-gray-500 text-xs">Location</h3>
            <p className="text-gray-900 font-medium">
              Nairobi, Kenya
            </p>
          </div>

          {/* GITHUB */}
          <a
            href="https://github.com/ENG-Oroko"
            target="_blank"
            rel="noreferrer"
            className="bg-white border border-gray-200 p-4 rounded-xl hover:border-cyan-500 transition"
          >
            <h3 className="text-gray-500 text-xs">GitHub</h3>
            <p className="text-gray-900 font-medium">
              ENG-Oroko
            </p>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/254716926957"
            target="_blank"
            rel="noreferrer"
            className="bg-white border border-gray-200 p-4 rounded-xl hover:border-green-500 transition"
          >
            <h3 className="text-gray-500 text-xs">WhatsApp</h3>
            <p className="text-gray-900 font-medium">
              Chat on WhatsApp
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}