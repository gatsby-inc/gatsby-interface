## stack

`Cluster` is a layout primitive which only role is to organize its children as inline organized elements with a defined gaps (horizontal and vertical) between them.
However we do not provide a `Cluster` component. We provide a `getClusterStyles` layout helper which can be used to apply `cluster` like styles to any tag/component and its children.

#### getClusterStyles()

- as a param accepts an object with optional `gap` , `verticalAlign`, `align` and `theme` properties
  - `gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | string` (default value 0)
  - `verticalGap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | string` (default value as gap)
  - `align?: 'center' | 'left' | 'right'` (default value `left`)
  - `theme?`: `Theme`
- returns an object with `clusterCss` and `clusterItemCss` properties

If we set the `gap` value as a type `number` between 0 and 15, `gap` will be based on `space` design token values.

```javascript
import { getClusterStyles } from 'gatsby-interface'

const { clusterCss, clusterItemCss } = getStackStyles({
    gap: 2,  // gap: 2` is translated into `gap = space[2]
    verticalGap: 1,  // verticalGap: 1` is translated into `verticalGap = space[2]
    align: `center`
  })

<div css={clusterCss}>
  <div css={clusterItemCss}>one</div>
  <div css={clusterItemCss}>two</div>
  <div css={clusterItemCss}>three</div>
</div>
```

```javascript
import { getStackStyles } from 'gatsby-interface'

const { stackCss, stackItemCss } = getStackStyles({
    gap: `20px`, // gap set as a string type value must always contain unit symbol postfix
    verticalGap: `10px`, // verticalGap set as a string type value must always contain unit symbol postfix
    lign: `center`
  })

<div css={clusterCss}>
  <div css={clusterItemCss}>one</div>
  <div css={clusterItemCss}>two</div>
  <div css={clusterItemCss}>three</div>
</div>
```

### Important! Negative margins

To nullify unwanted margins of the marginal cluster items `clusterCss` applies `negative` margins to the tag. To nullify that wrap `cluster` with another `tag`.

```javascript
<div>
  <div css={clusterCss} {/* this tag will have negative margins (gap/2) */}>
    <div css={clusterItemCss}>one</div>
    <div css={clusterItemCss}>two</div>
    <div css={clusterItemCss}>three</div>
  </div>
</div>
```
