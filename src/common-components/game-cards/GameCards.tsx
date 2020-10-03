import React from "react";
import classnames from "classnames";

import { Game } from "../../types";
import { Typography, TypographyType } from "../ui";
import { GameCard } from "./card/GameCard";

import styles from "./GameCards.module.css";

interface GameCardsProps {
  games: Game[];
  placeholder?: string;
  onGameClick: (game: Game) => void;
  small?: boolean;
  className?: string;
}

export const GameCards: React.FC<GameCardsProps> = ({
  games,
  placeholder,
  onGameClick,
  small,
  className,
}) => {
  if (!games.length) {
    return <Typography type={TypographyType.SUBHEADER}>{placeholder}</Typography>;
  }

  return (
    <section className={classnames(className, styles.categories, { [styles.small]: small })}>
      {games.map((game) => (
        <GameCard key={game.slug} game={game} onClick={onGameClick} small={small} />
      ))}
    </section>
  );
};
