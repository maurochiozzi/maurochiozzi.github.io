import React, { useEffect, useState, useRef } from "react";
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
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaChevronDown,
} from "react-icons/fa";

import { Content, Grid, ModalContent } from "./styles";

import ProjectCard from "../../components/projectcard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ProjectsData } from "../../assets/projects/";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const contentRef = useRef(null);
  const [showScroll, setShowScroll] = useState(false);

  const checkScroll = () => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      setShowScroll(
        scrollHeight > clientHeight &&
          scrollTop + clientHeight < scrollHeight - 10,
      );
    }
  };

  const handleScrollDown = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({ top: 150, behavior: "smooth" });
    }
  };

  const handleOpen = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "900px",
    background: (theme) =>
      theme.palette.mode === "dark"
        ? "rgba(30, 41, 59, 0.5)"
        : "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(24px) saturate(180%)",
    WebkitBackdropFilter: "blur(24px) saturate(180%)",
    border: (theme) =>
      `1px solid ${
        theme.palette.mode === "dark"
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(255, 255, 255, 0.4)"
      }`,
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

  useEffect(() => {
    if (selectedProject) {
      const timer = setTimeout(checkScroll, 100);
      return () => clearTimeout(timer);
    }
  }, [selectedProject]);

  return (
    <Content>
      <Typography
        variant="h2"
        component="h1"
        fontWeight="800"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          mb: 2,
          color: (theme) => theme.palette.text.primary,
        }}
      >
        Projects &{" "}
        <Box component="span" sx={{ color: "primary.main" }}>
          Experiments
        </Box>
      </Typography>
      <Typography
        variant="h6"
        component="p"
        align="center"
        color="text.secondary"
        sx={{
          maxWidth: 800,
          mb: 8,
          mx: "auto",
          lineHeight: 1.6,
          fontSize: { xs: "1rem", md: "1.125rem" },
        }}
      >
        Exploring the intersection of software and hardware engineering. Here
        you'll find a selection of my work, including web applications, backend
        systems, and hobby development.
      </Typography>

      <Grid>
        {ProjectsData.map((project, index) => (
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
                <Box sx={{ position: "relative" }}>
                  <Box
                    ref={contentRef}
                    onScroll={checkScroll}
                    sx={{
                      py: 4,
                      px: 0,
                      overflowY: "auto",
                      maxHeight: {
                        xs: "calc(90vh - 372px)",
                        md: "calc(90vh - 522px)",
                      },
                      scrollbarWidth: "none",
                      "&::-webkit-scrollbar": {
                        display: "none",
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
                        startIcon={
                          selectedProject.source.includes("github.com") ? (
                            <FaGithub />
                          ) : (
                            <FaExternalLinkAlt />
                          )
                        }
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
                  <Fade in={showScroll}>
                    <IconButton
                      onClick={handleScrollDown}
                      sx={{
                        position: "absolute",
                        bottom: 20,
                        left: "50%",
                        transform: "translateX(-50%)",
                        bgcolor: (theme) => theme.palette.background.paper,
                        boxShadow: 4,
                        zIndex: 10,
                        "@keyframes bounce": {
                          "0%, 100%": {
                            transform: "translateX(-50%) translateY(0)",
                          },
                          "50%": {
                            transform: "translateX(-50%) translateY(5px)",
                          },
                        },
                        animation: "bounce 2s infinite",
                        "&:hover": {
                          bgcolor: (theme) => theme.palette.background.paper,
                          opacity: 0.9,
                        },
                      }}
                      size="small"
                    >
                      <FaChevronDown />
                    </IconButton>
                  </Fade>
                </Box>
              </ModalContent>
            )}
          </Box>
        </Fade>
      </Modal>
    </Content>
  );
}
