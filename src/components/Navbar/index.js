import React from "react";
import "./styles.css";

// import img from "./assets/img";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#projects" title="Projects">
            Projects
          </a>
        </li>
        <li>
          <a href="#education" title="Education">
            Education
          </a>
        </li>
        <li>
          <a href="#experience" title="Experience">
            Experience
          </a>
        </li>
      </ul>
    </nav>
  );
}
