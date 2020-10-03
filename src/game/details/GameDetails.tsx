import React from "react";
import { Typography, TypographyType } from "../../common-components/ui";
import { Game } from "../../types";
import { GameLocales } from "../locales/GameLocales";

import styles from "./GameDetails.module.css";

interface GameDetailsProps {
  game: Game;
}

export const GameDetails: React.FC<GameDetailsProps> = ({ game }) => {
  const { assetOriginUrl, squareIcon192, name, locales, description } = game;
  return (
    <article className={styles.details}>
      <div className={styles.header}>
        <img src={`${assetOriginUrl}${squareIcon192}`} alt={name} className={styles.image} />
        <div>
          <Typography className={styles.title} type={TypographyType.PAGE_HEADER}>
            {name}
          </Typography>
          <GameLocales locales={locales} />
        </div>
      </div>
      <Typography>{description}</Typography>
    </article>
  );
};
