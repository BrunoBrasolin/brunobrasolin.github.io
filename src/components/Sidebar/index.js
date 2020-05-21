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
  FaPhp,
} from "react-icons/fa";

// import img from "./assets/img";
export default function Sidebar() {
  function stars(score) {
    if (score === 0.5)
      return (
        <div className="score">
          <FaStarHalfAlt size={20} />
          <FaRegStar size={20} />
          <FaRegStar size={20} />
          <FaRegStar size={20} />
          <FaRegStar size={20} />
        </div>
      );
    if (score === 1)
      return (
        <div className="score">
          <FaStar size={20} />
          <FaRegStar size={20} />
          <FaRegStar size={20} />
          <FaRegStar size={20} />
          <FaRegStar size={20} />
        </div>
      );
    if (score === 1.5)
      return (
        <div className="score">
          <FaStar size={20} />
          <FaStarHalfAlt size={20} />
          <FaRegStar size={20} />
          <FaRegStar size={20} />
          <FaRegStar size={20} />
        </div>
      );
    if (score === 2)
      return (
        <div className="score">
          <FaStar size={20} />
          <FaStar size={20} />
          <FaRegStar size={20} />
          <FaRegStar size={20} />
          <FaRegStar size={20} />
        </div>
      );
    if (score === 2.5)
      return (
        <div className="score">
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStarHalfAlt size={20} />
          <FaRegStar size={20} />
          <FaRegStar size={20} />
        </div>
      );
    if (score === 3)
      return (
        <div className="score">
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaRegStar size={20} />
          <FaRegStar size={20} />
        </div>
      );
    if (score === 3.5)
      return (
        <div className="score">
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStarHalfAlt size={20} />
          <FaRegStar size={20} />
        </div>
      );
    if (score === 4)
      return (
        <div className="score">
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaRegStar size={20} />
        </div>
      );
    if (score === 4.5)
      return (
        <div className="score">
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStarHalfAlt size={20} />
        </div>
      );
    if (score === 5)
      return (
        <div className="score">
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
        </div>
      );
  }
  return (
    <aside>
      <FaUserCircle size={125} />
      <h1>Bruno Brasolin</h1>
      <h2>Front end Developer</h2>
      <ul className="links">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/BrunoBrasolin"
            title="GitHub"
          >
            <FaGithub size={32} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/bruno-brasolin-15b066195/"
            title="LinkedIn"
          >
            <FaLinkedin size={32} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://pt.stackoverflow.com/users/190284/bruno-brasolin"
            title="StackOverflow"
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
          <li className="html">
            <FaHtml5 size={32} /> {stars(4.5)}
          </li>
          <li className="wordpress">
            <FaWordpress size={32} /> {stars(3)}
          </li>
          <li className="css">
            <FaCss3 size={32} /> {stars(3)}
          </li>
          <li className="sass">
            <FaSass size={32} /> {stars(3)}
          </li>
          <li className="php">
            <FaPhp size={32} /> {stars(3)}
          </li>
          <li className="javascript">
            <FaJs size={32} /> {stars(2)}
          </li>
          <li className="react">
            <FaReact size={32} /> {stars(1)}
          </li>
        </ul>
      </div>
    </aside>
  );
}
