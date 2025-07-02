import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import "../styles/trafficLight.css";
import TrafficLight from "./components/TrafficLight";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TrafficLight />
  </React.StrictMode>
);
