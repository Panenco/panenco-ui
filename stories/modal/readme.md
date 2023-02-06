### How it works

- Modals positioned over everything else in the document and remove scroll from the `<body>` so that modal content scrolls instead.
- Only one modal at a time is supported.
- Clicking on the modal "backdrop" will close the modal (customizable).
- Clicking the escape key will close the modal (customizable).

### Accessibility

Be sure to add `aria-labelledby="..."`, referencing the modal title to the Modal component:

```
<Modal ... aria-labelledby="exampleModal" ... >
  <Modal.Title id="exampleModal">...</Modal.Title>
</Modal>
```

Additionally, you may give a description of your modal dialog with `aria-describedby` on the Modal component.
You don't need to add `role="dialog"` since it's already added via JavaScript.

### Autofocus

The Modal component is wrapped with the [FocusLock](https://github.com/theKashey/react-focus-lock) component. Modal prop `autoFocus=true` enables or disables focusing into on Lock activation. If disabled Lock will blur an active focus.

To autofocus once the Trap has been activated you can use:

- prop `data-autofocus` on the element.
- prop `data-autofocus-inside` on the element to focus on something inside.
- `AutoFocusInside` component, as named export of [react-focus-lock](https://github.com/theKashey/react-focus-lock) library.

By default, `data-autofocus-inside` is applied to `Modal.Body`. To disable it pass `autofocusInside=false` as a Body prop.
