import { Options, Callback, GetResp, TypeGetResp, ErrorHandler, Load } from '../options';

class Loader {
  baseLink: string;
  options: Options;
  constructor(baseLink: string, options: Options) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options }: GetResp,
    callback = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: ErrorHandler) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: TypeGetResp, endpoint: string) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: Callback<Load>, options: TypeGetResp): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback((data as unknown) as Load))
      .catch((err) => console.error(err));
  }
}

export default Loader;
