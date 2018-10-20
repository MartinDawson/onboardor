import { compose } from "redux";

import { Link } from "found";
import styled, { withTheme } from "styled-components";

import { ITheme } from "../../types";

interface IStyleProps {
  theme: ITheme;
}
const CustomLink = styled(Link)`
  background-color: ${({ theme }: IStyleProps) => theme.colors.primary};
`;

export default compose(
  withTheme,
)(CustomLink);
