import { Card } from "rebass";
import styled from "styled-components";
import { ITheme } from "../types";

interface IStyleProps {
  theme: ITheme;
  selected?: boolean;
}

export const SelectCard = styled(Card)`
  cursor: pointer;
  width: 150px;

  ${({ selected, theme }: IStyleProps) => selected && `
    box-shadow: inset 0 0 0 1px #eee, 0 0 7px 3px ${theme.colors.primary};
  `}
`;

export const cardMargin = 11;
export const nameMargin = 7;
