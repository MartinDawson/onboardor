import { Link } from "found";
import React from "react";

import styles from "./footer.scss";

const Footer = () => (
  <div className={styles.footer}>
    <Link to="/termsAndConditions">terms and conditions</Link>
    <Link to="/privacyPolicy">privacy policy</Link>
    <Link to="/imprint">imprint</Link>
  </div>
);

export default Footer;
