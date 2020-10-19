import React from "react";

import { Content } from "./styles";

import { Card } from "../../components/card";

export default function Projects() {
  return (
    <Content>
      <div className="title">Awesome Projects!</div>
      <div className="caption">
        Here you can find some awesome projects developed by Mauro Chiozzi and
        Team.
      </div>
      <div className="wrapper">
        <Card
          title="Lorem Ipsum Dolor"
          thumbnail={require("../../assets/tmb/loadcell.jpg")}
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia mattis purus vitae tincidunt."
        ></Card>
        <Card
          title="Lorem Ipsum Dolor"
          thumbnail={require("../../assets/tmb/loadcell.jpg")}
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia mattis purus vitae tincidunt."
        ></Card>
        <Card
          title="Lorem Ipsum Dolor"
          thumbnail={require("../../assets/tmb/loadcell.jpg")}
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia mattis purus vitae tincidunt."
        ></Card>
      </div>
    </Content>
  );
}
