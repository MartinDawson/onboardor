import React from "react";
import { Container, Text } from "rebass";

import SubscribeMailingList from "../shared/form/subscribeMailingListContainer";

// const howItWorksList = [
//   { id: "register", icon: <CollaborationIcon />, description: "Register your team" },
//   { id: "add", icon: <UserPlusIcon />, description: "Add your new team members" },
//   { id: "manage", icon: <TreeIcon />, description: "Manage and mentor them with onboardor" },
//   {
//     description: <div>Improve your on-boarding process by up to <span className={styles.important}>250%</span></div>,
//     icon: <CoinsIcon />,
//     id: "improve",
//   },
// ];

const LandingPage = () => (
  <Container pt={130}>
    <Text textAlign="center" mb={20} fontSize={20}>
      Enter your email to get started. We&apos;ll also give your team a <Text is="span" display="inline" fontWeight="bold">free sixth month subscription!</Text>
    </Text>
    <SubscribeMailingList />
  </Container>
);

export default LandingPage;
