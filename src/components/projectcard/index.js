import React, { useState } from "react";

import { CardBox, Modal } from "./styles";
import { ClickAwayListener } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { FaTimesCircle } from "react-icons/fa";

export function ProjectCard(props) {
  const [showDetails, setShowDetails] = useState(false);

  const project = props.project;

  const handleDetails = () => {
    setShowDetails(true);

    if (showDetails) {
      process.env.NODE_ENV !== "development" &&
        window.gtag("config", "G-VXQFQJF6VJ", {
          page_title: project.title,
          page_path: "/projects/" + project.title,
        });
    }
  };

  const handleClose = () => {
    setTimeout(() => {
      setShowDetails(false);
    }, 20);
  };

  return (
    <React.Fragment>
      <CardBox>
        <div className="card-box" onClick={handleDetails}>
          <div className="title">{project.title}</div>
          <div className="picture">
            <img src={project.thumbnail} alt="Project Thumbnail" />
          </div>
          <div className="caption">{project.caption}</div>
          <div className="keywords">
            <b>Technologies:</b> <i>{project.tools.join(", ")}</i>
          </div>
          <div className="button">Learn More</div>
        </div>
      </CardBox>

      {showDetails && (
        <ClickAwayListener onClickAway={handleClose}>
          <Modal>
            <span className="close-button" onClick={handleClose}>
              <FaTimesCircle />
            </span>
            <div className="title">{project.title}</div>

            {project.pictures && (
              <Carousel
                dynamicHeight
                infiniteLoop
                showStatus={false}
                showThumbs={false}
              >
                {project.pictures.map((picture) => (
                  <div key={picture.id}>
                    <img src={picture.src} alt="testing" />
                    {picture.legend && (
                      <p className="legend">{picture.legend}</p>
                    )}
                  </div>
                ))}
              </Carousel>
            )}

            <div className="text-body">
              {project.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {project.source ? (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            ) : (
              <p>
                <i>No source is available for this project.</i>
              </p>
            )}

            <div>
              <p>
                <b>Main tools/technologies:</b>{" "}
                <i>{project.tools.join(", ")}</i>
              </p>
            </div>
            <div className="button" onClick={handleClose}>
              Back
            </div>
          </Modal>
        </ClickAwayListener>
      )}
    </React.Fragment>
  );
}
