import { useContext, useMemo } from "react";
import { AppContext } from "../store/AppContext";
import { Game } from "../types";
import { getRandomItemsOfArray } from "./utils";

export function useRandomGames(count: number, exclude: string[] = [], recentlyVisited?: boolean) {
  const {
    state: { games, recentlyVisitedGames },
  } = useContext(AppContext);

  return useMemo(() => {
    const targetGames = recentlyVisited
      ? (recentlyVisitedGames
          .map((id) => games.find(({ slug }) => slug === id))
          .filter((game) => Boolean(game)) as Game[])
      : games;

    const filteredGames = targetGames.filter((game) => !exclude.includes(game.slug));

    return getRandomItemsOfArray<Game>(filteredGames, count);
  }, [count, games, exclude, recentlyVisited, recentlyVisitedGames]);
}
