import React from "react";
import "./styles.css";

// import img from "./assets/img";
export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-container">
        <div className="company-info">
          <h3 className="company">Agência Ótima Ideia</h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.otimaideia.com.br/"
          >
            otimaideia.com.br
          </a>
          <h4>Front End Intern</h4>
          <p>April 1 - Present</p>
        </div>
        <div className="company-description">
          <em>Creating SEO Sites for Google</em>
          <p>
            Responsible for creating SEO sites, performing maintenance and
            answering tickets.
          </p>
        </div>
      </div>
    </section>
  );
}
