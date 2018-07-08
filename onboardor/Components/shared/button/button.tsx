import React from "react";
import { Button as RebassButton, ButtonProps } from "rebass";
import styled from "styled-components";

import colors from '../../styles/colors';

const Button = styled(({ ...props }: ButtonProps) => <RebassButton {...props} bg={colors.$primary} />)`
  cursor: pointer;
  &:focus {
    box-shadow: none;
  }
`;

export default Button;
