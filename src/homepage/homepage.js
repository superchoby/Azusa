import React, { useEffect } from "react";
import "./styles.css";
import { HappyBirthdayMessage } from "./happybirthdaymessage";
import "./firework.css";

export function HomePage() {
  useEffect(() => {
    setTimeout(function () {
      document.getElementById("whole-background").classList.add("pyro");
      document.getElementById("before").classList.add("before");
      document.getElementById("after").classList.add("after");
      document.body.classList.add("black-background");
    }, 3000);
  }, []);

  return (
    <div id="whole-background" className="whole-background">
      <div id="before"></div>
      <div id="after"></div>
      <HappyBirthdayMessage />
    </div>
  );
}
