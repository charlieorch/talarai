import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import FunctionalitySection from "../components/FunctionalitySection/FunctionalitySection";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="home" id="home">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <ServicesSection id="services" />
      <FunctionalitySection id="functionality" />
      <AboutUsSection id="aboutUs" />
      <ContactSection id="contactUs" />
      <Footer />
    </div>
  );
};

export default Home;
