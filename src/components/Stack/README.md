## Stack

`Stack` is one of the layout primitives. It's only role is to organize its children as verticaly organized elements with a defined `gap` between them.

#### Stack props

- `gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | string` (default value 0)
- `align?: 'justify' | 'center' | 'left' | 'right'` (default value `left`)
- `as?: 'div' | 'span' | 'section'` (default value `div`)

If we set the `gap` value as type `number` between 0 and 15, `gap` will be based on `space` design token values.

```javascript
<Stack gap={2}>
  {/* gap={2}` will translated into `gap = space[2] */}
  <div>one</div>
  <div>two</div>
  <div>three</div>
</Stack>

<Stack gap={`20px`}>
  {/* a string type value must always contain unit symbol postfix*/}
  <div>one</div>
  <div>two</div>
  <div>three</div>
</Stack>
```

#### getStackStyle

`getStackStyle` is a helper which let us apply `Stack` styling to any other `tag` without using the `Stack` component.

```javascript
<div css={[getStackStyle({ gap: 2, align: `centre` })]}>
  <div>one</div>
  <div>two</div>
  <div>three</div>
</div>
```
