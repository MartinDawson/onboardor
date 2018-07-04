import React from "react";
import { Helmet } from "react-helmet";

import styles from "./errorPage.scss";

interface IProps {
  status: number;
  error?: string;
}

const ErrorPage = ({ status, error = "An unknown error has occured." }: IProps) => (
  <div className={styles.errorPage}>
    <Helmet>
      <title>Error {status}</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <h1>Error {status}</h1>
    <div className={styles.error}>
      <div>
        {error}
      </div>
      We have been notified of the error ¯\_(ツ)_/¯. Please try again later.
    </div>
  </div>
);

export default ErrorPage;
