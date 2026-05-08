import githubIcon from "../assets/github.png";
import youtubeIcon from "../assets/youtube.png";
import linkedinIcon from "../assets/linkedin.png";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-4 text-center text-gray-600 bg-white">

      {/* Icons */}
      <div className="flex justify-center gap-4 mb-2">

        <a
          href="https://github.com/ENG-Oroko"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:opacity-80 transition"
        >
          <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
        </a>

        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="hover:opacity-80 transition"
        >
          <img src={youtubeIcon} alt="YouTube" className="w-5 h-5" />
        </a>

        <a
          href="https://linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:opacity-80 transition"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
        </a>

      </div>

      {/* Text */}
      <p className="text-[11px]">
        © 2026{" "}
        <span className="text-cyan-500 font-medium">
          Douglas Oroko
        </span>
      </p>

    </footer>
  );
}