import './sources.css';
import { TextSources } from '../../../types';
class Sources {
  draw(data: TextSources[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp');
    const sources: HTMLElement = document.querySelector('.sources');
    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      sourceClone.querySelector('.source__item-name').textContent = item.name;
      sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    sources.append(fragment);
  }
}

export default Sources;
