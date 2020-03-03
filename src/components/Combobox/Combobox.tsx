/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import {
  Combobox as ReachCombobox,
  ComboboxProps as ReachComboboxProps,
  ComboboxInput as ReachComboboxInput,
  ComboboxInputProps as ReachComboboxInputProps,
  ComboboxPopover as ReachComboboxPopover,
  ComboboxPopoverProps as ReachComboboxPopoverProps,
  ComboboxList as ReachComboboxList,
  ComboboxListProps as ReachComboboxListProps,
  ComboboxOption as ReachComboboxOption,
  ComboboxOptionProps as ReachComboboxOptionProps,
  ComboboxOptionText as ReachComboboxOptionText,
} from "@reach/combobox"
import { PopoverProps } from "@reach/popover"
import { MdDone } from "react-icons/md"
import {
  comboboxCss,
  inputCss,
  popoverCss,
  listCss,
  optionCss,
  selectedOptionIconCss,
} from "./Combobox.styles"

export type ComboboxProps = import("@reach/utils").PropsWithAs<
  "div",
  ReachComboboxProps
>

export function Combobox(props: ComboboxProps) {
  return <ReachCombobox openOnFocus css={comboboxCss} {...props} />
}

export type ComboboxInputProps = import("@reach/utils").PropsWithAs<
  "input",
  ReachComboboxInputProps & {
    hasError?: boolean
  }
>

export const ComboboxInput = React.forwardRef<
  HTMLInputElement,
  ComboboxInputProps
>(function ComboboxInput({ hasError, ...delegated }, ref) {
  return (
    <ReachComboboxInput
      ref={ref}
      selectOnClick
      css={inputCss(hasError)}
      {...delegated}
    />
  )
})

export type ComboboxPopoverProps = import("@reach/utils").PropsWithAs<
  "div",
  ReachComboboxPopoverProps &
    Partial<PopoverProps> &
    React.RefAttributes<HTMLDivElement>
>

export const ComboboxPopover = React.forwardRef<
  HTMLInputElement,
  ComboboxPopoverProps
>(function ComboboxPopover(props, ref) {
  return (
    <ReachComboboxPopover
      ref={ref}
      portal={false}
      css={popoverCss}
      {...props}
    />
  )
})

export type ComboboxListProps = import("@reach/utils").PropsWithAs<
  "ul",
  ReachComboboxListProps
>

export function ComboboxList(props: ComboboxListProps) {
  return <ReachComboboxList persistSelection css={listCss} {...props} />
}

export type ComboboxOptionProps = import("@reach/utils").PropsWithAs<
  "li",
  ReachComboboxOptionProps & {
    selected?: boolean
    selectedAriaLabel?: string
    highlightMatches?: boolean
  }
>

export const ComboboxOption = React.forwardRef<
  HTMLLIElement,
  ComboboxOptionProps
>(function ComboboxOption(
  {
    selected,
    selectedAriaLabel = "currently selected:",
    highlightMatches,
    children,
    ...delegated
  },
  ref
) {
  return (
    <ReachComboboxOption
      ref={ref}
      css={optionCss(highlightMatches)}
      {...delegated}
    >
      {selected && (
        <MdDone css={selectedOptionIconCss} aria-label={selectedAriaLabel} />
      )}
      {children || <ComboboxOptionText />}
    </ReachComboboxOption>
  )
})

export type ComboboxOptionTextProps = {}

export function ComboboxOptionText(props: ComboboxOptionTextProps) {
  return <ReachComboboxOptionText {...props} />
}
