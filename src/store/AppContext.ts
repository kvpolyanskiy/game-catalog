import React from "react";
import { Game } from "../types";
import { State } from "./types";

export interface AppContext {
  state: State;
  onApplyGames: (games: Game[]) => void;
  onAddRecentlyVisitedGame: (id: string) => void;
}

export const initialState: State = {
  games: [],
  recentlyVisitedGames: [],
};

const throwProviderIsMissing = () => {
  throw new Error("AppContext.Provider is missing.");
};

export const AppContext = React.createContext<AppContext>({
  state: { ...initialState },
  onApplyGames: throwProviderIsMissing,
  onAddRecentlyVisitedGame: throwProviderIsMissing,
});
