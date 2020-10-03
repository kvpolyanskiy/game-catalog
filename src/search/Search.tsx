import React from "react";
import { useLocation } from "react-router-dom";
import { GameCards } from "../common-components/game-cards/GameCards";
import { Typography, TypographyType } from "../common-components/ui";
import { useOpenGame } from "../game/useOpenGame";
import { AppContext } from "../store/AppContext";

import styles from "./Search.module.css";

export interface SearchLocationState {
  value: string;
}

export const Search: React.FC = () => {
  const { state } = useLocation<SearchLocationState>();
  const onOpenGame = useOpenGame();
  const {
    state: { games },
  } = React.useContext(AppContext);

  const gamesByName = React.useMemo(() => {
    if (!state.value) {
      return [];
    }
    return games.filter(({ name }) => name.toLowerCase().includes(state.value.toLowerCase()));
  }, [games, state]);

  return (
    <>
      <Typography className={styles.title} type={TypographyType.PARAGRAPH}>
        {`You were looking for a ${"name"} and this is what we found:`}
      </Typography>
      <GameCards games={gamesByName} onGameClick={onOpenGame} />
    </>
  );
};
