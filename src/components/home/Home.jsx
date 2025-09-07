import About from "./About";
import Bleach from "./Bleach";
import Footer from "./Footer";
import Header from "./Header";
import Naruto from "./Naruto";
import OnePiece from "./OnePiece";

function Home({ setActiveSection }) {
  return (
    <div>
      <Header setActiveSection={setActiveSection} />
      <About setActiveSection={setActiveSection} />
      <div className="onePieceFix h-[300px] lg:h-[400px]"></div>
      <OnePiece setActiveSection={setActiveSection} />
      <div className="narutoFix h-[300px] lg:h-[400px]"></div>
      <Naruto setActiveSection={setActiveSection} />
      <div className="bleachFix h-[300px] lg:h-[400px]"></div>
      <Bleach setActiveSection={setActiveSection} />
      <Footer />
    </div>
  );
}

export default Home;
