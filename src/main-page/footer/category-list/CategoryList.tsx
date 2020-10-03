import React from "react";
import { Link } from "react-router-dom";
import { Typography, TypographyType } from "../../../common-components/ui";
import { routerConfig } from "../../../router/routerConfig";

import styles from "./CategoryList.module.css";

enum CategoryType {
  WORD = "Word",
  MAHHONG = "Mahhong",
  CARD = "Card",
  ARCADE = "Arcade",
}

export const CategoryList: React.FC = () => {
  return (
    <section className={styles.list}>
      {Object.values(CategoryType).map((category) => (
        <Link
          className={styles.link}
          key={category}
          to={`${routerConfig.routes.categories.path}#${category}`}
        >
          <Typography type={TypographyType.SUBHEADER}>{category}</Typography>
        </Link>
      ))}
    </section>
  );
};
