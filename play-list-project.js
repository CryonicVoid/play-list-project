/**
 * Copyright 2026 CryonicVoid
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import {PlayListControls} from "./play-list-controls" ;

/**
 * `play-list-project`
 *
 * @demo index.html
 * @element play-list-project
 */
export class PlayListProject extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "play-list-project";
  }

  constructor() {
    super();
    this.index = 1;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      index: { type: Number },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: flex;
          border: none;
          font-family: var(--ddd-font-navigation);
          width: clamp(280px, 60vw, 420px);
          min-height: 200px;
          position: relative;
          outline:none;
          
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
          border: none;
          background-color: var(--ddd-theme-default-creekMaxLight);
          flex: 1;
          overflow: auto;
        }

        h3 span {
          font-size: var(
            --play-list-project-label-font-size,
            var(--ddd-font-size-s)
          );
        }
    
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <slot name="slides"></slot>
    </div>
    <slot name="control"></slot>
  
    `;
  }
}

globalThis.customElements.define(PlayListProject.tag, PlayListProject);
