import digitalClockImg from "../assets/projects/clock.png";
import calculatorImg from "../assets/projects/calculator.png";
import weatherAppImg from "../assets/projects/weather.png";
import newtonWebsiteImg from "../assets/projects/nit.png";
import hardwarePosImg from "../assets/projects/pos.jpg";
import todo from "../assets/projects/todo.webp";

/* ✅ THIS MUST EXIST */
const projects = [
  {
    title: "Digital Clock",
    description: "A simple live digital clock showing real-time updates.",
    image: digitalClockImg,
    live: "https://digitalclockap2026.netlify.app/",
    code: "https://github.com/ENG-Oroko/-Digital-Clock.git",
  },
  {
    title: "Calculator",
    description: "A basic calculator for quick and easy calculations.",
    image: calculatorImg,
    live: "https://digitalanalogclock1.netlify.app/",
    code: "https://github.com/ENG-Oroko/-Simple-Calculator.git",
  },
  {
    title: "Weather App",
    description: "Get real-time weather updates for any location.",
    image: weatherAppImg,
    live: "https://apiweatherapp2026.netlify.app/",
    code: "https://github.com/ENG-Oroko/-Weather-App-API-based-.git",
  },
  {
    title: "Newton Website",
    description: "School website built with modern UI design.",
    image: newtonWebsiteImg,
    live: "https://www.niteducation.com/",
  },
  {
    title: "Hardware POS",
    description: "Point of Sale system for hardware shop management.",
    image: hardwarePosImg,
    live: "https://nexhardware.netlify.app/",
    code: "https://github.com/ENG-Oroko/Hardware-Pos-client.git",
  },
  {
    title: "Todo List App",
    description: "Coming soon — task management with state handling.",
    image: todo,
    live: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 bg-white">

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-500 mb-3">
          Projects
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          A collection of apps I’ve built using modern technologies.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative rounded-2xl overflow-hidden shadow-lg bg-white"
          >

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover transition duration-500 group-hover:scale-105"
            />

            {/* Overlay (works for hover + mobile tap feel) */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">

              {/* Always readable on mobile */}
              <h3 className="text-white text-lg font-bold">
                {project.title}
              </h3>

              <p className="text-gray-200 text-sm mt-1 line-clamp-2">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-4 flex flex-wrap gap-2">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center bg-cyan-500 text-white px-3 py-2 text-sm rounded-lg hover:bg-cyan-600 transition"
                >
                  Live
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center bg-gray-900 text-white px-3 py-2 text-sm rounded-lg hover:bg-black transition"
                >
                  Code
                </a>

              </div>
            </div>

            {/* Mobile-friendly always-visible footer */}
            <div className="p-4 sm:hidden">
              <h3 className="font-semibold text-gray-800">{project.title}</h3>
              <p className="text-xs text-gray-500 line-clamp-2">
                {project.description}
              </p>

              <div className="mt-3 flex gap-2">
                <a
                  href={project.live}
                  className="flex-1 text-center bg-cyan-500 text-white py-2 text-xs rounded-md"
                >
                  Live
                </a>

                <a
                  href={project.code}
                  className="flex-1 text-center bg-gray-800 text-white py-2 text-xs rounded-md"
                >
                  Code
                </a>
              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}