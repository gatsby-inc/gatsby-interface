# Placeholder

Create and compose placeholder when loading specific page data.

## API

```jsx
<>
  {/* Grid-based placeholder */}
  <Placeholder
    animation={fadeAnimationCss}
    css={{
      gridTemplateColumns: "auto 1fr auto",
      gridTemplateRows: "1fr 1fr 1fr",
      gridTemplateAreas: `
        "left top right"
        "left middle right"
        "left bottom right"`,
    }}
  >
    {/* Left side of the placeholder */}
    <PlaceholderBox width="40px" height="40px" css={{ gridArea: "left" }} />

    {/* Body of the placeholder */}
    <PlaceholderBox width="70%" css={{ gridArea: "top" }} />
    <PlaceholderBox css={{ gridArea: "middle" }} />
    <PlaceholderBox width="30%" css={{ gridArea: "bottom" }} />

    {/* Right side of the placeholder */}
    <PlaceholderBox width="40px" height="40px" css={{ gridArea: "right" }} />
  </Placeholder>
</>
```
