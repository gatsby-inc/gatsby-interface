## Notification

Notifications, or flash messages, inform users of successful or pending actions, or contain other important information. Use them sparingly, and ideally don't show more than one at a time.

### Do's and Don'ts

#### Do…

- Do use notifications sparingly.
- Do keep the UI text short. If needed, include a link to let the user take an action or read the message in more details.

#### Don't…

- Do not make notifications dismissible if their message remains relevant to the user while they are logged in.

### Usage

```jsx
<Notification
  content={`Notification variant 'SECONDARY', 'SUCCESS' tone`}
  tone="SUCCESS"
  variant="SECONDARY"
/>
```

`SUCCESS`, `DANGER`, and `WARNING` tones add a corresponding icon.

#### Dismissable

```jsx
import React from "react"

export const Foo = () => {
  const [isOpened, setIsOpened] = React.useState

  return (
    <Notification
      content={`Notification with custom icon`}
      isOpened={isOpened}
      showDismissButton
      onDismissButtonClick={() => setIsOpened(false)}
      dismissButtonLabel="Custom label"
    />
  )
}
```

#### With custom icon

```jsx
import { MdSignalWifi1BarLock } from "react-icons/md"

export const Bar = () => (
  <Notification
    content={`Notification with custom icon`}
    Icon={MdSignalWifi1BarLock}
  />
)
```
