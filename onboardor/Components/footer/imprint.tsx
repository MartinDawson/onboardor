import React from "react";
import { Helmet } from "react-helmet";
import { Container, Heading, Text } from "rebass";
import styled from "styled-components";

const Detail = styled(Text)`
  font-size: 18px;
  margin: 10px 0;
`;

const Imprint = () => (
  <Container pt={40} width={["100%", "80%", "60%"]}>
    <Helmet>
      <title>Imprint</title>
      <meta name="description" content="Contact information for onboardor.com." />
    </Helmet>
    <Heading mb={40} is="h1">Imprint</Heading>
    <Detail>Company Name: FOZEN LIMITED</Detail>
    <Detail>Company Director: Martin Dawson</Detail>
    <Detail>Address: 26 CalderView, Rastrick, Brighouse, HD63DQ United Kingdom</Detail>
    <Detail>Telephone: +(44)7473591097</Detail>
    <Detail>Email address: u1356770@gmail.com</Detail>
  </Container>
);

export default Imprint;
