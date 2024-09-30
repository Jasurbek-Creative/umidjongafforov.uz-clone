import About from "../about/About";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";
import Skills from "../skills/Skills";

import "./App.css";

function App() {
  return (
    <div className="global_landing">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
    </div>
  );
}

export default App;
