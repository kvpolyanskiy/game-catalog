import React from "react";
import classnames from "classnames";

import { Game } from "../../../types";
import { Button, ButtonSizeType, Typography, TypographyType } from "../../ui";

import styles from "./GameCard.module.css";

interface GameCardProps {
  game: Game;
  onClick: (game: Game) => void;
  small?: boolean;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onClick, small }) => {
  const { name, assetOriginUrl, squareIcon192 } = game;
  const handleClick = React.useCallback(() => onClick(game), [game]);

  return (
    <Button size={ButtonSizeType.WRAP_CONTENT} onClick={handleClick} className={styles.button}>
      <figure className={classnames(styles.card, { [styles.smallCard]: small })}>
        <img className={styles.image} src={`${assetOriginUrl}${squareIcon192}`} alt={name} />
        {!small && (
          <figcaption className={styles.caption}>
            <Typography className={styles.title} type={TypographyType.CARD_CAPTION}>
              {name}
            </Typography>
          </figcaption>
        )}
      </figure>
    </Button>
  );
};
