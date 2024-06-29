import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaTelegram, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbars">
      <div className="container navbar">
        <img src={logo} alt="" />
        <ul>
          <li>
            <NavLink target="blank" to={"https://www.instagram.com/1parmanov/"}>
              <FaInstagram className="icon" /> <p>instagram</p>
            </NavLink>
          </li>{" "}
          <li>
            <NavLink target="blank" to={"https://t.me/Parmanov1"}>
              <FaTelegram className="icon" />
              <p>telegram</p>
            </NavLink>
          </li>
          <li>
            <NavLink target="blank" to={"https://github.com/NomonjonParmanov"}>
              <FaGithub className="icon" />
              <p>Github</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
