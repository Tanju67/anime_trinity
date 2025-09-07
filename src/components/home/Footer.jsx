import logoBleach from "../../assets/photos/logoBleach.png";
import logoNaruto from "../../assets/photos/logoNaruto.png";
import logoOnepiece from "../../assets/photos/logoOne.webp";

function Footer() {
  return (
    <footer className="bg-secondary px-4 py-8 sm:px-10 sm:py-20">
      <div className="container">
        <div className="flex items-center justify-between gap-8 lg:gap-40">
          <img src={logoOnepiece} className="w-16 flex-1" alt="" />
          <img src={logoNaruto} className="w-16 flex-1" alt="" />
          <img src={logoBleach} className="w-16 flex-1" alt="" />
        </div>
        <p className="mt-4 text-center text-xs text-white sm:text-sm">
          &copy; 2025 Anime Trinity. This website is for educational purposes
          only. Created by Tanju Özer.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
