/**
 * Copyright 2026 CryonicVoid
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `play-list-slide`
 * 
 * @demo index.html
 * @element play-list-slide
 */
export class PlayListSlide extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "play-list-slide";
  }

  constructor() {
    super();
    this.topHeading = "Top heading"
    this.secondHeading = "Second Heading";
    this.topHeading
  
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      topHeading: { type: String },
      secondHeading: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: none;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      
      }
      :host[active] {
        display: block;
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        background-color: var(--ddd-theme-default-white);
        border-radius: var(---ddd)
      }
      h3 span {
        font-size: var(--play-list-slide-label-font-size, var(--ddd-font-size-s));
      }
      p { 
        color: blue;
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

globalThis.customElements.define(PlayListSlide.tag, PlayListSlide);