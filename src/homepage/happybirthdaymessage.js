import React from "react";
import "./styles.css";
import { Animated } from "react-animated-css";
import azusa from "../media/azusa.jpg";

export function HappyBirthdayMessage() {
  return (
    <div className="happy-birthday-message">
      <span className="happy-birthday-letter h-one">H</span>
      <span className="happy-birthday-letter a-one">a</span>
      <span className="happy-birthday-letter p-one">p</span>
      <span className="happy-birthday-letter p-two">p</span>
      <span className="happy-birthday-letter y-one">y&nbsp;&nbsp;</span>

      <span className="happy-birthday-letter b-one">B</span>
      <span className="happy-birthday-letter i-one">i</span>
      <span className="happy-birthday-letter r-one">r</span>
      <span className="happy-birthday-letter t-one">t</span>
      <span className="happy-birthday-letter h-two">h</span>
      <span className="happy-birthday-letter d-one">d</span>
      <span className="happy-birthday-letter a-two">a</span>
      <span className="happy-birthday-letter y-two">y</span>

      <Animated
        animationIn="tada"
        animationInDelay="3200"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div id="azusa">Azusa</div>
      </Animated>
      <img src={azusa} alt="Logo" />
    </div>
  );
}
