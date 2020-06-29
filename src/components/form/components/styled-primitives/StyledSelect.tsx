/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { ThemeCss } from "../../../../theme"
import { baseInputCss } from "../../styles"

export type StyledSelectOption = {
  value: string
  label: string
}

export type StyledSelectProps = React.ComponentPropsWithRef<"select"> & {
  options: StyledSelectOption[]
}

export const StyledSelect = React.forwardRef<
  HTMLSelectElement,
  StyledSelectProps
>(function SelectFieldControl({ options, ...rest }, ref) {
  const baseCss: ThemeCss = theme => [
    baseInputCss(theme),
    {
      padding: `0 ${theme.space[3]}`,
      backgroundImage: `url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'%3E%3C/path%3E%3C/svg%3E")`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: `right ${theme.space[3]} top 50%, 0 0`,
    },
  ]

  return (
    <select ref={ref} css={baseCss} {...rest}>
      {options.map(renderOption)}
    </select>
  )
})

function renderOption({ label, value }: StyledSelectOption) {
  return (
    <option key={value} value={value}>
      {label}
    </option>
  )
}
