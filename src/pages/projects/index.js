import React from "react";

import { Content } from "./styles";

import { ProjectCard } from "../../components/projectcard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Lorem Ipsum Dolor",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia mattis purus vitae tincidunt.",
      thumbnail: require("../../assets/tmb/loadcell.jpg"),
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat, metus eget consectetur suscipit, lectus libero commodo lorem, a mollis tortor elit eget ligula. Sed at risus gravida, iaculis metus vel, tristique dui. Pellentesque tincidunt accumsan massa, ut ullamcorper odio hendrerit a. Quisque at dolor vel lorem vehicula euismod nec quis libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent iaculis imperdiet vulputate. Etiam in nulla tincidunt, aliquet ipsum quis, venenatis lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur dolor mauris, consectetur ac ullamcorper quis, egestas id arcu. Pellentesque ullamcorper, massa in placerat viverra, sapien elit semper mauris, vitae ornare augue purus nec arcu. Suspendisse ornare et nunc in varius. Nam consectetur rutrum arcu, quis ullamcorper risus tempus a. Etiam eget sem at libero tempor convallis. Proin pulvinar euismod blandit. Vestibulum ullamcorper ultrices elit, eget placerat nibh sagittis sed. Praesent pulvinar auctor fringilla. Quisque id sem ipsum. Donec vulputate ut massa eget eleifend. Donec id ante erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut lacus ex, luctus nec purus non, ultricies faucibus neque. Ut ut ultrices velit.",
      pictures: [
        {
          id: 1,
          legend: "teste",
          src: require("../../assets/projects/loadcell/loadcell-1.JPG"),
        },
        {
          id: 2,
          legend: "teste",
          src: require("../../assets/projects/loadcell/loadcell-2.JPG"),
        },
        {
          id: 3,
          legend: "teste",
          src: require("../../assets/projects/loadcell/loadcell-3.JPG"),
        },
        {
          id: 4,
          legend: "teste",
          src: require("../../assets/projects/loadcell/loadcell-4.png"),
        },
        {
          id: 5,
          legend: "teste",
          src: require("../../assets/projects/loadcell/loadcell-5.png"),
        },
        {
          id: 6,
          legend: "teste",
          src: require("../../assets/projects/loadcell/loadcell-6.png"),
        },
        {
          id: 7,
          legend: "teste",
          src: require("../../assets/projects/loadcell/loadcell-7.JPG"),
        },
        {
          id: 8,
          legend: "teste",
          src: require("../../assets/projects/loadcell/loadcell-8.jpg"),
        },
        {
          id: 9,
          legend: "teste",
          src: require("../../assets/projects/loadcell/loadcell-9.jpg"),
        },
      ],
    },
  ];

  return (
    <Content>
      <div className="title">Awesome Projects!</div>
      <div className="caption">
        Here you can find some awesome projects developed by Mauro Chiozzi and
        Team.
      </div>
      <div className="wrapper">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Content>
  );
}
