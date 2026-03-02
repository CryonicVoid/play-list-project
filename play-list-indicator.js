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

  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      index: { type : Number },
      slides: { type: Number}
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
         :host {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin: 8px 0;
      }

      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: gray;
        cursor: pointer;
        transition: transform 0.2s;
      }

      .dot.active {
        background-color: blue;
        transform: scale(1.3);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      ${Array.from({ length: this.slides }).map(
        (_, i) => html`<div
          class="dot ${i === this.index ? "active" : ""}"
          @click=${() => this.dispatchEvent(new CustomEvent("jump-to-slide", { detail: i, bubbles: true, composed: true }))}
        ></div>`
      )}
    `;
  }
}

globalThis.customElements.define(PlayListIndicator.tag, PlayListIndicator);