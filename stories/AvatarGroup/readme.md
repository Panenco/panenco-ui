## Usage

```js
import { AvatarGroup, AvatarProps } from '@panenco/ui';

const avatars= [
  {
    className: 'className',
    src: 'https://images/img1.png',
    alt: 'alt1',
    children: 'P1',
    size: 45,
  },
  {
    className: 'className',
    src: 'https://images/img2.png',
    alt: 'alt2',
    children: 'P2',
    size: 45,
  },
]

const render = () => {
  return (
    <AvatarGroup 
      avatars={avatars}
      max={3}
      avatarProps={{ 
        className: 'avatarClassName', 
        size: 60,
      }} 
    />
  );
};
```
