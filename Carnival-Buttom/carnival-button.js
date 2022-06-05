const template = document.createElement("template");
template.innerHTML = /*html*/ `
<style>
    :host {
    /* base colors */
    --white: #FFFFFF;
    --midnight-blue: #000048;
    /* accent-color */
    --dark-teal: #06C7CC;
    --medium-teal: #26EFE9;
    --light-teal: #97F5F7;
    --dark-blue: #2F78C4;
    --medium-blue: #6AA2DC;
    --light-blue: #92BBE6;
    --dark-plum: #2E308E;
    --medium-plum: #7373D8;
    --light-plum: #85A0F9;
    /* neutral colors */
    --pressed: #222222;
    --dark-gray: #53565A;
    --medium-gray: #97999B;
    --light-gray: #D0D0CE;
    --very-light-gray: #EFEFEE;
    --ultra-light-gray: #F6F6F5;
    /* highlight color */
    --highlight-red: #B81F2D;
    --highlight-yellow: #E9C71D;
}


button[disabled],
button[disabled]:active,
button[disabled]:hover {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.3;
}

.btn {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 32px;
    gap: 10px;
    border-radius: 2px;
    font-family: 'Gellix';
    font-size: 14px;
    line-height: 20px;
}

.btn-primary {
    border: 1px solid var(--dark-blue);
    background-color: var(--dark-blue);
    color: var(--white);
}

.btn-primary:hover {
    border: 1px solid var(--white);
    background-color: var(--white);
    color: var(--dark-blue);
}

.btn-primary:active {
    border: 1px solid var(--light-blue);
    background-color: var(--light-blue);
    color: var(--pressed);
}

.btn-secondary {
    border: 1px solid var(--dark-blue);
    background-color: var(--white);
    color: var(--dark-blue);
}

.btn-secondary:hover {
    border: 1px solid var(--white);
    background-color: var(--white);
    color: var(--dark-blue);
}

.btn-secondary:active {
    border: 1px solid var(--dark-blue);
    background-color: var(--light-blue);
    color: var(--pressed);
}

.btn-primary>svg>path {
    fill: var(--light-blue);
}

.btn-primary:active>svg>path {
    fill: var(--medium-blue);
}

.btn-secondary>svg>path {
    fill: var(--dark-blue);
}
@font-face {
    font-family: 'Gellix';
    src: url('fonts/gellix-regular_r.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    text-rendering: optimizeLegibility;
    font-display: swap; 
}

@font-face {
    font-family: 'Gellix';
    src: url('fonts/gellix-regularitalic_r.woff2') format('woff2');
    font-weight: 400;
    font-style: italic;
    text-rendering: optimizeLegibility;
    font-display: swap; 
}

@font-face {
    font-family: 'Gellix';
    src: url('fonts/gellix-semibold_r.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    text-rendering: optimizeLegibility;
    font-display: swap; 
}

@font-face {
    font-family: 'Gellix';
    src: url('fonts/gellix-semibolditalic_r.woff2') format('woff2');
    font-weight: 600;
    font-style: italic;
    text-rendering: optimizeLegibility;
    font-display: swap; 
}

@font-face {
    font-family: 'Gellix';
    src: url('fonts/gellix-light_r.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    text-rendering: optimizeLegibility;
    font-display: swap; 
}

@font-face {
    font-family: 'Gellix';
    src: url('fonts/gellix-lightitalic_r.woff2') format('woff2');
    font-weight: 300;
    font-style: italic;
    text-rendering: optimizeLegibility;
    font-display: swap; 
}

.light {font-weight: 300;}
.regular {font-weight: 400;}
.semi-bold {font-weight: 600;}
.italic {font-style: italic;}
</style>
  <button id="carnival-button" class="btn btn-primary"><slot name="Text">Button</slot></button>
 `;
class CarnivalButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {

        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.getElementById("carnival-button").onclick = () => this.ConsoleTracker();
    }
    ConsoleTracker() {
        console.log('000 click for web components')
    }

}
customElements.define("carnival-button", CarnivalButton);