function Navlinks({ activeSection }) {
  return (
    <ul className="hidden items-center text-lg font-bold text-white md:flex">
      <li>
        <a
          className={`${activeSection === "home" ? "text-secondary bg-white" : ""} px-4 py-2`}
          href="#home"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className={`${activeSection === "about" ? "text-secondary bg-white" : ""} px-4 py-2`}
          href="#about"
        >
          About
        </a>
      </li>
      <li>
        <a
          className={`${activeSection === "onepiece" ? "text-secondary bg-white" : ""} px-4 py-2`}
          href="#onepiece"
        >
          One Piece
        </a>
      </li>
      <li>
        <a
          className={`${activeSection === "naruto" ? "text-secondary bg-white" : ""} px-4 py-2`}
          href="#naruto"
        >
          Naruto
        </a>
      </li>
      <li>
        <a
          href="#bleach"
          className={`${activeSection === "bleach" ? "text-secondary bg-white" : ""} px-4 py-2`}
        >
          Bleach
        </a>
      </li>
    </ul>
  );
}

export default Navlinks;
