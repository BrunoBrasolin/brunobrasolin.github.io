import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./styles.css";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="name">
          <h1>Bruno Brasolin</h1>
          <p>Front end Developer</p>
        </div>
        <div className="social-email">
          <ul>
            <li>
              <FaGithub size={32} color="#fff" />
            </li>
            <li>
              <FaLinkedin size={32} color="#fff" />
            </li>
          </ul>
          <div className="links">
            <p>
              Email:{" "}
              <a
                href="mailto:brunobrasolinc@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                brunobrasolinc@gmail.com
              </a>
            </p>
            <p>
              Website:{" "}
              <a
                href="brunobrasolin.github.io"
                rel="noopener noreferrer"
                target="_blank"
              >
                brunobrasolinc.github.io
              </a>
            </p>
          </div>
        </div>
      </header>
    );
  }
}
