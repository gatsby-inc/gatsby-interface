# BaseButton

A skeleton component on which styled [Button](?path=/story/button--variants) is built.

This is just a wrapper for HTML `<button />` element.

```javascript
import { BaseButton } from "gatsby-interface"

function Component() {
  return <BaseButton>Label</BaseButton>
}
```

## Props

`BaseButton` accepts all props accepted by HTML's `<button>` element as well as these:

| Prop         | Type                  | Default value | Description                                           |
| ------------ | --------------------- | ------------- | ----------------------------------------------------- |
| loading      | `boolean`             | `false`       | Whether the button is in a loading state              |
| loadingLabel | `React.ReactNode`     |               | Button label to be displayed when `loading` is `true` |
| LoadingIcon  | `React.ComponentType` |               | An icon to be displayed when `loading` is `true`      |
