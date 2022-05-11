# Popup

### How it works

- Popups positioned over everything else in the document and remove scroll from the `<body>` so that popup content scrolls instead.
- Only one popup at a time is supported.
- Clicking on the popup "backdrop" will close the popup (customizable).
- Clicking the escape key will close the popup (customizable).

### Usage

```js
import { Popup } from '@panenco/ui';

const YourComponent = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const handlePopupShow = () => {
    setPopupOpen(true);
  }
  const handlePopupHide = () => {
    setPopupOpen(false);
  }

  return (
    <>
      <PrimaryButton onClick={handlePopupShow}>
        Open modal
      </PrimaryButton>
      <Popup
        dialogClassName={s.dialogCustomClass}
        size="md"
        aria-labelledby="examplePopup"
        show={popupOpen}
        onHide={handlePopupHide}
        backdropClosable={true}
        disableEscapeKeyDown={false}
      >
        <Popup.Header closeButton={true}>
          <Popup.Title id="examplePopup">Lorem, ipsum dolor.</Popup.Title>
        </Popup.Header>
        <Popup.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Popup.Body>
        <Popup.Footer>
          <SecondaryButton aria-label="Close" onClick={handlePopupHide}>Cancel</SecondaryButton>
          <PrimaryButton>Submit</PrimaryButton>
        </Popup.Footer>
      </Popup>
    </>
  );
});
```

<!-- STORY -->

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

### Popup properties

This component inherits the attributes of the **div** element and extends the functionality with next properties.

- onHide - a callback fired when the header closeButton or backdrop is clicked;
- show - when true the popup will show itself;
- backdropClosable - trigger an "onHide" when backdrop clicked;
- disableEscapeKeyDown - disable hiding modal on Escape Key click;
- size - size of a popup;
- dialogClassName - custom css to the popup dialog div;
- autoFocus - autofocus once the Trap has been activated;
- ref - ref;

| propName             | propType                    | defaultValue | isRequired |
| -------------------- | --------------------------- | ------------ | ---------- |
| children             | React.ReactNode             | -            | +          |
| ref                  | React.RefObject             | -            | -          |
| onHide               | () => void;                 | -            | -          |
| show                 | boolean                     | true         | -          |
| backdropClosable     | boolean                     | true         | -          |
| disableEscapeKeyDown | boolean                     | false        | -          |
| size                 | string ('sm' / 'md' / 'lg') | 'md'         | -          |
| dialogClassName      | string                      | -            | -          |
| autoFocus            | boolean                     | true         | -          |

### PopupHeader properties

This component inherits the attributes of the **div** element and extends the functionality with next properties.

- closeBtn - specify whether the component should contain a close button;
- ref - ref;

| propName | propType        | defaultValue | isRequired |
| -------- | --------------- | ------------ | ---------- |
| children | React.ReactNode | -            | -          |
| ref      | React.RefObject | -            | -          |
| closeBtn | boolean         | true         | -          |

### PopupTitle properties

This component inherits the attributes of the **div** element and extends the functionality with next properties.

- ref - ref;

| propName | propType        | defaultValue | isRequired |
| -------- | --------------- | ------------ | ---------- |
| children | React.ReactNode | -            | +          |
| ref      | React.RefObject | -            | -          |

### PopupBody properties

This component inherits the attributes of the **div** element and extends the functionality with next properties.

- autofocusInside - autofocus on something inside once the Trap has been activated (works only if autoFocus prop in Popup components is **true**);

| propName        | propType        | defaultValue | isRequired |
| --------------- | --------------- | ------------ | ---------- |
| children        | React.ReactNode | -            | +          |
| autofocusInside | boolean         | true         | -          |

### PopupFooter properties

This component inherits the attributes of the **div** element and extends the functionality with next properties.

- ref - ref;

| propName | propType        | defaultValue | isRequired |
| -------- | --------------- | ------------ | ---------- |
| children | React.ReactNode | -            | +          |
| ref      | React.RefObject | -            | -          |
