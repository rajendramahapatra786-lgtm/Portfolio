import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CursorGlow from "./components/CursorGlow/CursorGlow";
import Particles from "./components/Particles/Particles";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import { useEffect } from "react";
import AOS from "aos";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Particles />

      <CursorGlow />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />


    </>
  );
}

export default App;