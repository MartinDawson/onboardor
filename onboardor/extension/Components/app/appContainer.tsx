import React from "react";
import ReactDOM from "react-dom";
import "../../../Components/shared/setupErrorLogging";
import renderNav from "../nav/navLinkContainer";
import App from "./app";

const div = document.createElement('div');

console.log("Test");

div.setAttribute("id", "onboardor");

document.body.appendChild(div);

ReactDOM.render(<App />, div);

// renderApp();

// const observer = new MutationObserver(() => {
//   if (!document.getElementById("onboardor") &&
//       window.location.hash === "#onboardor") {
//     renderApp();
//   }
// });

// observer.observe(document, {
//   subtree: true,
//   childList: true,
// })

// renderNav();
