import React, { useState } from "react";

import { CardBox, Modal } from "./styles";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { FaTimesCircle } from "react-icons/fa";

export function ProjectCard(props) {
  const [showDetails, setShowDetails] = useState(false);

  const project = props.project;

  const handleDetails = () => {
    setShowDetails((showDetails) => !showDetails);
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
          <div className="button">Learn More</div>
        </div>
      </CardBox>

      {showDetails && (
        <Modal>
          <span className="close-button" onClick={handleDetails}>
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
                  <p className="legend">{picture.legend}</p>
                </div>
              ))}
            </Carousel>
          )}

          <div className="text-body">
            {project.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div>
            <p>Main tools/technologies: {project.tools.join(", ")}.</p>
          </div>
          <div className="button" onClick={handleDetails}>
            Back
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
}
