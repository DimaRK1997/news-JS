import AppLoader from './appLoader';
import { DataNews, DataSources, Callback } from '../options';

class AppController extends AppLoader {
  getSources(callback: Callback<DataSources>) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: Callback<DataNews>) {
    let target = e.target;
    const newsContainer = e.currentTarget;

    while (target !== newsContainer) {
      if ((target as HTMLElement).classList.contains('source__item')) {
        const sourceId = (target as HTMLElement).getAttribute('data-source-id') as string;
        if ((newsContainer as HTMLElement).getAttribute('data-source') !== sourceId) {
          (newsContainer as HTMLElement).setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = (target as HTMLElement).parentNode;
    }
  }
}

export default AppController;
