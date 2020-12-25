export const telemetry = {
  id: 6,
  title: "CK Telemetry",
  caption: "A Java-based desktop application for real-time data visualization.",
  thumbnail: require("./tmb.png"),
  text: [
    "A Java-based desktop application for real-time data visualization acquired from the embedded system installed on our Baja SAE vehicle and also for our AeroDesign SAE airplane.",
    "This application receives the vehicle data through the Receiver connected on the USB port, and by reading the data as it is received, the application can match the data plot with the data rate transmission from the embedded system. Also, while the visualization is done, the application does the duty of logging the data being received in a friendly dataframe.",
    "Besides the visualization and logging, the application relays in other features such as lapping counting; fast communication with the vehicle pilot using pre-set messages; on-time deviation calculus; runtime error output; and much more. Other features like previous lap data comparison with current lap data on time were still on development.",
    "Unfortunately, the flex layout was not a key feature. For each purpose, for each requirement, the layout needed to be hardcoded changed, and besides being used for two different purposes (Baja and Aero) in many different competitions (local, regional, national, international), the rigid layout was shown to be a pain in the neck in every single upgrade. By this, after almost 4 years of usage and despite being developed using Java Swing, this application became obsolete, and it will be replaced by other application using modern technologies (maybe Seriouslogger and LiverPlot, let see how it goes).",
  ],
  source: "",
  key_developers: ["Mauro Chiozzi"],
  tools: ["Java", "RF Communication", "Java Swing"],
  pictures: [
    {
      id: 1,
      src: require("./ckt-1.png"),
      legend: "CK Telemetry on Baja SAE application",
    },
    {
      id: 2,
      src: require("./ckt-2.png"),
      legend: "CK Telemetry on AeroDesign SAE application",
    },
    {
      id: 3,
      src: require("./ckt-3.png"),
      legend: "CK Telemetry next steps",
    },
    {
      id: 4,
      src: require("./ckt-4.JPG"),
      legend: "Receptor used to receive vehicle data from USB connection",
    },
  ],
};
