const projects = [
  {
    title: "SMS Privacy App",
    description: "Send and receive SMS messages with a clean interface.",
  },
  {
    title: "Expense Budgeting App",
    description: "Track spending and manage your budget easily.",
  },
  {
    title: "FlipIQ",
    description: "AI flashcards for smarter learning and memory retention.",
  },
  {
    title: "KCA Timetable App",
    description: "Simple visual timetable for students.",
  },
  {
    title: "Delivery System",
    description: "Real-time package tracking and dispatch system.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-8 py-20 bg-white"
    >

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-cyan-500 mb-3">
          Projects
        </h2>

        <p className="text-gray-600">
          A collection of apps I’ve built using modern technologies.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
          >

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {project.title}
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              {project.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}