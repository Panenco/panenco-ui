# Avatar

### Usage

```js
import { AvatarGroup, AvatarProps } from '@panenco/ui';

const avatars= [
  {
    className: 'className',
    avatar: 'https://images/img.png',
    avatarAlt: 'alt',
    firstName: 'Panenco',
    lastName: 'UI',
    email: 'hello@panenco.com',
    size: 45,
    tooltip: true,
    tooltipProps: { arrow: true, position: 'bottom-end' }
  },
  {
    email: 'hello@panenco.com',
    avatar: 'https://images/img.png',
    tooltip: true,
    tooltipProps: {arrow: true, position: 'left'},
  },
  {
    firstName: 'Panenco',
    lastName: 'UI',
    email: 'email',
    tooltip: true,
  },
  {
    lastName: 'Panenco',
    email: 'hello@panenco.com',
    tooltip: true,
    tooltipProps: { arrow: true, position: 'top-start' },
  },
  {
    lastName: 'name',
    email: 'email',
  },
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
| max               | number                          | avatars array length           | -          |
| avatars           | AvatarProps[]                   | -                              | +          |
| avatarProps       | AvatarProps                     | -                              | -          |
| className         | string                          | -                              | -          |
