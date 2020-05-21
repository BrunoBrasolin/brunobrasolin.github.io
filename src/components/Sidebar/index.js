import React from "react";
import "./styles.css";
import {
  FaHtml5,
  FaCss3,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaReact,
  FaSass,
  FaJs,
  FaWordpress,
  FaUserCircle,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";

// import img from "./assets/img";
export default function Sidebar() {
  function stars(score) {
    if (score === 0.5)
      return (
        <div className="score">
          <FaStarHalfAlt size={24} />
          <FaRegStar size={24} />
          <FaRegStar size={24} />
          <FaRegStar size={24} />
          <FaRegStar size={24} />
        </div>
      );
    if (score === 1)
      return (
        <div className="score">
          <FaStar size={24} />
          <FaRegStar size={24} />
          <FaRegStar size={24} />
          <FaRegStar size={24} />
          <FaRegStar size={24} />
        </div>
      );
    if (score === 1.5)
      return (
        <div className="score">
          <FaStar size={24} />
          <FaStarHalfAlt size={24} />
          <FaRegStar size={24} />
          <FaRegStar size={24} />
          <FaRegStar size={24} />
        </div>
      );
    if (score === 2)
      return (
        <div className="score">
          <FaStar size={24} />
          <FaStar size={24} />
          <FaRegStar size={24} />
          <FaRegStar size={24} />
          <FaRegStar size={24} />
        </div>
      );
    if (score === 2.5)
      return (
        <div className="score">
          <FaStar size={24} />
          <FaStar size={24} />
          <FaStarHalfAlt size={24} />
          <FaRegStar size={24} />
          <FaRegStar size={24} />
        </div>
      );
    if (score === 3)
      return (
        <div className="score">
          <FaStar size={24} />
          <FaStar size={24} />
          <FaStar size={24} />
          <FaRegStar size={24} />
          <FaRegStar size={24} />
        </div>
      );
    if (score === 3.5)
      return (
        <div className="score">
          <FaStar size={24} />
          <FaStar size={24} />
          <FaStar size={24} />
          <FaStarHalfAlt size={24} />
          <FaRegStar size={24} />
        </div>
      );
    if (score === 4)
      return (
        <div className="score">
          <FaStar size={24} />
          <FaStar size={24} />
          <FaStar size={24} />
          <FaStar size={24} />
          <FaRegStar size={24} />
        </div>
      );
    if (score === 4.5)
      return (
        <div className="score">
          <FaStar size={24} />
          <FaStar size={24} />
          <FaStar size={24} />
          <FaStar size={24} />
          <FaStarHalfAlt size={24} />
        </div>
      );
    if (score === 5)
      return (
        <div className="score">
          <FaStar size={24} />
          <FaStar size={24} />
          <FaStar size={24} />
          <FaStar size={24} />
          <FaStar size={24} />
        </div>
      );
  }
  return (
    <aside>
      <FaUserCircle size={125} />
      <h1>Bruno Brasolin</h1>
      <p>Front end Developer</p>
      <ul className="links">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/BrunoBrasolin"
            title="Bruno Brasolin GitHub"
          >
            <FaGithub size={32} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/bruno-brasolin-15b066195/"
            title="Bruno Brasolin LinkedIn"
          >
            <FaLinkedin size={32} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://pt.stackoverflow.com/users/190284/bruno-brasolin"
            title="Bruno Brasolin StackOverflow"
          >
            <FaStackOverflow size={32} />
          </a>
        </li>
      </ul>
      <div className="contact">
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
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>
            <FaHtml5 size={45} /> {stars(5)}
          </li>
          <li>
            <FaWordpress size={45} /> {stars(3.5)}
          </li>
          <li>
            <FaCss3 size={45} /> {stars(3)}
          </li>
          <li>
            <FaSass size={45} /> {stars(3)}
          </li>
          <li>
            <FaJs size={45} /> {stars(2)}
          </li>
          <li>
            <FaReact size={45} /> {stars(1)}
          </li>
        </ul>
      </div>
    </aside>
  );
}
