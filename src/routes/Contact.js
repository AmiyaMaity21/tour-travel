import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assets/2.jpg"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
function Contact() {
  return (
    <>
      <Navbar />
      <Hero 
      cName="hero-mid"
      heroImg= {ContactImg}
      title= "Contact"
      btnClass="hide"
      />
      <ContactForm />
      <Footer/>
    </>
  );
}

export default Contact;