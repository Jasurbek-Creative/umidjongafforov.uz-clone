import About from "../about/About";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";
import Skills from "../skills/Skills";
import "devicon/devicon.min.css";

import "./App.css";
import Project from "../project/Project";

function App() {
  return (
    <div className="global_landing">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
