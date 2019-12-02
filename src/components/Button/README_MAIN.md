## Button

Built on the basis of [`BaseButton`](??path=/story/basebutton--tags-components)

```javascript
import { Button } from "gatsby-interface"

function Component() {
  return <Button>Label</Button>
}
```

### Props

`BaseButton` accepts all props accepted by `BaseButton` component (including HTML's `<button>` attributes) as well as [`ButtonStyleProps`](#buttonstyleprops):

#### ButtonStyleProps

| Prop      | Type                              | Default value | Description                                                                            |
| --------- | --------------------------------- | ------------- | -------------------------------------------------------------------------------------- |
| variant   | [`ButtonVariant`](#buttonvariant) | `PRIMARY`     | Variants correspond to a button's role &mdash; primary, secondary or outline ("ghost") |
| size      | [`ButtonSize`](#buttonsize)       | `L`           | Button size                                                                            |
| tone      | [`ButtonTone`](#buttontone)       | `BRAND`       | Button tone                                                                            |
| leftIcon  | `React.ReactNode`                 |               | An icon to be displayed before button's children                                       |
| rightIcon | `React.ReactNode`                 |               | An icon to be displayed after button's children                                        |

##### ButtonVariant

```typescript
type ButtonVariant = "PRIMARY" | "SECONDARY" | "GHOST"
```

##### ButtonSize

```typescript
type ButtonSize = "XL" | "L" | "M" | "S"
```

##### ButtonTone

```typescript
type ButtonTone = "BRAND" | "SUCCESS" | "DANGER" | "NEUTRAL"
```
