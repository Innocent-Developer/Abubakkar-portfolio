import { Footer } from "./compontents/Footer";
import { NavBar } from "./compontents/NavBar";
import { About } from "./files/About";
import Contact from "./files/Contact";
import { FeedBack } from "./files/FeedBack";
// import Home from "./files/Herosection";
import { Services } from "./files/Services";
import { Routes, Route } from "react-router-dom";
import { Skill } from "./files/Skill";
import { Main } from "./files/Main";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

  
AOS.init();

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Main />
              {/* <Home /> */}
              <About />
                  <Skill />
                  <Services />
                  <Contact />
                  <FeedBack />
                </>
              }
            />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<FeedBack />} />
          </Routes>
          <Footer />
        </>
      );
    }

    export default App;
