import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Benefits from "./components/Benefits/Benefits";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Us from "./components/Us/Us";
import Stats from "./components/Stats/Stats";


function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,  // Para que la animación empiece un poco antes y no desplace scroll
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Us />
      <Stats />
      <Benefits />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
