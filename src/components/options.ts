interface DataNews {
  articles: TextNews[];
}
type TextNews = {
  urlToImage: string;
  author: string;
  source: {
    name: string;
  };
  publishedAt: string;
  title: string;
  description: string;
  url: string;
};

interface DataSources {
  sources: TextSources[];
}
type TextSources = {
  name: string;
  id: string;
};

interface Options {
  apiKey?: string;
}

interface GetResp {
  endpoint: string;
  options?: TypeGetResp;
}

type TypeGetResp =
  | {
      sources: string | null | number | undefined;
    }
  | undefined;

interface ErrorHandler {
  ok: boolean;
  status: number;
  statusText: string;
  json(): void;
}

type Callback<T> = (data?: T) => void;

type Load = {
  readonly headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly type: ResponseType;
  readonly url: string;
  clone(): Response;
};

export { Load, Options, DataNews, DataSources, TextNews, TextSources, Callback, GetResp, TypeGetResp, ErrorHandler };
