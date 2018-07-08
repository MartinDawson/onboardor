import React from "react";
import { Helmet } from "react-helmet";
import { Container, Text } from "rebass";

interface IProps {
  status: number;
  error?: string;
}

const ErrorPage = ({ status, error = "An unknown error has occured." }: IProps) => (
  <Container mt={100}>
    <Helmet>
      <title>{`Error ${status}`}</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <Text fontSize={60} textAlign="center" mb={25}>Error {status}</Text>
    <Text fontSize={25} textAlign="center" lineHeight={1.6}>
      <div>
        {error}
      </div>
      We have been notified of the error ¯\_(ツ)_/¯. Please try again later.
    </Text>
  </Container>
);

export default ErrorPage;
