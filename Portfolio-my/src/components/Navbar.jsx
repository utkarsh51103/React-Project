import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Navbar(props) {
  return (
    <nav className="mb-20 items-center flex justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-10 w-10" src={logo} alt="logo" />
      </div>
      <div className="flex gap-4 m-8 text-2xl items-center">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </nav>
  );
}

export default Navbar;
