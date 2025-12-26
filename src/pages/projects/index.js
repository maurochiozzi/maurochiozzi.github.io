import React, { useEffect, useState } from "react";
import { gtag } from "ga-gtag";
import {
  Modal,
  Box,
  IconButton,
  Chip,
  Fade,
  Backdrop,
  Typography,
  Button,
} from "@mui/material";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

import { Content, Grid, ModalContent } from "./styles";

import ProjectCard from "../../components/projectcard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ProjectsData } from "../../assets/projects/";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "900px",
    bgcolor: "background.paper",
    borderRadius: "24px",
    boxShadow: 24,
    outline: "none",
    overflow: "hidden",
    maxHeight: "90vh",
    display: "flex",
    flexDirection: "column",
  };

  useEffect(() => {
    process.env.NODE_ENV !== "development" &&
      gtag("event", "page_view", {
        page_title: "projects",
        page_path: "/projects",
      });
  }, []);

  return (
    <Content>
      <div className="title">The lab!</div>
      <div className="caption">
        <p>
          Here you can find some awesome projects developed by Mauro Chiozzi &
          Team. Click on them to find out more details!
        </p>
      </div>

      <Grid>
        {ProjectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleOpen(project)}
          />
        ))}
      </Grid>

      <Modal
        open={!!selectedProject}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            style: {
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(0,0,0,0.6)",
            },
          },
        }}
      >
        <Fade in={!!selectedProject}>
          <Box sx={modalStyle}>
            {selectedProject && (
              <ModalContent>
                <div className="modal-image-container">
                  {selectedProject.pictures &&
                  selectedProject.pictures.length > 0 ? (
                    <Carousel
                      showThumbs={false}
                      showStatus={false}
                      infiniteLoop
                      useKeyboardArrows
                      autoPlay
                      stopOnHover
                      showArrows={true}
                      emulateTouch
                    >
                      {selectedProject.pictures.map((picture) => (
                        <div key={picture.id}>
                          <img
                            src={
                              typeof picture.src === "string"
                                ? picture.src
                                : picture.src.default
                            }
                            alt={picture.legend}
                          />
                          {picture.legend && (
                            <p className="legend">{picture.legend}</p>
                          )}
                        </div>
                      ))}
                    </Carousel>
                  ) : (
                    <img
                      src={
                        typeof selectedProject.thumbnail === "string"
                          ? selectedProject.thumbnail
                          : selectedProject.thumbnail.default
                      }
                      alt={selectedProject.title}
                    />
                  )}
                  <IconButton
                    onClick={handleClose}
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      zIndex: 10,
                      bgcolor: "rgba(0,0,0,0.5)",
                      color: "white",
                      "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
                    }}
                  >
                    <FaTimes />
                  </IconButton>
                </div>
                <Box
                  sx={{
                    p: 4,
                    overflowY: "auto",
                    maxHeight: {
                      xs: "calc(90vh - 300px)",
                      md: "calc(90vh - 450px)",
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h2"
                    fontWeight="800"
                    gutterBottom
                  >
                    {selectedProject.title}
                  </Typography>

                  <Box
                    sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3 }}
                  >
                    {selectedProject.tools.map((tool) => (
                      <Chip key={tool} label={tool} icon={<FaCode />} />
                    ))}
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    {Array.isArray(selectedProject.text) &&
                    selectedProject.text.length > 0 ? (
                      selectedProject.text.map((paragraph, index) => (
                        <Typography
                          key={index}
                          paragraph
                          color="text.secondary"
                          sx={{ lineHeight: 1.8 }}
                        >
                          {paragraph}
                        </Typography>
                      ))
                    ) : (
                      <Typography
                        paragraph
                        color="text.secondary"
                        sx={{ lineHeight: 1.8 }}
                      >
                        {selectedProject.caption}
                      </Typography>
                    )}
                  </Box>

                  {selectedProject.source && (
                    <Button
                      variant="contained"
                      startIcon={<FaGithub />}
                      href={selectedProject.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderRadius: "50px",
                        textTransform: "none",
                        fontWeight: "bold",
                        px: 4,
                      }}
                    >
                      View Source
                    </Button>
                  )}
                </Box>
              </ModalContent>
            )}
          </Box>
        </Fade>
      </Modal>
    </Content>
  );
}
