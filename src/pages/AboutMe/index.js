import React from "react";
import "./styles.css";
import { FaHtml5, FaCss3, FaStar, FaStarHalfAlt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

// import img from "./assets/img";
export default class Header extends React.Component {
  render() {
    return (
      <section>
        <h2>About me</h2>
        <div className="about-me-container">
          <div className="personal-info">
            <img src="#" alt="Profile Photo" title="Profile Photo" />
            <p>lorem impsum</p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>
                <FaHtml5 size={32} />{" "}-{" "}<FaStar size={24} /> <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
              </li>
              <li>
                <FaCss3 size={32} />{" "}-{" "}<FaStar size={24} /> <FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStarHalfAlt size={24} />
              </li>
              <li>
                <IoLogoJavascript size={32} />{" "}-{" "}<FaStar size={24} />
                <FaStar size={24} />
                <FaStar size={24} />
                <FaStarHalfAlt size={24} />
                <FaStarHalfAlt size={24} />
              </li>
              <li>
                <FaReact size={32} />{" "}-{" "}<FaStar size={24} />
                <FaStarHalfAlt size={24} />
                <FaStarHalfAlt size={24} />
                <FaStarHalfAlt size={24} />
                <FaStarHalfAlt size={24} />
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
