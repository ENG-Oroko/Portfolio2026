import githubIcon from "../assets/github.png";
import youtubeIcon from "../assets/youtube.png";
import linkedinIcon from "../assets/linkedin.png";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-6 text-center text-gray-500 bg-[#0f172a]">

      {/* Icons */}
      <div className="flex justify-center gap-5 mb-3">

        {/* GitHub */}
        <a
          href="https://github.com/ENG-Oroko"
          target="_blank"
          rel="noopener noreferrer"
          className="group transition transform hover:scale-110 duration-200"
        >
          <img
            src={githubIcon}
            alt="GitHub"
            className="w-6 h-6 opacity-80 group-hover:opacity-100 transition group-hover:drop-shadow-[0_0_6px_#00ffff]"
          />
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group transition transform hover:scale-110 duration-200"
        >
          <img
            src={youtubeIcon}
            alt="YouTube"
            className="w-6 h-6 opacity-80 group-hover:opacity-100 transition group-hover:drop-shadow-[0_0_6px_red]"
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className="group transition transform hover:scale-110 duration-200"
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="w-6 h-6 opacity-80 group-hover:opacity-100 transition group-hover:drop-shadow-[0_0_6px_blue]"
          />
        </a>

      </div>

      {/* Thin line */}
      <div className="w-16 h-[1px] bg-cyan-500 mx-auto mb-3 opacity-40"></div>

      {/* Text */}
      <p className="text-xs">
        © 2026{" "}
        <span className="text-cyan-400 font-medium">
          Douglas Oroko
        </span>
      </p>
    </footer>
  );
}