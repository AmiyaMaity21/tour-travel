import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeImg from "../assets/12.jpg"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero 
      cName="hero"
      heroImg= {HomeImg}
      title= "Your Jouney Your Story"
      text= "Choose Your Favourite Destination"
      buttonText="Travel Plan"
      url="/contact"
      btnClass="show"
      />
      <Destination />
      <Trip/>
      <Footer />
    </>
  );
}

export default Home;
