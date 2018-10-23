import React from "react";
import ReactDOM from "react-dom";
import "../../../Components/shared/setupErrorLogging";
import App from "./app";

const div = document.createElement('div');

div.setAttribute("id", "onboardor");

document.body.appendChild(div);

ReactDOM.render(<App />, div);
