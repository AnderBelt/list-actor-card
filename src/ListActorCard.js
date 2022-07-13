import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './ListActorCard-styles.js';
import '@capacitacion-practica/actor-card/actor-card.js'
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<list-actor-card></list-actor-card>
```

##styling-doc

@customElement list-actor-card
*/
export class ListActorCard extends LitElement {
  static get is() {
    return 'list-actor-card';
  }

  // Declare properties
  static get properties() {
    return {
      dataList: { type: Object, },
      height: {type: Number},
      width: {type:Number}
    };
  }

  // Initialize properties
  constructor() {
    super(); 
  }


  static get styles() {
    return [
      styles,
      getComponentSharedStyles('list-actor-card-shared-styles')
    ];
  }

  _setProperties(data) {
    this.dataList = data;

  }
  

  // Define a template
  render() {
    return html`
      <div class="overflow-actor" style="height: ${this.height}px; width:${this.width}px">
      <div class="row row-cols-1 row-cols-sm-4 g-4">
      ${this.dataList.cast.map(
        (i) =>
        html`<actor-card .name=${i.name} .img='https://image.tmdb.org/t/p/original${i.img}' .role=${i.character} /></actor-card>`
    )}
      </div>
      </div>

    `;
  }
}
