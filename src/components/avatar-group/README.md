# Avatar

### Usage

```js
import { AvatarGroup, AvatarProps } from '@panenco/ui';

const avatars= [
  {
    className: 'className',
    src: 'https://images/img.png',
    alt: 'alt',
    children: 'PU',
    size: 45,
    tooltip: true,
    tooltipProps: { content: 'tooltip content', position: 'top' }
  }
]

const YourComponent = () => {
  return (
    <AvatarGroup 
      avatars={avatars}
      max={3}
      avatarProps={{ 
        className: 'avatarClassName', 
        size: 60, 
        tooltipProps: { 
          position: 'bottom' 
        } 
      }} 
    />
  );
};

```

<!-- STORY -->
AvatarGroup component allows to show a list of avatars.

### Properties
- max -  the maximum number of avatars, if you want to show all the avatars, just don`t pass it;
- avatars - avatar list, should be an array of type AvatarProps;
- avatarProps - these are general rules for each component of the avatar, has a lower priority than the rules of avatars;
- className - classname of the list;

**avatars and avatarProps** can have this properties:
  - src - link to image;
  - alt - alt text for avatar;
  - size - avatar size;
  - className - avatar classname;
  - children - content of the Avatar;
  - tooltip - show tooltip;
  - tooltipProps - props for tooltip component;
  - imgProps - props for Avatar image;

| propName          | propType                        | defaultValue                   | isRequired |
| ----------------- | ------------------------------- | ------------------------------ | ---------- |
| max               | number                          | avatars array length           | -          |
| avatars           | AvatarProps[]                   | -                              | +          |
| avatarProps       | AvatarProps                     | -                              | -          |
| className         | string                          | -                              | -          |
