import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./Components/App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
