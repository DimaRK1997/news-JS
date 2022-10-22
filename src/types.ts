export type DataNews = {
  articles: TextNews[];
};

export type TextNews = {
  urlToImage: string;
  author: string;
  source: TextSources;
  publishedAt: string;
  title: string;
  description: string;
  url: string;
};

export type DataSources = {
  sources: TextSources[];
};

export type TextSources = {
  name: string;
  id: string;
};

export type LoaderOptions = {
  apiKey?: string;
};

export type GetRespOptions = {
  endpoint: string;
  options?: SourceOptions;
};

export type SourceOptions = {
  sources: string | number;
};

export type Callback<T> = (data?: T) => void;
