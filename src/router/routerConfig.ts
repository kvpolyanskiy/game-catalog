import { Categories } from "../categories/Categories";
import { Game } from "../game/Game";
import { Search } from "../search/Search";

const enum PageType {
  CATEGORIES = "categories",
  SEARCH = "search",
  GAME = "game",
}

interface Route {
  path: string;
  pageComponent: React.ComponentType;
}

interface RouteConfig {
  routes: { [key in PageType]: Route };
}

export const routerConfig: RouteConfig = {
  routes: {
    [PageType.CATEGORIES]: {
      path: "/categories",
      pageComponent: Categories,
    },
    [PageType.SEARCH]: {
      path: "/search",
      pageComponent: Search,
    },
    [PageType.GAME]: {
      path: "/game",
      pageComponent: Game,
    },
  },
};
