const ce = new Proxy({}, {
  get: (...[target, key]) => (observedAttributes = []) => (raw, ...values) => {
    const name = key.split(/(?=[A-Z])/).join('-').toLowerCase();
    class Ce extends HTMLElement {
      constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'closed' });
        shadow.innerHTML = String.raw({ raw }, ...values);
        globalThis[key] = (key, value) => {
          this.setAttribute(key, value);
        }
      }
      static observedAttributes = observedAttributes
      attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
          const element = this.querySelector(`[${name}]`);
          element.setAttribute(name, newValue);
        }
      }
    }
    customElements.define(name, Ce);
  }
});
