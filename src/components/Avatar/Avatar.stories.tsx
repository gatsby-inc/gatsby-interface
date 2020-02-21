/** @jsx jsx */
import { jsx } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import { text, color, boolean, number, radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../utils/storybook"
import README from "./README.md"
import Avatar from "./Avatar"
import AvatarsGroup from "./AvatarsGroup"
import { AvatarSize } from "./index"

const IMG_URL_1 = `https://picsum.photos/id/1005/200/200`
const IMG_URL_2 = `https://picsum.photos/id/1025/200/200`

storiesOf(`Avatar`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`Avatar`, () => {
    const bordered = boolean("Show border?", false)
    const borderColor = color("borderColor", "#000")
    return (
      <StoryUtils.Container>
        <div>
          <Avatar
            src={IMG_URL_1}
            label={text("label", "John Doe")}
            borderColor={bordered ? borderColor : null}
            size={radios(
              "size",
              {
                xsmall: "XS",
                small: "S",
                medium: "M",
                large: "L",
                xlarge: "XL",
                xxlarge: "XXL",
              },
              "M"
            )}
          />
        </div>
      </StoryUtils.Container>
    )
  })
  .add(`Avatar fallback text fit`, () => {
    const sizes: AvatarSize[] = ["XS", "S", "M", "L", "XL", "XXL"]
    return (
      <StoryUtils.Container>
        <div>
          {sizes.map(size => (
            <Avatar
              key={size}
              src=""
              label={`Avatar of size ${size}`}
              fallback={text("fallback text", "A")}
              size={size}
            />
          ))}
        </div>
      </StoryUtils.Container>
    )
  })
  .add(`AvatarsGroup`, () => {
    const borderColor = color("borderColor", "#fff")
    return (
      <StoryUtils.Container>
        <div>
          <AvatarsGroup
            avatars={[
              {
                src: IMG_URL_1,
                label: `John Doe`,
              },
              { src: ``, label: `John Doe`, fallback: "JD" },
              {
                src: IMG_URL_2,
                label: `Jane Doe`,
              },
            ]}
            borderColor={borderColor}
            size={radios(
              "size",
              {
                xsmall: "XS",
                small: "S",
                medium: "M",
                large: "L",
                xlarge: "XL",
                xxlarge: "XXL",
              },
              "M"
            )}
            omittedAvatarsCount={number("omittedAvatarsCount", 1)}
            omittedAvatarsLabel={text(
              "omittedAvatarsLabel",
              "More users not displayed"
            )}
          />
        </div>
      </StoryUtils.Container>
    )
  })
