import { useCallback, useReducer } from "react";
import { Game } from "../types";
import { AppContext, initialState } from "./AppContext";
import { reducer } from "./reducer";
import { ActionType } from "./types";

export function useAppStore(): AppContext {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onApplyGames = useCallback(
    (games: Game[]) => {
      dispatch({ type: ActionType.APPLY_GAMES, payload: { games } });
    },
    [dispatch],
  );

  const onAddRecentlyVisitedGame = useCallback(
    (id: string) => {
      dispatch({ type: ActionType.ADD_RECENTLY_VISITED_GAMES, payload: { id } });
    },
    [dispatch],
  );

  return {
    state,
    onApplyGames,
    onAddRecentlyVisitedGame,
  };
}
