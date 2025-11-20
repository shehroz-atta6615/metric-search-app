import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Specialism from "./components/Specialism/Specialism.jsx";
import AboutUs from "./components/About-us/AboutUs.jsx";
import GlobalReach from "./components/Global-reach/GlobalReach.jsx";
import TalentedIndividuals from "./components/TalentedIndividuals/TalentedIndividuals.jsx";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <HeroSection />
      </div>
      <div className="Our-Specialisms">
        <Specialism />
      </div>
      <div className="About-us">
          <AboutUs />
      </div>
      <div className="our-global-reach">
          <GlobalReach />
      </div>
      <div className="thrive-talented-individuals">
          <TalentedIndividuals />
      </div>
    </div>
  );
}

export default App;
