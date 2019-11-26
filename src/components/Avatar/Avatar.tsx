/** @jsx jsx */
import { jsx } from "@emotion/core"
import { css } from "@emotion/core"
import AvatarSkeleton from "./AvatarSkeleton"
import { AvatarSize } from "./types"
import { DEFAULT_SIZE } from "./constants"

const imageCss = css({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  padding: 0,
  margin: 0,
})

export type AvatarProps = {
  src: string;
  label: string;
  fallback?: React.ReactNode;
  size?: AvatarSize;
  borderColor?: string | null;
  className?: string;
  style?: React.CSSProperties;
}

export default function Avatar({
  src,
  fallback,
  label,
  size = DEFAULT_SIZE,
  borderColor = null,
  className,
  style,
}: AvatarProps) {
  return (
    <AvatarSkeleton
      size={size}
      borderColor={borderColor}
      className={className}
      style={style}
      title={label}
    >
      {src ? (
        <img css={imageCss} src={src} alt={label} />
      ) : (
        <span aria-label={label}>{fallback}</span>
      )}
    </AvatarSkeleton>
  )
}
