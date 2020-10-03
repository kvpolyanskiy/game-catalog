import React from "react";

import { Search } from "./search/Search";

import styles from "./Header.module.css";
import { Logo } from "../logo/Logo";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.title} />
      <Search />
    </header>
  );
};
