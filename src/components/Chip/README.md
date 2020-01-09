## Chip

A component to display a compact element representing some information.

```javascript
import { Chip } from "gatsby-interface"

function Component() {
  return <Chip>Read-only</Chip>
}
```

#### Props

`Chip` accepts all the props supported by `<span />` HTML element as well as the following:

| Prop | Type                      | Default value | Description                                                        |
| ---- | ------------------------- | ------------- | ------------------------------------------------------------------ |
| icon | `React.ReactNode`, `null` | `null`        | An icon node to be displayed inside the chip before the chip label |
