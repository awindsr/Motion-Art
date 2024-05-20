import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";

import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FluidSimulation from "./components/FluidSimulation";

function App() {
  return (
    <>
      <div className="app-container bg-[#0e0f1b]">
        <div className="background-canvas-desktop">
          <FluidSimulation className="background-canvas" />
        </div>
        <div className="content" id="content">
          <NavBar />
          <div className="hero">
            <Hero />
          </div>
          <div className="aboutus">
            <AboutUs />
          </div>
          <div className="features">
            <Features />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
