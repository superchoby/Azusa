import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage } from "./homepage/homepage";
import { Password } from "./password/password";
import { Video } from "./video/video";
import { Letter } from "./letter/letter";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/homepage">
          <HomePage />
        </Route>
        <Route path="/video">
          <Video />
        </Route>
        <Route path="/letter">
          <Letter />
        </Route>
        <Route path="/">
          <Password />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
