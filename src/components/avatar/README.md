# Avatar

### Usage

```js
import { Avatar, useTheme } from '@panenco/ui';

const YourComponent = () => {
  const theme = useTheme();
  return (
    <Avatar
      avatar="https://images/img.png"
      avatarAlt="Alt text"
      firstName="First Name"
      lastName="Last Name"
      email="example@support.com"
      size={54}
      tooltip
      tooltipProps={{ position: 'top' }}
    />
  );
};
```

<!-- STORY -->

### Properties

- avatar - link to image;
- avatarAlt - alt text for avatar;
- size - avatar size;
- className - avatar classname;
- firstName - avatar first name;
- lastName - avatar last name;
- email - avatar email;
- tooltip - show tooltip;
- tooltipProps - props for tooltip component;

| propName          | propType                        | defaultValue                   | isRequired |
| ----------------- | ------------------------------- | ------------------------------ | ---------- |
| avatar            | string                          | -                              | -          |
| avatarAlt         | string                          | 'avatar alt'                   | -          |
| size              | string or number                | 54                             | -          |
| className         | string                          | -                              | -          |
| firstName         | string                          | -                              | -          |
| lastName          | string                          | -                              | -          |
| email             | string                          | -                              | -          |
| tooltip           | boolean                         | -                              | -          |
| tooltipProps      | TooltipProps                    | -                              | -          |
