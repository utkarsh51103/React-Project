import React from "react";
import logo from "../assets/utkarshlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Navbar(props) {
  return (
    <nav className="mb-20 items-center flex justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-10 w-12" src={logo} alt="logo" />
      </div>
      <div className="flex gap-4 m-8 text-2xl items-center">
        <a href="https://www.linkedin.com/in/utkarsh-sharma-78a007259/" ><FaLinkedin /></a>
        <a href="https://github.com/utkarsh51103" > <FaGithub /></a>
        <a href="https://www.instagram.com/utkarsh511_"><FaInstagram /></a>
        <a href="https://x.com/UtkrshShrma511" ><FaSquareXTwitter /></a>
      </div>
    </nav>
  );
}

export default Navbar;
