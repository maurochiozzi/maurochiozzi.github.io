import React, { useState } from "react";

import { CardBox, Modal } from "./styles";

import { FaTimesCircle } from "react-icons/fa";

export function Card(props) {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetails = () => {
    setShowDetails((showDetails) => !showDetails);
  };

  return (
    <React.Fragment>
      <CardBox>
        <div className="card-box" onClick={handleDetails}>
          <div className="title">{props.title}</div>
          <div className="picture">
            <img src={props.thumbnail} alt="Project Thumbnail" />
          </div>
          <div className="caption">{props.caption}</div>
          <div className="button">Learn More</div>
        </div>
      </CardBox>

      {showDetails && (
        <Modal>
          <span className="close-button" onClick={handleDetails}>
            <FaTimesCircle />
          </span>
          <div className="title">{props.title}</div>
          <div>Carrousel</div>
          <div>Text</div>
          <div className="button" onClick={handleDetails}>
            Back
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
}
