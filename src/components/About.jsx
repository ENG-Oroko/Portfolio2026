import aboutMeImage from "../assets/me.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-8 py-20 flex flex-col justify-center bg-white overflow-hidden"
    >
      {/* Floating background effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-60 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60 animate-pulse" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14 relative z-10">

        {/* 3D Image Container */}
<div className="group perspective">
  <div
    className="relative w-40 h-40 md:w-64 md:h-64
    transition-transform duration-500 ease-out
    group-hover:rotate-y-12 group-hover:rotate-x-6
    transform-gpu"
  >
    {/* Glow behind image */}
    <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-2xl opacity-40 group-hover:opacity-70 transition" />

    <img
      src={aboutMeImage}
      alt="About Me"
      className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-white"
    />
  </div>
</div>

        {/* Content */}
        <div className="animate-fadeIn">

          <h2 className="text-4xl font-bold text-cyan-500 mb-6">
            About Me
          </h2>

          <p className="text-gray-600 leading-8 max-w-2xl mb-8">
            Specializing in the intersection of mobile performance and intuitive design,
            I engineer applications using Flutter, SwiftUI, and Kotlin. My background in
            full-stack development allows me to bridge the gap between complex frontend
            interfaces and robust backend systems. From optimizing bundle sizes to
            implementing seamless API and database integrations (SQL/NoSQL), I focus on
            building software that is as technically sound as it is user-centric.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">

            <div>
              <p className="font-semibold text-gray-900">Location:</p>
              <p>Nairobi, Kenya</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Nationality:</p>
              <p>Kenyan</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Interests:</p>
              <p>Car enthusiast, Handball</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Study:</p>
              <p>Newton Institute of Technology</p>
            </div>

          </div>

        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }

        .rotate-y-12 {
          transform: rotateY(12deg);
        }

        .rotate-x-6 {
          transform: rotateX(6deg);
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}