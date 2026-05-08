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
        "template_fm32h6u",
        formRef.current,
        "fDdOb68X-Cw52sZMy"
      );

      setStatus("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.log("FAILED...", error);

      setStatus(
        error?.text
          ? error.text
          : "Failed to send message. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-white px-4 py-20 flex items-center justify-center"
    >
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">

        {/* CONTACT FORM */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg">

          <h2 className="text-3xl font-bold text-cyan-600 mb-2">
            Get In Touch
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Send me a message and I’ll get back to you soon.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">

            {/* NAME */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Name
              </label>

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Email
              </label>

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Message
              </label>

              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 resize-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold transition ${
                loading
                  ? "bg-cyan-300 cursor-not-allowed"
                  : "bg-cyan-500 hover:bg-cyan-600 text-white"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* STATUS */}
            {status && (
              <p className="text-center text-sm text-gray-600 mt-3">
                {status}
              </p>
            )}

          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col justify-center space-y-5">

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>

            <p className="text-gray-500">
              Feel free to reach out through any platform below.
            </p>
          </div>

          {/* EMAIL */}
          <a
            href="mailto:orokodouglas7@hotmail.com"
            className="bg-white border border-gray-200 p-5 rounded-xl hover:border-cyan-400 transition shadow-sm"
          >
            <h3 className="text-gray-500 text-sm">Email</h3>
            <p className="text-gray-900 font-medium">
              orokodouglas7@hotmail.com
            </p>
          </a>

          {/* LOCATION */}
          <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
            <h3 className="text-gray-500 text-sm">Location</h3>
            <p className="text-gray-900 font-medium">
              Nairobi, Kenya
            </p>
          </div>

          {/* GITHUB */}
          <a
            href="https://github.com/ENG-Oroko"
            target="_blank"
            rel="noreferrer"
            className="bg-white border border-gray-200 p-5 rounded-xl hover:border-cyan-400 transition shadow-sm"
          >
            <h3 className="text-gray-500 text-sm">GitHub</h3>
            <p className="text-gray-900 font-medium">ENG-Oroko</p>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/254716926957"
            target="_blank"
            rel="noreferrer"
            className="bg-white border border-gray-200 p-5 rounded-xl hover:border-green-500 transition shadow-sm"
          >
            <h3 className="text-gray-500 text-sm">WhatsApp</h3>
            <p className="text-gray-900 font-medium">
              Chat on WhatsApp
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}