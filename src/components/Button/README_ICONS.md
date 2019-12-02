## Button with icon

#### A standard way to add an icon

```jsx
import { Button } from "gatsby-interface"
import { MdArrowForward } from "react-icons/md"

function Component() {
  return (
    <div>
      <Button rightIcon={<MdArrowForward />}>On the right</Button>

      <Button leftIcon={<MdArrowForward />}>On the left</Button>
    </div>
  )
}
```
