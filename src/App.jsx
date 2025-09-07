import { useState } from "react";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import PreNav from "./components/navigation/PreNav";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <main>
      <PreNav />
      <Navigation activeSection={activeSection} />
      <Home setActiveSection={setActiveSection} />
    </main>
  );
}

export default App;
