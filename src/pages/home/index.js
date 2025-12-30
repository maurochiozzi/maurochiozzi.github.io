import React from "react";
import { Content } from "./styles";
import { Link } from "react-router-dom";
import Profile from "../../components/profile";
import Resume from "../../assets/files/mChiozzi.pdf";

import { FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  return (
    <Content>
      <div className="layout-wrapper">
        <section className="hero">
          <Profile />
          <h1>
            Hey! I'm <span className="highlight">Mauro Chiozzi</span>
          </h1>
          <h2>Python Software Engineer</h2>
          <p className="description">
            Specializing in <b>Python Backend</b> (Django/Flask) and{" "}
            <b>React</b> frontend development. I build scalable automation and
            web systems with an engineering mindset that prioritizes system
            stability, technical precision, and long-term maintainability.
          </p>

          <div className="cta-group">
            <Link to="/projects" className="cta-button">
              View Projects
            </Link>
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
            >
              Download CV
            </a>
          </div>
        </section>

        <section className="biography">
          <h3>About Me</h3>
          <p>
            My path began at{" "}
            <span className="highlight">
              <a
                href="https://en.wikipedia.org/wiki/Federal_University_of_Rio_Grande_do_Norte"
                target="_blank"
                rel="noopener noreferrer"
              >
                UFRN <FaExternalLinkAlt size="0.8em" />
              </a>
            </span>
            , where I discovered a passion for{" "}
            <span className="highlight">software fundamentals</span>. Early in
            my journey, I focused on{" "}
            <span className="highlight">mentoring others</span> in coding, a
            practice I still carry today to ensure high-quality standards and
            knowledge sharing within technical teams.
          </p>
          <p>
            I developed my technical rigor working on{" "}
            <span className="highlight">embedded software</span> and{" "}
            <span className="highlight">embedded systems</span> for the{" "}
            <span className="highlight">Car-Kará</span> Baja and AeroDesign
            teams. These environments required expert-level{" "}
            <span className="highlight">debugging</span> and{" "}
            <span className="highlight">root cause evaluation</span> under
            strict constraints, teaching me how to design reliable software for
            complex applications.
          </p>
          <p>
            In my professional career, notably at{" "}
            <span className="highlight">
              <a
                href="https://www.embraer.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Embraer <FaExternalLinkAlt size="0.8em" />
              </a>
            </span>
            , I managed the end-to-end{" "}
            <span className="highlight">web development</span> lifecycle for
            Quality applications. I focused on architecting{" "}
            <span className="highlight">Python backend</span> solutions using{" "}
            <span className="highlight">Django</span> and{" "}
            <span className="highlight">Flask</span>, while also delivering
            responsive <span className="highlight">React frontend</span>{" "}
            interfaces to ensure a seamless and fluid user experience. By
            implementing <span className="highlight">APIs</span> and{" "}
            <span className="highlight">asynchronous data pipelines</span>, I
            delivered technical solutions that achieved over{" "}
            <span className="highlight">US$100,000 in annual savings</span>,
            bridging the gap between{" "}
            <span className="highlight">complex engineering</span> and{" "}
            <span className="highlight">business objectives</span>.
          </p>
          <p>
            I am a <span className="highlight">proactive problem-solver</span>{" "}
            dedicated to delivering{" "}
            <span className="highlight">key results</span>. Whether optimizing
            legacy code or building from scratch, my focus remains on{" "}
            <span className="highlight">system performance</span> and creating
            tools that empower users to make{" "}
            <span className="highlight">data-driven decisions</span>.
          </p>
        </section>
      </div>

      <footer className="footer-content">
        <p className="social-links">
          Follow my work on{" "}
          <a
            href="https://github.com/maurochiozzi"
            target="_blank"
            rel="noopener noreferrer"
          >
            [GitHub]
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/maurochiozzi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            [LinkedIn]
          </a>
        </p>
        <small>
          <i>Compliments, suggestions, or coffee: hire.chiozzi@gmail.com</i>
        </small>
      </footer>
    </Content>
  );
}
