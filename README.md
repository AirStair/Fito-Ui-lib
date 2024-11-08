# Fito-Ui-lib

![Fito-Ui-lib](fito.png "Fito-Ui-lib")

```js
        const ceShadow = ce.ceShadow`
            <div class="shadow">
                <slot></slot>
                <slot name="a"></slot>
            </div>
            <style>
                .shadow {
                    box-shadow: 0 8px 12px 0 #0000000F;
                    border-radius: 12px;
                }
            </style>
        `;
        setTimeout(() => {
            ceShadow('slot[name=a]', 'slot content');
        }, 5000)
```
