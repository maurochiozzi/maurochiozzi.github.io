import embraer1 from "./embraer-1.JPG";
import embraer2 from "./embraer-2.JPG";
import embraer3 from "./embraer-3.JPG";
import tmb from "./tmb.jpg";

export const embraer = {
  id: 2,
  title: "Senior Software Engineer @ Embraer",
  caption: "Tools and Automation Team.",
  thumbnail: tmb,
  text: [
    "I managed the end-to-end web development lifecycle at Embraer, architecting robust Python backend solutions and responsive React frontend interfaces. I led a team of four developers to build mission-critical systems that optimized quality management and aircraft maintenance processes.",
    "A key achievement was introducing asynchronous data pipelines using Celery and RabbitMQ to automate data scraping from legacy systems like SAP and MES. This infrastructure streamlined ETL operations for our data lake, enabling Power BI dashboards for data-driven decisions and achieving annual operational savings exceeding US$100,000.",
    "My work focused on system performance and technical rigor, utilizing expert-level debugging and root cause evaluation to ensure the reliability of high-stakes aerospace tools.",
  ],
  source: "https://embraer.com/global/en",
  key_developers: ["Mauro Chiozzi"],
  tools: [
    "Python (Django/Flask)",
    "React.js",
    "Celery & RabbitMQ",
    "PostgreSQL",
    "SAP Scripting",
    "Power BI",
    "ETL Pipelines",
  ],
  pictures: [
    { id: 1, src: embraer1 },
    { id: 2, src: embraer2 },
    { id: 3, src: embraer3 },
  ],
};
