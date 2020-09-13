import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// creates const called render that refrences react-dom render function
import { render } from "react-dom";
import App from "./components/App";

render(<App />, document.getElementById("root"));
