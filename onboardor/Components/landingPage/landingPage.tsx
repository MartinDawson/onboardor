import React from "react";
import { Container, Text } from "rebass";

import SubscribeMailingList from "../shared/form/subscribeMailingListContainer";

const LandingPage = () => (
  <Container pt={130}>
    <Text textAlign="center" mb={20} fontSize={20}>
      Enter your email to get started. We&apos;ll also give your team a
      <Text is="span" display="inline" fontWeight="bold"> free sixth month subscription!</Text>
    </Text>
    <SubscribeMailingList />
  </Container>
);

export default LandingPage;
