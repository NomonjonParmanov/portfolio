import React from "react";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import { IoTimeOutline } from "react-icons/io5";
const skills = [
  "HTML",
  "CSS",
  "SASS",
  "BOOTSTRAP",
  "TAILWINDCSS",
  "JAVASCRIPT",
  "REACT JS",
  "REDUX TOOLKIT",
  "NEXT JS",
  "TYPESCRIPT",
];
const Header = () => {
  let skill = skills?.map((el, inx) => (
    <div key={inx} className="skill">
      <p>{el}</p>
    </div>
  ));
  return (
    <main className="container hero">
      <p className="developer">Developer</p>
      <div className="hero__content">
        <div className="hero__left">
          <img src={avatar} alt="" />
          <h2>Nomonjon</h2>
          <p>Frontend developer</p>
          <p className="content">
            <NavLink>
              <CgMail className="content__icon" />
              parmanovn@gmail.com
            </NavLink>
          </p>{" "}
          <p className="content">
            <NavLink>
              <CiLocationOn className="content__icon" />
              Tashkent, Uzbekistan
            </NavLink>
          </p>{" "}
          <p className="content">
            <NavLink>
              <IoTimeOutline className="content__icon" />
              Full-time / Freelancer
            </NavLink>
          </p>
          <div className="skills">{skill}</div>
          <button type="download">Download CV</button>
        </div>
        <div className="hero__middle">
          <p>Hey</p>
          <p>
            I’m <span>Nomonjon</span>
          </p>
          <p>Full-stack developer</p>
          <p className="content">
            I help business grow by crafting amazing web experiences. If you’re
            looking for a developer that likes to get stuff done,
          </p>
        </div>
        <div className="hero__right">
          <div className="content">
            <p className="num">2</p>
            <p>
              Programming <span>Language</span>
            </p>
          </div>
          <div className="content">
            <p className="num">6</p>
            <p>
              Development <span>Tools</span>
            </p>
          </div>
          <div className="content">
            <p className="num">1</p>
            <p>
              Years of <span>Experience</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
