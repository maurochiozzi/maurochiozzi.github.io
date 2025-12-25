import embraer1 from "./embraer-1.JPG";
import embraer2 from "./embraer-2.JPG";
import embraer3 from "./embraer-3.JPG";
import tmb from "./tmb.jpg";

export const embraer = {
  id: 2,
  title: "Embraer",
  caption: "Embraer Quality Engineering Team.",
  thumbnail: tmb,
  text: [
    "At Embraer, a lot of projects were developed, going through process automation using Python, Web/SAP scrapping, to process management improvements using web development.",
    "The main tasks during this role were the development of new scripts to reduce time spent doing repetitive tasks, quality process follow-up (Corrective Actions and Non-conformity analysis), and development of new systems to help Quality Team gain performance and improve product quality, focusing also on non-conformity reduction.",
    "See the source to access Embraer main page and learn more about this company.",
  ],
  source: "https://embraer.com/global/en",
  key_developers: ["Mauro Chiozzi"],
  tools: ["Python/DRF", "React.js", "SAP Script", "Quality Tools"],
  pictures: [
    {
      id: 1,
      src: embraer1,
    },
    {
      id: 2,
      src: embraer2,
    },
    {
      id: 3,
      src: embraer3,
    },
  ],
};
