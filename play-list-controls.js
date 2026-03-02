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
  this.index = 0; // current slide
  this.total = 1; // total slides
  this.currentSlideText = `Slide 1 of 1`;
}

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      index: { type: Number},
      total: {type: Number},
      currentSlideText: {type: String}
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
        
          position: relative;
        }
         .nav-button {
          position: absolute;
          top: -100%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background-color: rgba(0,0,0,0.5);
          color: white;
          cursor: pointer;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10; /* above slides */
         }
          .nav-button.left {
          left: 10px;
        }

        .nav-button.right {
          right: 10px;
        }
      
  
      .bar {
        position: relative;
        bottom: 0;
        width: 100%;
        height: 40px;
        background-color: var(--ddd-theme-default-creekLight, lightblue);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 40%;
        box-sizing: border-box;
      }

      .bar .text {
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        left: 25%;
      }
    
      
      `,
    ];
  }

prev() {
  if (this.index > 0) this.index--;
  this._updateSlideText();
  this._emitChange();
}

next() {
  if (this.index < this.total - 1) this.index++;
  console.log(this.index, this.total)
  this._updateSlideText();
  this._emitChange();
}

_updateSlideText() {
  this.currentSlideText = `Slide ${this.index + 1} of ${this.total}`;
}

_emitChange() {
  this.dispatchEvent(new CustomEvent('change-slide', {
    detail: this.index,
    bubbles: true,
    composed: true
  }));
}
  // Lit render the HTML
render() {
  return html`
    <!-- Left/right overlay buttons -->
    <button class="nav-button left" @click=${this.prev}>&lt;</button>
    <button class="nav-button right" @click=${this.next}>&gt;</button>

    <!-- Bottom bar: only shows text -->
    <div class="bar">
      <div class="text">${this.currentSlideText}</div>
    </div>
  `;
}
}

globalThis.customElements.define(PlayListControls.tag, PlayListControls);
