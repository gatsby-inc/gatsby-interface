## Avatar and AvatarsGroup

Components to display a single avatar or a group of avatars.

### Avatar

This component can display a single avatar or a fallback if the image is not available

```javascript
import { Avatar } from "gatsby-interface"

function Component() {
  return <Avatar src="https://placekitten.com/200/300" label="A cute kitten" />
}
```

#### Props

| Prop        | Type                        | Default value | Description                                                                                                                     |
| ----------- | --------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| src         | `string`                    |               | Required, URL to the avatar image or an empty string if no image available                                                      |
| label       | `string`                    |               | Required, a user-friendly label for the avatar image, usually a person's name                                                   |
| fallback    | `React.ReactNode`           |               | A fallback to be displayed if `src` is an empty string. A common use case for this prob would be to display a person's initials |
| size        | [`AvatarSize`](#avatarsize) | `"medium"`    | An avatar's size                                                                                                                |
| borderColor | `string, null`              | `null`        | When passed, adds a border to the avatar                                                                                        |
| className   | `string`                    |               | Custom class for the avatar element                                                                                             |
| style       | `React.CSSProperties`       |               | Custom style for the avatar element                                                                                             |

##### AvatarSize

```typescript
type AvatarSize = "small" | "medium" | "large" | "xlarge"
```

#### Usage with react-lazy-progressive-image

```jsx
import { Avatar } from "gatsby-interface"
import LazyImage from "react-lazy-progressive-image"

function LazyAvatar({ avatarUrl, userName }) => (
  <LazyImage
    src={avatarUrl || ''}
    // URL for the thumbnail image
    placeholder={avatarUrl && `${avatarUrl}&s=12`}
  >
    {src => (
      <Avatar
        src={src}
        label={userName}
        // Initials for alphabetical writing
        fallback={userName.split(/\s/).map(namePart => namePart.substring(0, 1)).join('')}
      />
    )}
  </LazyImage>
)
```

### AvatarsGroup

This component can be used to display multiple avatars in a single line, e.g. to show a list of contributors or conversation participants.

It also supports an indicator of how many avatars were "truncated"

```javascript
import { AvatarsGroup } from "gatsby-interface"

function Component() {
  return (
    <AvatarsGroup
      avatars={[
        { src: `https://placekitten.com/200/300`, label: `A cute kitten` },
        { src: ``, label: `John Doe`, fallback: "JD" },
        {
          src: `https://loremflickr.com/g/320/240/praha`,
          label: `A random picture of Praha`,
        },
      ]}
      truncatedCount={2}
      truncatedLabel="2 more users"
    />
  )
}
```

**IMPORTANT** Note that `AvatarsGroup` does not handle any slicing of the `avatars` array based on the value passed in `truncatedCount`. That means that if you have a list of 10 avatars but you only want to display 4, you have to slice it yourself:

```javascript
import { AvatarsGroup } from "gatsby-interface"

function Component() {
  const avatars = [
    // 10 avatar descriptors
  ]
  const avatarsToShow = 4
  const truncatedCount = avatars.length - avatarsToShow
  return (
    <AvatarsGroup
      avatars={avatars.slice(0, avatarsToShow)}
      truncatedCount={truncatedCount}
      truncatedLabel={`${truncatedCount} more users`}
    />
  )
}
```

#### Props

| Prop           | Type                                      | Default value              | Description                                                                                                                            |
| -------------- | ----------------------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| avatars        | [`AvatarDescriptor[]`](#avatardescriptor) |                            | Required, an array of objects describing each avatar in a group                                                                        |
| size           | [`AvatarSize`](#avatarsize)               | `"medium"`                 | What size each avatar in a group should have                                                                                           |
| borderColor    | `string`                                  |                            | Each avatar in a group is bordered; `borderColor` can be used to customize the color of these borders                                  |
| truncatedCount | `number`                                  |                            | When passed an greater than 0, makes the group render an additional "placeholder" avatar that indicates how many users were "left out" |
| truncatedLabel | `string`                                  | `"${truncatedCount} more"` | User-friendly label for the "truncated" placeholder avatar                                                                             |
| className      | `string`                                  |                            | Custom class for the group element                                                                                                     |
| style          | `React.CSSProperties`                     |                            | Custom style for the group element                                                                                                     |

##### AvatarDescriptor

```typescript
export type AvatarDescriptor = Pick<AvatarProps, "src" | "label" | "fallback">
```
