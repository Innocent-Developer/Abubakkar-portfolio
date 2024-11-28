import { NavBar } from "./compontents/NavBar";
import { About } from "./files/About";
import Contact from "./files/Contact";
import Home from "./files/Herosection";
import { Services } from "./files/Services";


function App() {
  return (
    <>
    <NavBar />
    <Home />
    <About />
    <Services />
    <Contact />
    </>
  );
}

export default App;
