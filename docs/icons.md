# Icons in gatsby-interface

gatsby-interface mostly relies on two sets of icons:
* Material Design icons (imported from [`react-icons`](https://github.com/react-icons/react-icons))
* Gatsby icons (can be found in [/src/components/icons]())

This doc mostly concerns the latter kind of icons.

## Icon Sizes

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
