import React from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../store/AppContext";

import { GameCards } from "../common-components/game-cards/GameCards";
import { Typography, TypographyType } from "../common-components/ui";
import { useOpenGame } from "../game/useOpenGame";

import styles from "./Categories.module.css";

export const Categories: React.FC = () => {
  const { hash } = useLocation();
  const {
    state: { games },
  } = React.useContext(AppContext);
  const onOpenGame = useOpenGame();

  const category = hash.slice(1);

  const gamesByCategory = React.useMemo(() => {
    if (!hash) {
      return games;
    }

    return games.filter(({ feedMetadata }) => feedMetadata.categories.includes(category));
  }, [hash, games]);

  return (
    <>
      <Typography className={styles.title} type={TypographyType.PAGE_HEADER}>
        {`${category} Games`}
      </Typography>
      <GameCards games={gamesByCategory} onGameClick={onOpenGame} />
    </>
  );
};
