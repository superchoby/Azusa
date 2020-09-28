import React, { useState } from "react";
import "./style.css";

export function TextMessage(props) {
  const [messageStatus, setMessageStatus] = useState("loading");
  let text = (
    <p>
      <span className={props.odd ? "start-bright" : "start-dark"}>&#8226;</span>
      <span className={props.odd ? "start-dark" : "start-bright"}>&#8226;</span>
      <span className={props.odd ? "start-bright" : "start-dark"}>&#8226;</span>
    </p>
  );
  if (messageStatus === "loading") {
    setTimeout(function () {
      console.log(props.message);
      if (document.getElementById(props.message)) {
        document.getElementById(props.message).classList.remove("dont-display");
        document.getElementById(props.message).classList.add("text-message");
      }
      setTimeout(function () {
        setMessageStatus("sent");
      }, props.loadMessageTime);
    }, props.delay * 1000);
  } else {
    text = <p>{props.message}</p>;
  }

  return (
    <div style={{ overflow: "auto" }}>
      <div id={props.message} className="dont-display">
        {text}
      </div>
      <br />
    </div>
  );
}
