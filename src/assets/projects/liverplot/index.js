export const liverplot = {
  id: 9,
  title: "LiverPlot",
  caption:
    "A high-efficiency Python utility for real-time telemetry visualization.",
  thumbnail: require("./tmb.png"),
  text: [
    "I developed LiverPlot as a lightweight visualization companion to SeriousLogger. By decoupling the visualization layer from the data acquisition layer, I created a modular toolkit that allows for real-time monitoring of serial data streams without the performance overhead of comprehensive telemetry suites.",
    "The application is optimized for low-latency plotting of real-time data series. It provides an immediate feedback loop during hardware testing and rapid prototyping, allowing for the quick identification of trends, oscillations, or anomalies in sensor data as they occur.",
    "This project reflects my focus on modular software architecture and the 'Unix philosophy' of building focused tools that do one thing well. Together with SeriousLogger, it provides a powerful, yet simple, infrastructure for hardware-software integration and validation.",
  ],
  source: "https://github.com/maurochiozzi/liverplot",
  key_developers: ["Mauro Chiozzi"],
  tools: [
    "Python",
    "Data Visualization",
    "Real-time Plotting",
    "Modular Architecture",
  ],
  pictures: [],
};
