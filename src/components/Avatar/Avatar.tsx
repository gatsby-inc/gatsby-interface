/** @jsx jsx */
import { jsx } from "@emotion/core"
import AvatarSkeleton from "./AvatarSkeleton"
import { AvatarSize } from "./types"
import { DEFAULT_SIZE } from "./constants"

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
  const commonAvatarProps = {
    size,
    borderColor,
    className,
  }

  return (
    <AvatarSkeleton
      {...commonAvatarProps}
      size={size}
      borderColor={borderColor}
      className={className}
      style={style}
      title={label}
    >
      {src ? (
        <img
          css={{ objectFit: "cover", width: "100%", height: "100%" }}
          src={src}
          alt={label}
        />
      ) : (
        <span aria-label={label}>{fallback}</span>
      )}
    </AvatarSkeleton>
  )
}
