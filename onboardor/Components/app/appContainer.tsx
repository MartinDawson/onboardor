import "isomorphic-fetch";
import React from "react";
import ReactDOM from "react-dom";
import "../shared/setupErrorLogging";

import App from "./app";

ReactDOM.render(<App />, document.getElementById("app"));
