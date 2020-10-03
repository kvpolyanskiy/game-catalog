import React from "react";
import classnames from "classnames";
import { Button, Input, Typography } from "../../common-components/ui";
import { useRandomGames } from "../useRandomGames";
import { GameCards } from "../../common-components/game-cards/GameCards";
import { useOpenGame } from "../useOpenGame";
import { Game } from "../../types";

import styles from "./GameAside.module.css";

const COUNT_SUGGESTIONS = 10;

export const GameAside: React.FC = () => {
  const [recentlyVisited, setRecentlyVisited] = React.useState(false);
  const suggestions = useRandomGames(COUNT_SUGGESTIONS, [], recentlyVisited);
  const [filteredSuggestions, setFilteredSuggestions] = React.useState<Game[]>(suggestions);
  const [filterValue, setFilterValue] = React.useState("");

  const onGameClick = useOpenGame();

  const onClickTopGames = React.useCallback(() => {
    setRecentlyVisited(false);
  }, [setRecentlyVisited]);

  const onClickRecentlyVisited = React.useCallback(() => {
    setRecentlyVisited(true);
  }, [setRecentlyVisited]);

  const onFilterChange = React.useCallback((event) => {
    const { value } = event.target;
    setFilterValue(value);
  }, []);

  React.useEffect(() => {
    if (!filterValue.trim()) {
      setFilteredSuggestions(suggestions);
    } else {
      setFilteredSuggestions(
        suggestions.filter(({ name }) => name.toLowerCase().includes(filterValue.toLowerCase())),
      );
    }
  }, [filterValue, recentlyVisited]);

  return (
    <aside className={styles.aside}>
      <div className={styles.buttonGroup}>
        <Button
          className={classnames({ [styles.activeButton]: !recentlyVisited })}
          onClick={onClickTopGames}
        >
          <Typography className={styles.buttonName}>
            {`Top Games (${recentlyVisited ? COUNT_SUGGESTIONS : suggestions.length})`}
          </Typography>
        </Button>
        <Button
          className={classnames({ [styles.activeButton]: recentlyVisited })}
          onClick={onClickRecentlyVisited}
        >
          <Typography className={styles.buttonName}>
            {`Recently Opened (${recentlyVisited ? suggestions.length : COUNT_SUGGESTIONS})`}
          </Typography>
        </Button>
      </div>
      <Input className={styles.input} onChange={onFilterChange} />
      <GameCards
        games={filteredSuggestions}
        small
        onGameClick={onGameClick}
        className={styles.cards}
      />
    </aside>
  );
};
