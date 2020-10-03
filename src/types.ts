interface FeedMetaData {
  categories: string[];
}

export interface Game {
  name: string;
  assetOriginUrl: string;
  squareIcon192: string;
  slug: string;
  description: string;
  locales: string;
  feedMetadata: FeedMetaData;
}
