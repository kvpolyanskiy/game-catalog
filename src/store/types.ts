import { Game } from "../types";

export interface State {
  games: Game[];
  recentlyVisitedGames: string[];
}

export const enum ActionType {
  APPLY_GAMES = "applyGames",
  ADD_RECENTLY_VISITED_GAMES = "addRecentlyVisitedGames",
}

interface ApplyGamesAction {
  type: ActionType.APPLY_GAMES;
  payload: { games: Game[] };
}

interface AddRecentlyVisitedGameAction {
  type: ActionType.ADD_RECENTLY_VISITED_GAMES;
  payload: { id: string };
}

export type Action = ApplyGamesAction | AddRecentlyVisitedGameAction;
