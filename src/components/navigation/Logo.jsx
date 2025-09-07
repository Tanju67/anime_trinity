import logo from "../../assets/photos/logo.png";
import logoBleach from "../../assets/photos/logoBleach.png";
import logoNaruto from "../../assets/photos/logoNaruto.png";
import logoOne from "../../assets/photos/logoOne.webp";

function Logo({ activeSection }) {
  if (activeSection === "onepiece") {
    return <img src={logoOne} className="h-8 md:h-12" alt="" />;
  } else if (activeSection === "naruto") {
    return <img src={logoNaruto} className="h-8 md:h-12" alt="" />;
  } else if (activeSection === "bleach") {
    return <img src={logoBleach} className="h-8 md:h-12" alt="" />;
  }
  return <img src={logo} className="h-8 md:h-12" alt="" />;
}

export default Logo;
