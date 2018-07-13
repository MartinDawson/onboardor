import { Link } from "found";
import { Flex } from "grid-styled";
import React from "react";
import styled from "styled-components";

import { ITheme } from "../types";

interface IStyleProps {
  theme?: ITheme;
}

const CustomLink = styled(Link)`
  color: ${({ theme }: IStyleProps) => theme.colors.lightGrey};
  margin: 0 10px;
`;

const CustomFlex = styled(Flex)`
  justify-content: center;
  align-items: center;
  height: 80px;
`;

const Footer = () => (
  <CustomFlex mt={-80}>
    <CustomLink to="/termsAndConditions">terms and conditions</CustomLink>
    <CustomLink to="/privacyPolicy">privacy policy</CustomLink>
    <CustomLink to="/imprint">imprint</CustomLink>
  </CustomFlex>
);

export default Footer;
