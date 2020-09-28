import React, { useEffect } from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { HappyBirthdayMessage } from "./happybirthdaymessage";
import "./firework.css";

export function HomePage() {
  const history = useHistory();
  if (!window.sessionStorage.getItem("hasAccess")) {
    history.push("/");
  }

  const nextPage = () => {
    document.body.classList.remove("black-background");
    document.body.style.overflow = "auto";
    history.push("/video");
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("hasAccess")) {
      setTimeout(function () {
        document.getElementById("whole-background").classList.add("pyro");
        document.getElementById("before").classList.add("before");
        document.getElementById("after").classList.add("after");
        document.body.classList.add("black-background");
      }, 6500);
    }
  }, []);

  return (
    <div id="whole-background" className="whole-background">
      <div id="before"></div>
      <div id="after"></div>
      <HappyBirthdayMessage />
      <div onClick={nextPage} className="next-button">
        Next Page &#8594;
      </div>
    </div>
  );
}
