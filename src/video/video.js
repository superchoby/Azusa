import React from "react";
import "./style.css";
import ReactPlayer from "react-player";
import videomp4 from "../media/birthday.mp4";
import videowebm from "../media/birthday.webm";
import { useHistory } from "react-router-dom";

export function Video() {
  const history = useHistory();
  if (!window.sessionStorage.getItem("hasAccess")) {
    history.push("/");
  }
  const nextPage = () => {
    history.push("/letter");
  };

  return (
    <div className="vid-container">
      この動画の質, ごめん&#x1F602;&#x1F602;&#x1F602;
      <div></div>
      <video controls>
        <source src={videowebm} type="video/webm" />
        <source src={videomp4} type="video/mp4" />
        <p>This browser does not support the video element.</p>
      </video>
      <div onClick={nextPage} className="final-page-button">
        Next Page &#8594;
      </div>
    </div>
  );
}
