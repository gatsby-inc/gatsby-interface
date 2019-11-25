/** @jsx jsx */
import { jsx } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import {
  text,
  color,
  select,
  boolean,
  number,
  radios,
} from "@storybook/addon-knobs"

import { StoryUtils } from "../../utils/storybook"
import README from "./README.md"
import Avatar from "./Avatar"
import AvatarsGroup from "./AvatarsGroup"

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
            src={"https://placekitten.com/200/300"}
            label={text("label", "A cute kitten")}
            borderColor={bordered ? borderColor : null}
            size={select(
              "size",
              {
                small: "small",
                medium: "medium",
                large: "large",
                xlarge: "xlarge",
              },
              "medium"
            )}
          />
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
                src: `https://placekitten.com/200/300`,
                label: `A cute kitten`,
              },
              { src: ``, label: `John Doe`, fallback: "JD" },
              {
                src: `https://loremflickr.com/g/320/240/praha`,
                label: `A random picture of Praha`,
              },
            ]}
            borderColor={borderColor}
            size={radios(
              "size",
              {
                small: "small",
                medium: "medium",
                large: "large",
                xlarge: "xlarge",
              },
              "medium"
            )}
            truncatedCount={number("truncatedCount", 1)}
            truncatedLabel={text("truncatedLabel", "More users not displayed")}
          />
        </div>
      </StoryUtils.Container>
    )
  })
