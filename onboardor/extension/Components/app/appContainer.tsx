import React from "react";
import ReactDOM from "react-dom";
import "../../../Components/shared/setupErrorLogging";
import renderNav from "../nav/navLinkContainer";
import App from "./app";

// const query = graphql`
//   query appContainerQuery {
//     organizations {
//       id
//       name
//       avatarUrl
//     }
//   }
// `;

//const renderApp = () => {
  ReactDOM.render(<App />, document.getElementsByClassName('repository-content')[0]);
//};

// renderApp();

// const observer = new MutationObserver(() => {
//   if (!document.getElementById("onboardor") &&
//       window.location.hash === onboardorHash) {
//     renderApp();
//   }
// });

// observer.observe(document, {
//   subtree: true,
//   childList: true,
// })

// renderNav();
