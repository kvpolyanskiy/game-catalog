import React from "react";
import { useLocation } from "react-router-dom";

import { GameAside } from "./aside/GameAside";
import { GameDetails } from "./details/GameDetails";
import { GameSuggestion } from "./suggestion/GameSuggestion";
import { GameLocationState } from "./useOpenGame";

import styles from "./Game.module.css";

export const Game: React.FC = () => {
  const { state } = useLocation<GameLocationState>();
  return (
    <div className={styles.game}>
      <main>
        <GameDetails game={state.game} />
        <GameSuggestion gameId={state.game.slug} />
      </main>
      <GameAside />
    </div>
  );
};
