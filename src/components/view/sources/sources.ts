import './sources.css';
import { TextSources } from '../../options';
class Sources {
  draw(data: TextSources[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp');

    data.forEach((item) => {
      const sourceClone = (sourceItemTemp as HTMLTemplateElement).content.cloneNode(true) as HTMLElement;

      (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
      (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    (document.querySelector('.sources') as HTMLElement).append(fragment);
  }
}

export default Sources;
