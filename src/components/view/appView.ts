import News from './news/news';
import Sources from './sources/sources';
import { DataNews, DataSources } from '../../types';

export class AppView {
  private news: News;
  private sources: Sources;
  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data?: DataNews) {
    const values = data?.articles ?? [];
    this.news.draw(values);
  }

  drawSources(data?: DataSources) {
    const values = data?.sources ?? [];
    this.sources.draw(values);
  }
}

export default AppView;
