import React, { useEffect } from "react";

import { Content } from "./styles";

import { ProjectCard } from "../../components/projectcard";

import { ProjectsData } from "../../assets/projects/";

export default function Projects() {
  useEffect(() => {
    process.env.NODE_ENV !== "development" &&
      window.gtag("config", "G-VXQFQJF6VJ", {
        page_title: "projects",
        page_path: "/projects",
      });
  }, []);

  return (
    <Content>
      <div className="title">Awesome Projects!</div>
      <div className="caption">
        <p>
          Here you can find some awesome projects developed by Mauro Chiozzi and
          Team. Click on then to find out more details!
        </p>
      </div>
      <div className="wrapper">
        {ProjectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Content>
  );
}
