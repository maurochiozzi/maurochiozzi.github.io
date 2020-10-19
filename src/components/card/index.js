import React, { useState } from "react";

import { Content } from "./styles";

export function Card(props) {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetails = () => {
    setShowDetails((showDetails) => !showDetails);
  };

  return (
    <Content>
      <div className="card-box" onClick={handleDetails}>
        <div className="title">{props.title}</div>
        <div className="picture">
          <img src={props.thumbnail} alt="Project Thumbnail" />
        </div>
        <div className="caption">{props.caption}</div>
        <div className="button">Learn More</div>
      </div>

      {showDetails && (
        <div className="card-details">
          <span className="close-button" onClick={handleDetails}>
            Close Button
          </span>
          <div className="title">{props.title}</div>
          <div>Carrousel</div>
          <div>Text</div>
          <div className="button" onClick={handleDetails}>
            Back
          </div>
        </div>
      )}
    </Content>
  );
}
