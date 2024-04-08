import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/night.jpg"
import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer"
function Home() {
  return (
    <>
      <Navbar />
      <Hero 
      cName="hero-mid"
      heroImg= {AboutImg}
      title= "About"
      btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default Home;
