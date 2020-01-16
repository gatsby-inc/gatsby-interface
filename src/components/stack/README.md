## stack

`Stack` is a layout primitive which only role is to organize its children as verticaly pilled up elements with a defined `gap` between them.
However we do not provide a `Stack` component. We provide a `getStackStyles` layout helper which can be used to apply `stack` like styles to any tag/component and its children.

#### getStackStyles()

- as a param accepts an object with optional `gap`, `align` and `theme` properties
  - `gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | string` (default value 0)
  - `responsiveGap?:` an object with `breakpoint` token value as `key`s and `gap` as `value`s
  - `align?: 'stretch' | 'center' | 'left' | 'right'` (default value `left`)
  - `direction?: 'column' | 'row'` (default value `column`)
  - `theme?: Theme`
- returns an object with `stackCss` and `stackItemCss` properties

If we set the `gap` value as a type `number` between 0 and 15, `gap` will be based on `space` design token values.

```javascript
import { getStackStyles } from 'gatsby-interface'

const { stackCss, stackItemCss } = getStackStyles({
    gap: 2,  // gap: 2` is translated into `gap = space[2]
    align: `center`
  })

<div css={stackCss}>
  <div css={stackItemCss}>one</div>
  <div css={stackItemCss}>two</div>
  <div css={stackItemCss}>three</div>
</div>
```

```javascript
import { getStackStyles } from 'gatsby-interface'

const { stackCss, stackItemCss } = getStackStyles({
    gap: `20px`, // gap set as a string type value must always contain unit symbol postfix
    align: `center`
  })

<div css={stackCss}>
  <div css={stackItemCss}>one</div>
  <div css={stackItemCss}>two</div>
  <div css={stackItemCss}>three</div>
</div>
```

```javascript
import { getStackStyles } from 'gatsby-interface'

const { stackCss, stackItemCss } = getStackStyles({
    gap: 2,
    responsiveGap: { tablet: 3, desktop: 4 }
    align: `center`
  })

<div css={stackCss}>
  <div css={stackItemCss}>one</div>
  <div css={stackItemCss}>two</div>
  <div css={stackItemCss}>three</div>
</div>
```

```javascript
import { getStackStyles } from 'gatsby-interface'

const { stackCss, stackItemCss } = getStackStyles({
    gap: 2,
    direction: `row`
  })

<div css={stackCss}>
  <div css={stackItemCss}>one</div>
  <div css={stackItemCss}>two</div>
  <div css={stackItemCss}>three</div>
</div>
```
