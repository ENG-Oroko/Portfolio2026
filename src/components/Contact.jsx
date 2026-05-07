export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#111827] flex flex-col justify-center items-center text-center px-8"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">
        Contact Me
      </h2>

      <p className="text-gray-300 mb-8">
        Interested in working together?
      </p>

      <a
        href="mailto:youremail@example.com"
        className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition"
      >
        Send Email
      </a>
    </section>
  );
}