# Popup

### How it works

- Popups positioned over everything else in the document and remove scroll from the so that popup content scrolls instead.
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
        titleId="examplePopup"
        aria-labelledby="examplePopup"
        show={popupOpen}
        onHide={handlePopupHide}
        title="Title"
        description="Description text"
      >
        <p>Popup body</p>
      </Popup>
    </>
  );
});
```

<!-- STORY -->

### Accessibility

Be sure to add `aria-labelledby="..."`, referencing the popup title to the Popup component:

```
<Popup ... titleId="examplePopup" aria-labelledby="examplePopup" ... >
...
</Popup>
```

Additionally, you may give a description of your popup dialog with `aria-describedby` on the Popup component.
You don't need to add `role="dialog"` since it's already added via JavaScript.

### Properties

This component inherits the attributes of the **div** element and extends the functionality with next properties.

- title - title of the modal;
- titleId - id attr of the popup title;
- description - description of the modal;
- onHide - a callback fired when the header closeButton or backdrop is clicked;
- show - when true The popup will show itself;
- backdropClosable - trigger an "onHide" when backdrop clicked;
- closeBtn - specify whether the Component should contain a close button;
- disableEscapeKeyDown - disable hiding modal on Escape Key click;
- ref - ref;

| propName             | propType        | defaultValue | isRequired |
| -------------------- | --------------- | ------------ | ---------- |
| children             | React.ReactNode | -            | -          |
| ref                  | React.RefObject | -            | -          |
| title                | string          | -            | -          |
| titleId              | string          | -            | -          |
| description          | string          | -            | -          |
| onHide               | () => void;     | -            | +          |
| show                 | boolean         | -            | +          |
| backdropClosable     | boolean         | true         | -          |
| closeBtn             | boolean         | true         | -          |
| disableEscapeKeyDown | boolean         | false        | -          |
