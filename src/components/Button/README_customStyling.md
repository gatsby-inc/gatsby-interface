## Override / extend Button's styles

Use `emotion` `css` prop.

```javascript
import { Button } from "gatsby-interface"

function Component() => (
  <div>
    <Button
      css={{
        color: colors.purple[60],
        background: colors.yellow[60],
        borderColor: colors.yellow[60],

        "&:hover:not([disabled])": {
          color: colors.white,
        },
      }}
    >
      Button with custom style
    </Button>
  </div>
)
```
