import React from "react";
import { BlockLink, LinkProps } from "rebass";
import styled from "styled-components";

import colors from '../../styles/colors';

const AnchorButton = styled(({ ...props }: LinkProps) =>
  <BlockLink {...props} p={15} color="white" bg={colors.$primary} />)`
  border-radius: 4px;
`;

export default AnchorButton;
