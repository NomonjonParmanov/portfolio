import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
