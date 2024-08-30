import React from 'react';
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import './Sign-in.css'


function SignIn() {
    return (
        <div className="flex flex-col bg-white">
          <form>
            <h1 className='text-3xl'>Create Account</h1>
            <div className='flex justify-center gap-5 p-5'>
              <a href="#" className="icon">
                <FaGoogle />
              </a>
              <a href="#" className="icon">
                <FaFacebookF />
              </a>
              <a href="#" className="icon">
                <FaGithub />
              </a>
              <a href="#" className="icon">
                <FaLinkedin />{" "}
              </a>
            </div>
            <span>Register with E-mail</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Enter E-mail" />
            <input type="password" placeholder="Enter Password" />
            <button>Sign Up</button>
          </form>
        </div>
    );
}

export default SignIn;