import React from "react";
import { Circle, Text } from "rebass";
import styled from "styled-components";
import { IStyleProps } from "../types";

interface IProps {
  children: string;
}

const Step = styled(Circle)`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }: IStyleProps) => theme.colors.primary}
`;

const StepNumber = ({
  children,
}: IProps) => (
  <Step size={40} fontSize={21}>
    <Text fontSize={21}>
      {children}
    </Text>
  </Step>
);

export default StepNumber;
