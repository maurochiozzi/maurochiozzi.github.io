import React, { useEffect } from "react";

import { FaExternalLinkAlt } from "react-icons/fa";

import { gtag } from "ga-gtag";

import { Link } from "react-router-dom";

import { Content } from "./styles";

import Profile from "../../components/profile";
import Resume from "../../assets/files/mChiozzi.pdf";

export default function About() {
  useEffect(() => {
    process.env.NODE_ENV !== "development" &&
      gtag("event", "page_view", {
        page_title: "about",
        page_path: "/about",
      });
  });

  return (
    <Content>
      <Profile />
      <div className="picture"></div>
      <div className="title">
        <h1>Hello, there! I'm Mauro Chiozzi!</h1>
      </div>
      <div className="main-content">
        <p>
          {" "}
          I am a <span className="highlight">
            Python Software Engineer
          </span>{" "}
          with over <span className="highlight">8 years of experience</span>{" "}
          building <span className="highlight">scalable backend systems</span>{" "}
          and <span className="highlight">automated workflows</span>. My
          approach is rooted in an{" "}
          <span className="highlight">engineering mindset</span> that
          prioritizes system stability, technical precision, and long-term
          maintainability.{" "}
        </p>
        <p>
          {" "}
          My path began at{" "}
          <span className="highlight">
            <a
              href="https://en.wikipedia.org/wiki/Federal_University_of_Rio_Grande_do_Norte"
              target="_blank"
            >
              UFRN <FaExternalLinkAlt size="0.8em" />
            </a>
          </span>
          , where I discovered a passion for{" "}
          <span className="highlight">software fundamentals</span>. Early in my
          journey, I focused on{" "}
          <span className="highlight">mentoring others</span> in coding, a
          practice I still carry today to ensure high-quality standards and
          knowledge sharing within technical teams.{" "}
        </p>
        <p>
          {" "}
          I developed my technical rigor working on{" "}
          <span className="highlight">embedded software</span> and{" "}
          <span className="highlight">embedded systems</span> for the{" "}
          <span className="highlight">Car-Kará</span> Baja and AeroDesign teams.
          These environments required expert-level{" "}
          <span className="highlight">debugging</span> and{" "}
          <span className="highlight">root cause evaluation</span> under strict
          constraints, teaching me how to design reliable software for complex
          applications.{" "}
        </p>
        <p>
          {" "}
          In my professional career, notably at{" "}
          <span className="highlight">
            <a href="https://www.embraer.com/en/" target="_blank">
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
          <span className="highlight">business objectives</span>.{" "}
        </p>
        <p>
          {" "}
          I am a <span className="highlight">
            proactive problem-solver
          </span>{" "}
          dedicated to delivering <span className="highlight">key results</span>
          . Whether optimizing legacy code or building from scratch, my focus
          remains on <span className="highlight">system performance</span> and
          creating tools that empower users to make{" "}
          <span className="highlight">data-driven decisions</span>.{" "}
        </p>
        <p>
          Ready to see how I can help your team achieve its next key result? You
          can review my full career history by downloading my{" "}
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume (opens in a new tab)"
          >
            <span className="highlight">resume here</span>
          </a>
          . I also invite you to explore my{" "}
          <Link to="/projects">
            <span className="highlight">projects portfolio</span>
          </Link>{" "}
          to see my solutions in action, or find me on my{" "}
          <span className="highlight">social networks</span> to start a
          conversation.
        </p>
      </div>
    </Content>
  );
}
