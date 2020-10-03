import { useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
import { routerConfig } from "../router/routerConfig";
import { AppContext } from "../store/AppContext";
import { Game } from "../types";

export interface GameLocationState {
  game: Game;
}

export function useOpenGame() {
  const { push } = useHistory<GameLocationState>();
  const { onAddRecentlyVisitedGame } = useContext(AppContext);

  return useCallback(
    (game: Game) => {
      push({
        pathname: routerConfig.routes.game.path,
        state: { game },
      });
      onAddRecentlyVisitedGame(game.slug);
    },
    [push],
  );
}
