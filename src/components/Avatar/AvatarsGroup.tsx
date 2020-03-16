/** @jsx jsx */
import { jsx } from "@emotion/core"
import { css } from "@emotion/core"
import { AvatarSize } from "./types"
import Avatar, { AvatarProps } from "./Avatar"
import { DEFAULT_SIZE, borderSizeValues } from "./constants"

const groupBaseCss = css({
  display: "flex",
  alignItems: "center",
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
    marginLeft: `-${borderSizeValues[size] * 2}px`,
  }
  const avatarsShown = avatars.length

  return (
    <div css={groupBaseCss} className={className} style={style}>
      {avatars.map(({ src, label, ...avatar }, idx) => {
        return (
          <Avatar
            // Using both src and label as key because src might not be unique
            key={`${src}_${label}_${idx}`}
            src={src}
            label={label}
            {...commonAvatarProps}
            {...avatar}
            css={idx !== 0 && overlapCss}
            style={{ zIndex: avatarsShown - idx }}
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
