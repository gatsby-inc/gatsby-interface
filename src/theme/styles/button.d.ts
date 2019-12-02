// TODO remove this file once ./button.js is rewritten to TypeScript
import { Interpolation } from "@emotion/serialize"
import { ButtonSize, ButtonVariant, ButtonTone } from "../../components/Button"

export const ButtonThemeStyles: {
  base: (props: { loading?: boolean }) => Interpolation
  sizes: Record<ButtonSize, Interpolation>
  variants: Record<
    ButtonVariant,
    (props: { tone: ButtonTone }) => Interpolation
  >
}
