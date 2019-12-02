## Manual styling

The preferred way to style an HTML tag or third party component as a `Button` is to import `getButtonStyles` helper.

```javascript
import { Button, getButtonStyles } from "gatsby-interface"
import { MdRefresh } from "react-icons/md"

function Component() {
  return (
    <div>
      <button
        {...getButtonStyles({
          children: "Directly applied styles",
          loading: false,
          size: "L",
          variant: "PRIMARY",
          tone: "NEUTRAL",
          leftIcon: <MdRefresh />,
          rightIcon: null,
        })}
      />
    </div>
  )
}
```

Or you could directly import and apply `styles` object:

```javascript
import { Button } from "gatsby-interface"
import { styles } from "../../../utils/presets"

function Component(props) {
  return (
    <div>
      <button
        css={{
          ...styles.button.base(props), // supports "loading", "leftIcon" and "rightIcon" props
          ...styles.button.sizes["L"],
          ...styles.button.variants["PRIMARY"](styles.tones["NEUTRAL"]),
        }}
      >
        Directly applied styles
      </button>
    </div>
  )
}
```
