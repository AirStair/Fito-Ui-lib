# Fito-Ui-lib

![Fito-Ui-lib](fito.png "Fito-Ui-lib")

```js
const ceFito = ce.ceFito(['title'])`
  <h1 class="title">{{title}}</h1>
  <div>
    <slot name="fito"></slot>
  </div>
  <style>
    .title {
      color: green;
    }
  </style>
`;
ceFito.ceFito = 'slot content'
```
```html
<ce-fito title="Fito">
  <span slot="fito">fito</span>
</ce-fito>
```
