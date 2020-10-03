import React from "react";
import { GameCards } from "../../common-components/game-cards/GameCards";
import { Typography, TypographyType } from "../../common-components/ui";
import { useOpenGame } from "../useOpenGame";
import { useRandomGames } from "../useRandomGames";

import styles from "./GameSuggestions.module.css";

interface GameSuggestionProps {
  gameId: string;
}

const SUGGESTIONS_COUNT = 4;

export const GameSuggestion: React.FC<GameSuggestionProps> = ({ gameId }) => {
  const onGameClick = useOpenGame();
  const suggestions = useRandomGames(SUGGESTIONS_COUNT, [gameId]);

  return (
    <>
      <Typography className={styles.title} type={TypographyType.SUBHEADER}>
        You may also like
      </Typography>
      <GameCards games={suggestions} onGameClick={onGameClick} small />
    </>
  );
};
