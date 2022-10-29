import { GetRespOptions, LoaderOptions, SourceOptions, Callback } from '../../types';

class Loader {
  constructor(private baseLink: string, private options: LoaderOptions) {}

  getResp(
    { endpoint, options }: GetRespOptions,
    callback = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: SourceOptions, endpoint: string) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: Callback<Response>, options: SourceOptions): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback((data as unknown) as Response))
      .catch((err) => console.error(err));
  }
}

export default Loader;
