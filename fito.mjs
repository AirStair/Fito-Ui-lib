const ce = new Proxy({}, {
  get: (...[target, key]) => (observedAttributes = []) => (raw, ...values) => {
    const name = key.split(/(?=[A-Z])/).join('-').toLowerCase();
    const template = String.raw({ raw }, ...values);
    class Ce extends HTMLElement {
      constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'closed' });
        this.shadow.innerHTML = template;
        globalThis[key] = this.shadow;
        target.shadow = this.shadow;
      }
      static observedAttributes = observedAttributes
      attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
          this.shadow.innerHTML = template.replaceAll(`{{${name}}}`, newValue);
        }
      }
    }
    customElements.define(name, Ce);
    return () => {
      customElements.upgrade(target.shadow)
    }
  }
});
