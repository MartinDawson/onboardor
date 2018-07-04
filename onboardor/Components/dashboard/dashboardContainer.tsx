// import { graphql } from 'react-relay';

import Dashboard from "./dashboard";

// const query = graphql`
//   query dashboardContainerQuery {
//     organizations {
//       id
//       name
//       avatarUrl
//       members {
//         id
//         name
//         avatarUrl
//       }
//     }
//   }
// `;

export const routeConfig = {
  Component: Dashboard,
  // query,
};

export default Dashboard;
