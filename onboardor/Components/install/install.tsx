import { Flex } from "grid-styled";
import React from "react";
import { Container, Text } from "rebass";
import styled from "styled-components";

import GitHubIcon from "../../wwwroot/assets/gitHub.svg";
import AnchorButton from "../shared/button/anchorButton";

const CustomGitHubIcon = styled(GitHubIcon)`
  width: 30px;
  height: 30px;
  fill: white;
  margin-right: 10px;
`;

const Install = () => (
  <Container mt={130}>
    <Text mb={20} fontSize={20} textAlign="center">Install with GitHub to use onboardor</Text>
    <Flex justifyContent="center">
      <AnchorButton
        href={`https://github.com/apps/${process.env.APP_NAME}`}
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <CustomGitHubIcon />
        Install onboardor
      </AnchorButton>
    </Flex>
  </Container>
);

export default Install;
