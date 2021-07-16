# Popup

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
      <PrimaryButton onClick={handlePopupShow}>Open modal</PrimaryButton>
      <Popup
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

### Properties

This component inherits the attributes of the **div** element and extends the functionality with next properties.

- title - title of the modal;
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
| description          | string          | -            | -          |
| onHide               | () => void;     | -            | +          |
| show                 | boolean         | -            | +          |
| backdropClosable     | boolean         | true         | -          |
| closeBtn             | boolean         | true         | -          |
| disableEscapeKeyDown | boolean         | false        | -          |
