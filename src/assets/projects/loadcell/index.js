export const loadcell = {
  id: 1,
  title: "Multi-axis Loadcell",
  caption:
    "Development of a multi-axis loadcell for general applications during airplane development for AeroDesign SAE competitions.",
  thumbnail: require("./tmb.jpg"),
  text: [
    "This project had as a goal the development of multi-axis loadcell for the Car-Kará AeroDesign SAE Team (UFRN) could use it in different applications. However, this development covers only the first part of the project development: elastic element geometry selection and embedded data acquisition development.",
    "To do so, all kinds of applications where mapped with their respective boundary conditions. After prioritizing loadcell applications, the development started by selecting the geometry for the elastic element that would allow the acquisition of the loads applied in X, Y, Z axis (forces and momentums), and furthermore simulations using Ansys for mechanical analysis under boundary conditions.",
    "After the validation of the geometry, the circuit schematic design and simulation started using Proteus Iris, and then Proteus Ares for PCB design in accordance with the loadcell geometry. ",
    "The PCB was manufactured in China, by one of Team's sponsor, but the components were soldered in our lab. Results after finishing process and coding validation can be seen on the pictures above.",
    "This first part of the development was the final essay in order to obtain Mechanical Engineer Degree, and the full document (Portuguese) can be accessed using the source provided below.",
  ],
  source: "http://monografias.ufrn.br/handle/123456789/10689",
  key_developers: ["Mauro Chiozzi"],
  tools: ["Ansys", "SolidWorks", "Proteus Iris & Ares", "Embedded C", "Python"],
  pictures: [
    {
      id: 1,
      legend: "Loadcell assembly",
      src: require("./loadcell-1.JPG"),
    },
    {
      id: 2,
      legend: "Loadcell detailed view",
      src: require("./loadcell-2.JPG"),
    },
    {
      id: 3,
      legend: "Loadcell exploded view",
      src: require("./loadcell-3.JPG"),
    },
    {
      id: 4,
      legend: "Loadcell's elastic element",
      src: require("./loadcell-4.png"),
    },
    {
      id: 5,
      legend: "Elastic element under loads simulation",
      src: require("./loadcell-5.png"),
    },
    {
      id: 6,
      legend: "Loadcell's PCB size",
      src: require("./loadcell-6.png"),
    },
    {
      id: 7,
      legend: "PCB 3D model for loadcell assembly check",
      src: require("./loadcell-7.JPG"),
    },
    {
      id: 8,
      legend: "PCB Manufactured",
      src: require("./loadcell-8.jpg"),
    },
    {
      id: 9,
      legend: "PCB finished after components soldering",
      src: require("./loadcell-9.jpg"),
    },
    {
      id: 10,
      legend: "Data acquisition outputs from each one of the 6 channels ",
      src: require("./loadcell-10.png"),
    },
  ],
};
