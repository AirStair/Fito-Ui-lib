# Fito-Ui-lib

![Fito-Ui-lib](fito.png "Fito-Ui-lib")

```js
const ceFito = ce.ceFito`
  <div class="ceFito">
    <slot name="ceFito"></slot>
  </div>
  <style>
    .ceFito {
      color: green;
    }
  </style>
`;
setTimeout(() => {
  ceFito('slot[name=ceFito]', 'slot content')
}, 5000)
```
```html
<ce-fito>
  <span slot="fito"></span>
</ce-fito>
```
