/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Placeholder, PlaceholderBox } from "./"
import { fadeAnimationCss } from "./Fade"
import { Spacer } from "../Spacer"

export default {
  title: `Placeholder`,
  component: Placeholder,
  subcomponents: {
    Placeholder,
    PlaceholderBox,
  },
}

export const PlaceholderDefault = () => {
  return (
    <div css={{ width: "400px" }}>
      <Placeholder
        animation={fadeAnimationCss}
        Left={() => <PlaceholderBox height="40px" width="40px" />}
        Right={() => <PlaceholderBox height="40px" width="40px" />}
      >
        <PlaceholderBox />
        <PlaceholderBox width="30%" />
        <PlaceholderBox width="80%" noSpace />
      </Placeholder>
    </div>
  )
}

export const PlaceholderOnlyRight = () => {
  return (
    <div css={{ width: "400px" }}>
      <Placeholder Right={() => <PlaceholderBox height="40px" width="40px" />}>
        <PlaceholderBox />
        <PlaceholderBox width="40%" />
        <PlaceholderBox width="30%" noSpace />
      </Placeholder>
    </div>
  )
}

export const PlaceholderOnlyLeft = () => {
  return (
    <div css={{ width: "400px" }}>
      <Placeholder
        Left={() => <PlaceholderBox height="40px" width="40px" radii="50%" />}
      >
        <PlaceholderBox />

        <PlaceholderBox width="70%" />
        <PlaceholderBox width="20%" noSpace />
      </Placeholder>
    </div>
  )
}

export const PlaceholderComplexPage = () => {
  return (
    <div css={{ width: "800px", position: "relative" }}>
      <Placeholder animation={fadeAnimationCss}>
        <PlaceholderBox width="50%" noSpace />
        <Spacer size={5} />

        <PlaceholderBox width="70%" />

        <Spacer size={5} />

        <div css={{ display: "flex", flexDirection: "row" }}>
          <PlaceholderBox width="100px" />
          <Spacer size={5} direction="horizontal" />
          <PlaceholderBox width="100px" />
        </div>

        <Spacer size={12} />

        <div css={{ display: "flex", flexDirection: "row" }}>
          <PlaceholderBox width="50px" />
          <Spacer size={5} direction="horizontal" />
          <PlaceholderBox width="50px" />
        </div>

        <Spacer size={7} />

        <PlaceholderBox height="150px" noSpace />
        <Spacer size={5} />
        <PlaceholderBox height="150px" noSpace />
      </Placeholder>
    </div>
  )
}
