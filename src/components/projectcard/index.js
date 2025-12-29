import React from "react";
import { Chip, Typography } from "@mui/material";
import { CardContainer, CardImage, CardContent } from "./styles";

export default function ProjectCard({ project, onClick }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  const imageSrc =
    typeof project.thumbnail === "string"
      ? project.thumbnail
      : project.thumbnail?.default;

  return (
    <CardContainer
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <CardImage className="card-image">
        <img src={imageSrc} alt={project.title} loading="lazy" />
      </CardImage>
      <CardContent>
        <Typography
          variant="h6"
          component="h3"
          fontWeight="800"
          sx={{ mb: 1, lineHeight: 1.2 }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            lineHeight: 1.6,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.caption}
        </Typography>

        <div className="tags">
          {project.tools.slice(0, 3).map((tool) => (
            <Chip
              key={tool}
              label={tool}
              size="small"
              variant="outlined"
              sx={{
                fontSize: "0.75rem",
                height: "24px",
                borderColor: "divider",
              }}
            />
          ))}
          {project.tools.length > 3 && (
            <Chip
              label={`+${project.tools.length - 3}`}
              size="small"
              variant="outlined"
              sx={{
                fontSize: "0.75rem",
                height: "24px",
                borderColor: "divider",
              }}
            />
          )}
        </div>
      </CardContent>
    </CardContainer>
  );
}
