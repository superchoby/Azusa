import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage } from "./homepage/homepage";
import { Password } from "./password/password";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Password />
        </Route>
        <Route path="/homepage">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
