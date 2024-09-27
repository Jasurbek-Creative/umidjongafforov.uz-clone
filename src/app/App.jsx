import About from "../about/About";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";

import "./App.css";

function App() {
  return (
    <div className="global_landing">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
