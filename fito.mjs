export const ce = new Proxy({}, {
  get: (...[target, key]) => (observedAttributes = []) => (raw, ...values) => {
    const name = key.split(/(?=[A-Z])/).join('-').toLowerCase();
    const innerHTML = String.raw({ raw }, ...values);
    class Ce extends HTMLElement {
      constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'closed' });
        this.shadow.innerHTML = innerHTML;
        target.shadow = this.shadow
      }
      static observedAttributes = observedAttributes
      attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
          this.shadow.innerHTML = this.shadow.innerHTML.replace(`{{${name}}}`, newValue);
        }
      }
    }
    customElements.define(name, Ce);
    return new Proxy({}, {
      set: (...[, key, textContent]) => {
        const element = target.shadow.querySelector(`slot[name=${key}]`);
        element.textContent = textContent;
        customElements.upgrade(target.shadow)
      }
    })
  }
});
