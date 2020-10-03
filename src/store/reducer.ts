import { Action, ActionType, State } from "./types";

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.APPLY_GAMES: {
      const { games } = action.payload;
      return { ...state, games };
    }
    case ActionType.ADD_RECENTLY_VISITED_GAMES: {
      const { id } = action.payload;
      return {
        ...state,
        recentlyVisitedGames: [...new Set([id, ...state.recentlyVisitedGames])],
      };
    }
    default:
      return state;
  }
}
