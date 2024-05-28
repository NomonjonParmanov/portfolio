import React from "react";
import about from "../../assets/about.png";
const About = () => {
  return (
    <div className="abouts">
      <div className="container about">
        <div className="about__left">
          <div className="about__title">About me</div>
          <div className="about__content">
            <p>
              {" "}
              <span className="hello">Hello!</span> <br /> My name is Nomonjon
              and I specialize in web developement that utilizes{" "}
              <span>HTML</span>, <span>CSS</span>, <span>JS</span>, and{" "}
              <span>REACT</span> etc. <br /> I am a highly motivated individual
              and eternal optimist dedicated to writing clear, concise, robust
              code that works. Striving to never stop learning and improving.{" "}
              <br /> When I'm not coding, I am <span>writing bolgs</span>,
              reading, or picking up some new hands-on art project like{" "}
              <span>photography</span>. <br /> I like to have my perspective and
              belief systems challenged so that I see the world through new
              eyes.
            </p>
          </div>
        </div>
        <div className="about__img">
          <img src={about} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
