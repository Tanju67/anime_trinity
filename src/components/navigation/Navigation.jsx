import { useEffect, useState } from "react";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import SmallScreen from "./SmallScreen";

function Navigation({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-secondary fixed top-0 shadow-md"
          : "absolute top-[48px] bg-transparent lg:top-[60px]"
      }`}
    >
      <div className="container flex items-center justify-between px-4 py-4 sm:px-10">
        <Logo activeSection={activeSection} />
        <div>
          <Navlinks activeSection={activeSection} />
          <SmallScreen
            activeSection={activeSection}
            hamburger={hamburger}
            setHamburger={setHamburger}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
