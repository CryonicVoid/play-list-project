/**
 * Copyright 2026 CryonicVoid
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `play-list-indicator`
 * 
 * @demo index.html
 * @element play-list-indicator
 */
export class PlayListIndicator extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "play-list-indicator";
  }

  constructor() {
    super();
    currIndex = 0;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      currIndex: { type : Number },
      slides: { type: Number}
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        background-color: var(--ddd-theme-default-white);
      }
      h3 span {
        font-size: var(--play-list-indicator-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
      ${this.topHeading}
</div>`;
  }
}

globalThis.customElements.define(PlayListIndicator.tag, PlayListIndicator);