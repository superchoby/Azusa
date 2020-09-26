import React from "react";
import "./style.css";

export function Password() {
  return (
    <div className="password-box">
      <div>
        このウェブサイトをご覧になりたかったらパスワードをお打ちください。
      </div>
      <form>
        <input
          id="password"
          placeholder="この世界で一番可愛い女の子の名前(漢字で)"
        />
      </form>
    </div>
  );
}
