// TODO remove this file once ./button.js is rewritten to TypeScript
import { Interpolation } from "@emotion/serialize"
import { ButtonSize, ButtonVariant, ButtonTone } from "../../components/Button"

const ButtonThemeStyles: {
  base: (props?: {
    loading?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
  }) => Interpolation
  sizes: Record<ButtonSize, Interpolation>
  variants: Record<
    ButtonVariant,
    (props: { tone: ButtonTone }) => Interpolation
  >
}

export default ButtonThemeStyles
