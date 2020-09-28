import React from "react";
import "./style.css";
// import ReactPlayer from "react-player";
// import videomp4 from "../media/birthday.mp4";
// import videowebm from "../media/birthday.webm";
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
      <iframe
        title="birthday"
        width="800"
        height="500"
        src="https://www.youtube.com/embed/f4Kf5JnYqd4"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div onClick={nextPage} className="final-page-button">
        Next Page &#8594;
      </div>
    </div>
  );
}
