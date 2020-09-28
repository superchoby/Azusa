import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

export function Password() {
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === "梓") {
      window.sessionStorage.setItem("hasAccess", true);
      alert("認めた笑");
      history.push("/homepage");
    } else {
      alert("違うがね");
    }
  };
  return (
    <div className="password-box">
      <div className="hidden-on-phone">
        このウェブサイトをご覧になりたかったらパスワードをお打ちください。
      </div>
      <form className="hidden-on-phone-form" onSubmit={onSubmit}>
        <input
          id="password"
          placeholder="この世界で一番可愛い女の子の名前(漢字で)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <div className="visible-on-phone">
        パサコンでこのウェブサイトをご覧ください。
      </div>
    </div>
  );
}
