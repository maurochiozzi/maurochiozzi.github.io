export const telemetry = {
  id: 6,
  title: "CK Telemetry Systems",
  caption:
    "Real-time data acquisition and visualization for high-performance vehicles.",
  thumbnail: require("./tmb.png"),
  text: [
    "I developed this Java-based mission application to provide real-time telemetry for the Baja SAE and AeroDesign SAE competition teams. The system manages high-frequency data acquisition from onboard embedded sensors, providing the engineering team with immediate visibility into vehicle performance and structural integrity.",
    "The technical core involves low-level serial communication via USB, synchronizing incoming RF data streams with a localized processing engine. I implemented custom data-logging algorithms to generate reliable dataframes for post-run analysis, ensuring that the software maintained precise data rates without packet loss during high-speed maneuvers.",
    "Beyond visualization, the system includes features for pilot-to-pit communication, automated lap timing, and real-time deviation calculus. Operating in high-pressure competition environments required expert-level debugging and root cause evaluation, as any system failure directly impacted the team's performance on the track or in the air.",
    "This project provided a significant lesson in software scalability. While the Java Swing architecture served the teams for four years, the rigid layout presented technical debt that hindered rapid iteration across different vehicle configurations. This led to a strategic decision to transition toward a more modular, decoupled architecture using modern logging and plotting frameworks, prioritizing flexibility and long-term maintainability.",
  ],
  source: "",
  key_developers: ["Mauro Chiozzi"],
  tools: [
    "Java",
    "Serial Communication (RS-232/USB)",
    "Java Swing",
    "RF Data Acquisition",
    "Real-time Data Processing",
  ],
  pictures: [
    {
      id: 1,
      src: require("./ckt-1.png"),
      legend: "CK Telemetry: Baja SAE Real-time Dashboard",
    },
    {
      id: 2,
      src: require("./ckt-2.png"),
      legend: "CK Telemetry: AeroDesign Flight Analytics",
    },
    {
      id: 3,
      src: require("./ckt-3.png"),
      legend: "Next-gen architecture planning",
    },
    {
      id: 4,
      src: require("./ckt-4.JPG"),
      legend: "RF Receptor for USB hardware-software interface",
    },
  ],
};
