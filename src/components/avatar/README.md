# Avatar

### Usage

```js
import { Avatar } from '@panenco/ui';
import { useTheme } from 'styled-components';

const YourComponent = () => {
  const theme = useTheme();
  return (
    <Avatar src='https://images/img.png' alt='Alt text' size={54}>
      PU
    </Avatar>
  );
};
```

<!-- STORY -->

### Properties

- src - link to image;
- alt - alt text for avatar;
- size - avatar size;
- className - avatar class name, allow to override styles;
- children - content of the Avatar
- imgProps - props for Avatar image

If there is an error loading the avatar image, the component
falls back to an alternative in the following order:

- the provided children
- the first letter of the alt text
- a generic avatar icon

| propName  | propType          | defaultValue | isRequired |
| --------- | ----------------- | ------------ | ---------- | --- |
| src       | string            | -            | -          |
| alt       | string            |              | -          |
| size      | number            | 54           | -          |
| className | string            | -            | -          |
| children  | ReactNode         | string       | -          | -   |
| imgProps  | ImgHTMLAttributes | -            | -          |
