// Stand-ins for the two Home Assistant elements the card uses (ha-card and ha-icon),
// so the card can run on a normal web page. Icons come from the Material Design Icons font.
(function () {
  var icons = {};
  var ready = fetch('mdi/icons.json').then(function (r) { return r.json(); }).then(function (m) { icons = m; });

  customElements.define('ha-card', class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' }).innerHTML =
        '<style>:host{display:block;background:var(--card-background-color,#fff);color:var(--primary-text-color)}</style><slot></slot>';
    }
  });

  customElements.define('ha-icon', class extends HTMLElement {
    static get observedAttributes() { return ['icon']; }
    constructor() {
      super();
      this.attachShadow({ mode: 'open' }).innerHTML =
        '<style>:host{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;' +
        'width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);color:var(--icon-primary-color,currentColor)}' +
        'span{font-family:"Material Design Icons";font-size:var(--mdc-icon-size,24px);line-height:1;font-style:normal;' +
        'font-weight:normal;-webkit-font-smoothing:antialiased;display:block}</style><span aria-hidden="true"></span>';
      this._icon = '';
    }
    get icon() { return this._icon; }
    set icon(v) { this._icon = v || ''; this._draw(); }
    attributeChangedCallback(n, o, v) { if (n === 'icon') { this._icon = v || ''; this._draw(); } }
    connectedCallback() { this._draw(); }
    _draw() {
      var self = this, name = (this._icon || '').replace(/^mdi:/, '');
      var show = function () { var cp = icons[name]; self.shadowRoot.querySelector('span').textContent = cp ? String.fromCodePoint(cp) : ''; };
      if (Object.keys(icons).length) show(); else ready.then(show);
    }
  });
})();
