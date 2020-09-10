# Notification

### Usage

```js
...
import { toast, NotificationContainer, PrimaryButton } from '@panenco/ui';

const render = () => {
  return (
    <PrimaryButton
      onClick={() =>
        toast.success('We will verify your application and get back to you if we have any questions.')
      }
    >
  );
}
...
```

<!-- STORY -->

### Properties

This component base on [**react-toastify**](https://fkhadra.github.io/react-toastify/introduction/), our functionality the same but with customization for our design and supports themes.

First of all if you want to use notifications in your app should wrap the root component in **NotificationContainer** and then use toasts.
Toasts support different states like error, warning, success etc.. (follow the link to see more details).
