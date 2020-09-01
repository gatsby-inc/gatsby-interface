/** @jsx jsx */
import { jsx } from "@emotion/core"
import { AvatarSize } from "./types"
import Avatar, { AvatarProps } from "./Avatar"
import { DEFAULT_SIZE, borderSizeValues } from "./constants"
import { ThemeCss } from "../../theme"

const groupBaseCss: ThemeCss = _theme => ({
  display: "flex",
  alignItems: "center",
  // Create new stacking context
  zIndex: 1,
})

export type AvatarDescriptor = Pick<AvatarProps, "src" | "label" | "fallback">

export type AvatarsGroupProps = {
  avatars: AvatarDescriptor[]
  size?: AvatarSize
  borderColor?: string
  omittedAvatarsCount?: number
  omittedAvatarsLabel?: string
  className?: string
  style?: React.CSSProperties
}

export default function AvatarsGroup({
  avatars,
  size = DEFAULT_SIZE,
  borderColor = "#fff",
  omittedAvatarsCount = 0,
  omittedAvatarsLabel = `${omittedAvatarsCount} more`,
  className,
  style,
}: AvatarsGroupProps) {
  const commonAvatarProps = {
    size,
    borderColor,
  }
  const overlapCss = {
    "&:not(:first-child)": {
      marginLeft: `-${borderSizeValues[size] * 2}px`,
    },
  }

  return (
    <div css={groupBaseCss} className={className} style={style}>
      {avatars.map(({ src, label, ...avatar }, idx, list) => {
        return (
          <Avatar
            // Using both src and label as key because src might not be unique
            key={`${src}_${label}_${idx}`}
            src={src}
            label={label}
            {...commonAvatarProps}
            {...avatar}
            css={overlapCss}
            style={{ zIndex: list.length - idx }}
          />
        )
      })}
      {omittedAvatarsCount > 0 && (
        <Avatar
          src="" // this is an avatar "lookalike" that indicates how many avatars were left out
          label={omittedAvatarsLabel}
          css={overlapCss}
          {...commonAvatarProps}
          fallback={`+${omittedAvatarsCount}`}
        />
      )}
    </div>
  )
}
