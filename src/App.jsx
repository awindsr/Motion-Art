import "./App.css";
import { useRef } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FluidSimulation from "./components/FluidSimulation";



function App() {


  return (
    <>
  
      <div className="bg-[#0e0f1b] w-screen h-auto ">
      <FluidSimulation />
        <NavBar />
        <Hero />
        <AboutUs />
        <Features />
        <Footer />
      </div>
    </>
  );
}

export default App;
