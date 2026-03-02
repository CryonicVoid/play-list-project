/**
 * Copyright 2026 CryonicVoid
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { PlayListControls } from "./play-list-controls";
import { PlayListIndicator } from "./play-list-indicator";
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
    this.index = 0;
    this.slides = [];
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      index: { type: Number },
      slides: { type: Array },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: flex;
          flex-direction: column;
          border: none;
          font-family: var(--ddd-font-navigation);
          width: clamp(280px, 60vw, 420px);
          min-height: 200px;
          position: relative;
          outline: none;
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

  updateSlides() {
    const children = Array.from(this.children);

    this.slides = children.filter((c) => c.tagName.includes("SLIDE")); // slide has to be caps or wtv i dont understand ts pmo.

    const indicator = this.shadowRoot.querySelector("play-list-indicator");
  
    console.log(this.slides.length);
    if (indicator) 
      {
        indicator.slides = this.slides.length;
      }
    const controls = this.shadowRoot.querySelector("play-list-controls")
  
    if (controls) {
      controls.total = this.slides.length;
      controls.index = this.index;
    }
  }
  // Lit render the HTML
  render() {
    return html`
      <play-list-indicator
        id="indicator"
        slides="${this.slides.length}"
        index="${this.index}"
      ></play-list-indicator>
      <div class="wrapper">
        <slot name="slides" @slotchange=${this.updateSlides}></slot>
      </div>
      <play-list-controls></play-list-controls>
    `;
  }

  firstUpdated() {
        console.log(this.index)
    this.updateSlides();
    this._setIndex(this.index)
    this._showSlide()
    console.log(this.index)
    this.slideObserver = new MutationObserver(() => this.updateSlides());
    this.slideObserver.observe(this, { childList: true });
  }
  _setIndex(i) {

  this.index = i;
  this._showSlide();

  const controls = this.querySelector("play-list-controls");
  if (controls) controls.index = this.index;
}
  _showSlide() {
    const slides = this.querySelectorAll("play-list-slide");

    slides.forEach((slide, i) => {
      slide.toggleAttribute("active", i === this.index);
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("change-slide", (e) => {
      this._setIndex(e.detail)
    });
  }
}

globalThis.customElements.define(PlayListProject.tag, PlayListProject);
