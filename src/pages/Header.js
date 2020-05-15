import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="left">
          <h1>Bruno Brasolin</h1>
          <h2>Front end Developer</h2>
        </div>
        <div className="right">
          <ul className="social-medias">
            <li>
              <FaGithub />
            </li>
            <li>
              <FaLinkedin />
            </li>
          </ul>
          <p>
            Email:
            <a
              href="mailto:brunobrasolinc@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              brunobrasolinc@gmail.com
            </a>
          </p>
        </div>
      </header>
    );
  }
}

export default Header;
