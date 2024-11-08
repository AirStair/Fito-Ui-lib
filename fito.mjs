export const ce = new Proxy({}, {
  get: (...[target, key]) => (raw, ...values) => {
    const name = key.split(/(?=[A-Z])/).join('-').toLowerCase();
    class Ce extends HTMLElement {
      constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'closed' });
        shadow.innerHTML = String.raw({ raw }, ...values);
        target.shadow = shadow;
      }
    }
    customElements.define(name, Ce);
    return (selector, textContent) => {
      const element = target.shadow.querySelector(selector);
      element.textContent = textContent;
      customElements.upgrade(target.shadow);
    }
  }
});
