import digitalClockImg from "../assets/projects/clock.png";
import calculatorImg from "../assets/projects/calculator.png";
import weatherAppImg from "../assets/projects/weather.png";
import newtonWebsiteImg from "../assets/projects/nit.png";
import hardwarePosImg from "../assets/projects/pos.jpg";
import todo from "../assets/projects/todo.webp";

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
   
    
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-8 py-20 bg-white">

      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-cyan-500 mb-3">
          Projects
        </h2>
        <p className="text-gray-600">
          A collection of apps I’ve built using modern technologies.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

        {projects.map((project, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-2xl shadow-md"
          >

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition duration-500 flex flex-col items-center justify-center text-center px-4">

              <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                {project.title}
              </h3>

              <p className="text-gray-200 text-sm mt-2 opacity-0 group-hover:opacity-100 transition duration-300">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-4 flex gap-3 opacity-0 group-hover:opacity-100 transition duration-300">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-cyan-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-cyan-600 transition"
                >
                  View Live
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 text-sm rounded-lg hover:bg-gray-900 transition"
                >
                  Source Code
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}