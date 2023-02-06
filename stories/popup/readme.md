### How it works

- Popups positioned over everything else in the document and remove scroll from the `<body>` so that popup content scrolls instead.
- Only one popup at a time is supported.
- Clicking on the popup "backdrop" will close the popup (customizable).
- Clicking the escape key will close the popup (customizable).

### Accessibility

Be sure to add `aria-labelledby="..."`, referencing the popup title to the Popup component:

```
<Popup ... aria-labelledby="examplePopup" ... >
  <Popup.Title id="examplePopup">...</Popup.Title>
</Popup>
```

Additionally, you may give a description of your popup dialog with `aria-describedby` on the Popup component.
You don't need to add `role="dialog"` since it's already added via JavaScript.

### Autofocus

The Popup component is wrapped with the [FocusLock](https://github.com/theKashey/react-focus-lock) component. Popup prop `autoFocus=true` enables or disables focusing into on Lock activation. If disabled Lock will blur an active focus.

To autofocus once the Trap has been activated you can use:

- prop `data-autofocus` on the element.
- prop `data-autofocus-inside` on the element to focus on something inside.
- `AutoFocusInside` component, as named export of [react-focus-lock](https://github.com/theKashey/react-focus-lock) library.

By default, `data-autofocus-inside` is applied to `Popup.Body`. To disable it pass `autofocusInside=false` as a Body prop.
