# babel-plugin-gatsby-interface

A simple transformer to cherry-pick gatsby-interface modules so you don’t have to.

It optimizes treeshaking on large applications as webpack 4 does this on a app level and not page level.

## Install

```shell
$ npm i --save-dev gatsby-interface
```

## Example

Transforms

```js
import * as React from "react"
import { LinkButton, Avatar, space } from "gatsby-interface"
import { Heading } from "gatsby-interface"

export default function MyPage() {
  return (
    <Heading>
      <Avatar />
      <LinkButton />
    </Heading>
  )
}
```

roughly to

```js
import { Heading as _Heading } from "gatsby-interface/dist/components/Heading/Heading.esm.js"
import { Avatar as _Avatar } from "gatsby-interface/dist/components/Avatar/Avatar.esm.js"
import { LinkButton as _LinkButton } from "gatsby-interface/dist/components/LinkButton/LinkButton.esm.js"
import * as React from "react"
import { space } from "gatsby-interface"
export default function MyPage() {
  return (
    <_Heading>
      <_Avatar />
      <_LinkButton />
    </_Heading>
  )
}
```

## Usage

###### .babelrc

```json
{
  "plugins": ["gatsby-interface/babel-plugin-gatsby-interface"]
}
```
