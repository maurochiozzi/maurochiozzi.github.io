import React from "react";
import { Chip } from "@mui/material";
import { CardContainer, CardImage, CardContent } from "./styles";

export default function ProjectCard({ project, onClick }) {
  return (
    <CardContainer onClick={onClick}>
      <CardImage className="card-image">
        <img
          src={
            typeof project.thumbnail === "string"
              ? project.thumbnail
              : project.thumbnail.default
          }
          alt={project.title}
        />
      </CardImage>
      <CardContent>
        <h3>{project.title}</h3>
        <p>{project.caption}</p>

        <div className="tags">
          {project.tools.slice(0, 3).map((tool) => (
            <Chip
              key={tool}
              label={tool}
              size="small"
              variant="outlined"
              style={{ fontSize: "11px" }}
            />
          ))}
          {project.tools.length > 3 && (
            <Chip
              label={`+${project.tools.length - 3}`}
              size="small"
              variant="outlined"
              style={{ fontSize: "11px" }}
            />
          )}
        </div>
      </CardContent>
    </CardContainer>
  );
}
