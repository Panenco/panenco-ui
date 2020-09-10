# Dropzone

## Usage

```js
...
import { Dropzone } from '@panenco/ui';

const render = () => {
  return (
    <Dropzone
      loading={false}
      style={{ fontWeight: '900' }}
      textContent="Some text inside dropzone"
      textContentOnDrag="Text when drag on dropzone"
    />
);
}
...
```

---

### Properties

This component inherits the attributes of the **div** element + base on useDropzone hook from [**react-dropzone**](https://react-dropzone.js.org/) library.

Component extends the functionality with next properties.

- loading - set state when downloading a file;
- iconClassName - override icon styles;
- loadingText - show this text when downloading a file;
- textContent - placeholder for dropzone;
- textContentOnDrag - show this text when dragging on dropzone;
- error - set state if has error;
- icon - icon which will be rendered;
- loader - you can set you own loader if you want;
  inputProps - it's props which will be added to input component;
- wrapperProps - it's props which will be added to wrapper component;
- ref - ref;

| propName          | propType                                | defaultValue                              | isRequired |
| ----------------- | --------------------------------------- | ----------------------------------------- | ---------- |
| loading           | boolean                                 | -                                         | -          |
| iconClassName     | string                                  | -                                         | -          |
| loadingText       | string                                  | Uploading                                 | -          |
| textContent       | string                                  | Drop your file here or click to this zone | -          |
| textContentOnDrag | string                                  | Drop your file here                       | -          |
| error             | string                                  | -                                         | -          |
| icon              | HTMLObjectElement                       | -                                         | -          |
| loader            | JSX.Element                             | -                                         | -          |
| ref               | React.RefObject                         | -                                         | -          |
| wrapperProps      | React.HTMLAttributes (HTMLDivElement)   | -                                         | -          |
| inputProps        | React.HTMLAttributes (HTMLInputElement) | -                                         | -          |
