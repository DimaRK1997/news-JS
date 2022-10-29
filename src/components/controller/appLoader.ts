import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '22d4e54d29bf4d64a87c6542403e37b8',
    });
  }
}

export default AppLoader;
