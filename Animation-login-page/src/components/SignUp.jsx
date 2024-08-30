import React from 'react';
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

function SignUp() {

    

    return (
        <div className="for-container sign in">
          <form>
            <h1 className="text-3xl">Sign In</h1>
            <div className="social-icons">
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
            <span>Register with E-mail & Password</span>
            <input type="email" placeholder="Enter E-mail" />
            <input type="password" placeholder="Enter Password" />
            <a href="#">Forget Password</a>
            <button>Sign in</button>
          </form>
        </div>
    );
}

export default SignUp;