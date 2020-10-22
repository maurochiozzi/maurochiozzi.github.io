import React from "react";

import PictureFrame from "./styles";

import picture from "../../assets/images/profile.jpg";

export default function ProfilePicture() {
  return <PictureFrame className="center" src={picture} alt="mChiozzi" />;
}
