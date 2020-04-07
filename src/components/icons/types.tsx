export type IconSize =
  | `inherit`
  | `xxsmall`
  | `xsmall`
  | `small`
  | `medium`
  | `large`

type IconSvgProps = Omit<JSX.IntrinsicElements["svg"], "ref">

export type IconSkeletonProps = IconSvgProps & {
  iconName: string
  size?: IconSize
  applyColorToStroke?: boolean
}

export type IconProps = Omit<
  IconSkeletonProps,
  "iconName" | "applyColorToStroke"
>
