import React from "react";
import { RiComputerLine } from "react-icons/ri";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import next from "../../assets/next.png";
import typescript from "../../assets/typescript.png";
const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <p className="skill__title">Skills</p>
        <p>I am striving to never stop learning and improving</p>
        <div className="web">
          <RiComputerLine className="icon" />
          <p className="web__title">web developement</p>
          <p>HTML·CSS·JS·REACT</p>
        </div>
        <div className="skill">
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <img src={react} alt="" />
          <img src={next} alt="" />
          <img src={typescript} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
