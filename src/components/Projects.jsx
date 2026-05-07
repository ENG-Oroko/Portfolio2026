const projects = [
  {
    title: "POS Management System",
    description:
      "Modern POS system with analytics dashboard.",
  },

  {
    title: "Flutter Mobile App",
    description:
      "Cross-platform app with Firebase integration.",
  },

  {
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio website.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-8 py-20 flex flex-col justify-center"
    >
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111827] p-6 rounded-2xl border border-gray-800"
          >
            <h3 className="text-xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}