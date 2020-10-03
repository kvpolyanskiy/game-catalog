import { Game } from "../types";

const url = "https://raw.githubusercontent.com/fortemka/test_task/master/test-task-feed_en.json";

export const api = {
  async fetchFeed(): Promise<Array<Game>> {
    try {
      const response = await fetch(url);
      return response.json();
    } catch {
      return [];
    }
  },
};
