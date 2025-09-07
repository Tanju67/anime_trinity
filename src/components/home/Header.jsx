import { useEffect, useRef } from "react";
import logoBleach from "../../assets/photos/logoBleach.png";
import logoNaruto from "../../assets/photos/logoNaruto.png";
import logoOnepiece from "../../assets/photos/logoOne.webp";
import video from "../../assets/video/video.mp4";
import Section from "./Section";

function Header({ setActiveSection }) {
  return (
    <Section
      id="home"
      onVisible={setActiveSection}
      className="relative h-screen w-full overflow-hidden"
    >
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 h-full w-full bg-black/60" />
      <div className="relative z-30 flex h-full items-center justify-center text-white">
        <div className="flex flex-col items-center gap-2 p-8 transition-all duration-300 ease-in-out hover:bg-black/80">
          <div className="flex items-center justify-center gap-8">
            <img
              src={logoOnepiece}
              className="w-16 flex-1 sm:w-20 md:w-24"
              alt=""
            />
            <img
              src={logoNaruto}
              className="w-16 flex-1 sm:w-20 md:w-24"
              alt=""
            />
            <img
              src={logoBleach}
              className="w-16 flex-1 sm:w-20 md:w-24"
              alt=""
            />
          </div>

          <h1 className="text-3xl font-bold sm:text-5xl md:text-7xl">
            Anime Trinity
          </h1>
          <p className="text-xl md:text-2xl">
            Everything you need in one place
          </p>
          <a
            href="#about"
            className="bg-secondary hover:bg-secondary/80 mt-2 px-4 py-2 transition-all duration-300 ease-in-out"
          >
            Let's begin
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Header;
