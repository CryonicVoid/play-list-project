/**
 * Copyright 2026 CryonicVoid
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `play-list-controls`
 *
 * @demo index.html
 * @element play-list-controls
 */
export class PlayListControls extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "play-list-controls";
  }

  constructor() {
    super();
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          width: 100%;
          font-family: var(--ddd-font-navigation);
          background-color: lightblue;
        }
        .bar {
            margin: var(--ddd-spacing-1);
          
      
          left: 0px;
          bottom: 0px;
          width: 100%;
          flex: 0 0 40px;
          background-color: var(--ddd-theme-default-creekLight);
    
        }
      
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
       <div class="bar">
       
       </div>
       `;
  }
}

globalThis.customElements.define(PlayListControls.tag, PlayListControls);
