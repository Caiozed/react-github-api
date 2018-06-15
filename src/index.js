import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import GitHubApi from "./gitHubApi.js";

class App extends Component {
  state = { usename: "" };
  render() {
    const { username } = this.state;
    return (
      <div>
        <GitHubApi username={username} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
