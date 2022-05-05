# Avatar

### Usage

```js
import { Avatar, useTheme } from '@panenco/ui';

const YourComponent = () => {
  const theme = useTheme();
  return (
    <Avatar
      src="https://images/img.png"
      alt="Alt text"
      size={54}
      tooltip
      tooltipProps={{ content: 'tooltip content', position: 'top' }}
    >
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
- className - avatar classname, allow to override styles;
- children - content of the Avatar
- tooltip - show tooltip;
- tooltipProps - props for tooltip component;
- imgProps - props for Avatar image

If there is an error loading the avatar image, the component 
falls back to an alternative in the following order:

- the provided children
- the first letter of the alt text
- a generic avatar icon

| propName          | propType                        | defaultValue                   | isRequired |
| ----------------- | ------------------------------- | ------------------------------ | ---------- |
| src               | string                          | -                              | -          |
| alt               | string                          |                                | -          |
| size              | number                          | 54                             | -          |
| className         | string                          | -                              | -          |
| children          | ReactNode | string              | -                              | -          |
| tooltip           | boolean                         | -                              | -          |
| tooltipProps      | TooltipProps                    | -                              | -          |
| imgProps          | ImgHTMLAttributes               | -                              | -          |
