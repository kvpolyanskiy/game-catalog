import React from "react";
import { Typography } from "../../common-components/ui";
import { Logo } from "../logo/Logo";
import { CategoryList } from "./category-list/CategoryList";

import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <CategoryList />
      <Typography className={styles.copyright}>(c) Arena.com 2020</Typography>
    </footer>
  );
};
