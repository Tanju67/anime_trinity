import { motion } from "framer-motion";

function SmallScreenMenu({ hamburger, setHamburger, activeSection }) {
  return (
    <motion.ul
      className="bg-secondary absolute top-0 left-0 z-40 flex h-screen w-full flex-col items-center justify-center gap-4 text-lg font-bold text-white md:hidden"
      variants={{
        hidden: { height: 0, opacity: 0 },
        show: { height: "100vh", opacity: 0.95 },
      }}
      initial="hidden"
      animate={hamburger ? "show" : "hidden"}
      transition={{ duration: 0.3 }}
      exit="hidden"
    >
      <li>
        <a
          href="#home"
          onClick={() => {
            setHamburger(!hamburger);
          }}
          className={`${activeSection === "home" ? "text-secondary bg-white" : ""} px-4 py-2`}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          onClick={() => {
            setHamburger(!hamburger);
          }}
          className={`${activeSection === "about" ? "text-secondary bg-white" : ""} px-4 py-2`}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#onepiece"
          onClick={() => {
            setHamburger(!hamburger);
          }}
          className={`${activeSection === "onepiece" ? "text-secondary bg-white" : ""} px-4 py-2`}
        >
          One Piece
        </a>
      </li>
      <li>
        <a
          href="#naruto"
          onClick={() => {
            setHamburger(!hamburger);
          }}
          className={`${activeSection === "naruto" ? "text-secondary bg-white" : ""} px-4 py-2`}
        >
          Naruto
        </a>
      </li>
      <li>
        <a
          href="#bleach"
          onClick={() => {
            setHamburger(!hamburger);
          }}
          className={`${activeSection === "bleach" ? "text-secondary bg-white" : ""} px-4 py-2`}
        >
          Bleach
        </a>
      </li>
    </motion.ul>
  );
}

export default SmallScreenMenu;
