import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Cards from "./components/Cards";
import Services from "./components/Services";
import WhyChooseCards from "./components/WhyChooseCards";
import WorkProcess from "./components/WorkProcess";
import CaseStudy from "./components/CaseStudy";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Cards />
      <Services />
      <WhyChooseCards />
      <WorkProcess />
      <CaseStudy />
      <Footer />
    </>
  );
}
export default App;







