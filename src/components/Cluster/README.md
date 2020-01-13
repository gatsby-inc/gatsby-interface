## Cluster

`Cluster` is one of the layout primitives. It's only role is to organize its children as inline organized elements with a defined `gap` between them.

#### Cluster props

- `gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | string` (default value 0)
- `verticalGap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | string` (default value the value of gap)
- `align?: 'center' | 'left' | 'right'` (default value `left`)
- `as?: 'div' | 'span' | 'section'` (default value `div`)

If we set the `gap` or `verticalGap` value as type `number` between 0 and 15, `gap` will be based on `space` design token values.

```javascript
<Cluster gap={2}>
  {/* gap={2}` will translated into `gap = space[2] */}
  <div>one</div>
  <div>two</div>
  <div>three</div>
</Cluster>

<Cluster gap={`20px`}>
  {/* a string type value must always contain unit symbol postfix*/}
  <div>one</div>
  <div>two</div>
  <div>three</div>
</Cluster>
```

#### getClusterStyle

`getClusterStyle` is a helper which let us apply `Cluster` styling to any other `tag` without using the `Stack` component.

```javascript
<div css={[getClusterStyle({ gap: 2, verticalGap: 3, align: `centre` })]}>
  <div>one</div>
  <div>two</div>
  <div>three</div>
</div>
```
