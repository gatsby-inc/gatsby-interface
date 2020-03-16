# Theme

## Theme scales

### breakpoints

Breakpoints can be used to add responsive styling to your components.

Since we're using ThemeUI for our themes, we have to define `breakpoints` scale as an array of numbers in ascending order,
each representing a breakpoint in pixels.

```jsx
<div
  css={theme => ({
    [`@media (min-width: ${theme.breakpoints[2]}px)`]: {
      display: "none",
    },
  })}
/>
```

For more semantic breakpoints refer to [mediaBreakpoints](#mediaBreakpoints) scale.
Alternatively, you can just use [mediaQueries](#mediaQueries) scale to avoid writing `@media ...` completely.

### colors

```jsx
<div
  css={theme => ({
    color: theme.colors.green[50],
    backgroundColor: theme.colors.white,
  })}
/>
```

### fonts

```jsx
<div
  css={theme => ({
    fontFamily: theme.fonts.system,
  })}
/>
```

### fontSizes

```jsx
<div
  css={theme => ({
    fontSize: theme.fontSizes[3],
  })}
/>
```

### fontWeights

```jsx
<div
  css={theme => ({
    fontWeight: theme.fontWeights.bold,
  })}
/>
```

### letterSpacings

```jsx
<div
  css={theme => ({
    letterSpacing: theme.letterSpacings.normal,
  })}
/>
```

### lineHeights

```jsx
<div
  css={theme => ({
    lineHeight: theme.lineHeights.dense,
  })}
/>
```

### mediaBreakpoints

`mediaBreakpoints` is a more semantic version of the [breakpoints](#breakpoints) scale.

It is an object that maps a certain "media" (e.g. "desktop" or "tablet") to a breakpoint in pixels.

```jsx
<div
  css={theme => ({
    [`@media (min-width: ${theme.mediaBreakpoints.tablet}px)`]: {
      display: "none",
    },
  })}
/>
```

Alternatively, you can just use [mediaQueries](#mediaQueries) scale to avoid writing `@media ...` completely.

### mediaQueries

It is an object that maps a certain "media" (e.g. "desktop" or "tablet") to a media query (e.g. `@media (min-width: 750px)`) that can be used in your CSS-in-JS.

```jsx
<div
  css={theme => ({
    [theme.mediaQueries.desktop]: {
      display: "none",
    },
  })}
/>
```

For more granular control refer to [breakpoints](#breakpoints) and [mediaBreakpoints](#mediaBreakpoints) scales.

### radii

```jsx
<div
  css={theme => ({
    borderRadius: theme.radii[2],
  })}
/>
```

### shadows

```jsx
<div
  css={theme => ({
    boxShadow: theme.shadows.raised,
  })}
/>
```

### space

```jsx
<div
  css={theme => ({
    margin: `${theme.space[2]} ${theme.space[1]}`,
  })}
/>
```

### transitions

```jsx
<div
  css={theme => ({
    transition: `all ${theme.transitions.speed.slower} ${theme.transitions.curve.fastOutLinearIn}`,
  })}
/>
```

### zIndices

```jsx
<div
  css={theme => ({
    position: "fixed",
    zIndex: theme.zIndices.toasts,
  })}
/>
```
