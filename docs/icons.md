# Icons in gatsby-interface

gatsby-interface mostly relies on two sets of icons:
* Material Design icons (imported from [`react-icons`](https://github.com/react-icons/react-icons))
* Gatsby icons (can be found in [/src/components/icons]())

This doc mostly concerns the latter kind of icons, specific to Gatsby ecosystem.

## Icon Sizes

Gatsby icons support a set of preset icons in addition to inheriting based on current font size:

```typescript
export type IconSize =
  | "inherit" // 1em
  | "xxsmall" // 16px
  | "xsmall" // 20px
  | "small" // 24px, default
  | "medium" // 32px
  | "large" // 40px
```

Here's an example for setting an icon size:
```jsx
import { InProgressIcon } from "gatsby-interface"

export function Example() {
  return <InProgressIcon size="large" />
}
```

## Adding a new Gatsby icon

### SVG requirements

To add a new icon to the set of gatsby-interface icons, you will need its source SVG. 

**IMPORTANT**: the icon source SVG has to be 24x24, otherwise it will not be displayed properly. 
If the SVG has a different view box, either resize it yourself or ask someone from the design team to do it.

### Scaffolding the icon

Once you have the SVG for your icon, pick a name for it (e.g. `NewCheck`) run the following in the root folder of gatsby-interface:
```bash
yarn scaffold:icon NewCheck
```
This will create a stub for the icon component in `/src/components/icons/NewCheckIcon.tsx` 
and add an export statement in `/src/components/icons/index.ts` to make it available from the library index file. 

Now, if you open `/src/components/icons/NewCheckIcon.tsx`, you will see something like this:
```typescript jsx
import React from 'react'
import IconSkeleton from './IconSkeleton'
import { IconProps } from "./types"

export default function NewCheckIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="NewCheckIcon">
      {/* insert inner SVG code here */}
    </IconSkeleton>
  )
}
```
A couple of things to note here:
* `IconProps` is basically the same thing as props supported by `<svg>`, with one addition — it also supports a `size` prop (see [Icon Sizes](#icon-sizes))
* `IconSkeleton` is just a wrapper for an `<svg>` element, setting some reasonable default props and scaling the icon based on the `size` prop
* `iconName` is a utility prop, used to set `data-testid` on the `<svg>` element 

### Icon code

Once the stub component is created, copy **the content** of the icon's `<svg>` element and paste it in place of 
```
{/* insert inner SVG code here */}
```

All that is left is some cleaning up:
* Replace all snake-case attributes in the copied code with camelCase (e.g. `stroke-width` should become `strokeWidth`)
* If the icon is monochrome, you can make most (if not all) instances of `stroke` (or `fill`, depending on the icon) to use `currentColor`:
  ```html
  <circle cx="12" cy="12" r="4" fill="currentColor" />
  ```
  This will allow the icon to inherit its color from the current text color.
* If your icon is using `fill` instead of `stroke` for the color, you will need to pass `applyColorToStroke={false}` to `<IconSkeleton>` 
  in order for text color inheritance to work
* If your icon's code relies on an `id` (e.g. a gradient, filter or a mask), you will need to add support for making this `id` unique. 
  The easiest way is to use the `id` prop and a BEM-like notation:
  ```typescript jsx
  export default function EllipsisIcon(props: IconProps) {
    const filterId = `EllipsisIcon__filter--${props.id || "noid"}`
    
    return (
      <IconSkeleton {...props} iconName="EllipsisIcon" applyColorToStroke={false}>
        <filter id={filterId} x="0" y="0" width="100%" height="100%">
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.1"></feFuncA>
          </feComponentTransfer>
        </filter>
        <circle cx="12" cy="12" r="10" style={{ filter: `url(#${filterId})` }} />
        <circle cx="6.5" cy="12" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="17.5" cy="12" r="2" />
      </IconSkeleton>
    )
  }
  ```
  
  ### Checking our your new icon in Storybook
  
  As soon as the icon is scaffolded, you can preview it in Storybook by running
  ```bash
  yarn storybook
  ```
  and scrolling to "Icons" section in Storybook sidebar. There you can either view all available icons ("All icons") or go to a specific icon ("Signle icons"). 
  Each single icon story should showcase different icon sizes and colors. 
