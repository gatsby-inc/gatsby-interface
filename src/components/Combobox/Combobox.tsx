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
import { PropsWithAs } from "@reach/utils"
import { MdDone } from "react-icons/md"
import {
  comboboxCss,
  inputCss,
  popoverCss,
  listCss,
  optionCss,
  selectedOptionIconCss,
  selectedValueCss,
  inputWithSelectedValueCss,
} from "./Combobox.styles"

type ComboboxContextValue = {
  listRef: React.RefObject<HTMLUListElement>
}

const ComboboxContext = React.createContext<ComboboxContextValue>({
  listRef: {
    current: null,
  },
})

function useComboboxContext(): ComboboxContextValue {
  return React.useContext(ComboboxContext)
}

export type ComboboxProps = PropsWithAs<"div", ReachComboboxProps>

export function Combobox(props: ComboboxProps) {
  const listRef = React.useRef<HTMLUListElement>(null)

  return (
    <ComboboxContext.Provider value={{ listRef }}>
      <ReachCombobox openOnFocus css={comboboxCss} {...props} />
    </ComboboxContext.Provider>
  )
}

export type ComboboxInputProps = PropsWithAs<
  "input",
  ReachComboboxInputProps & {
    selectedOptionLabel?: string
    hasError?: boolean
  }
>

export const ComboboxInput = React.forwardRef<
  HTMLInputElement,
  ComboboxInputProps
>(function ComboboxInput({ selectedOptionLabel, hasError, ...delegated }, ref) {
  const { listRef } = useComboboxContext()

  /**
   * This handler allows to scroll list of options along with keyboard navigation
   *
   * This solution has been suggested in one of the replies:
   * https://github.com/reach/reach-ui/issues/357#issuecomment-575849548
   */
  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = event => {
    if (event.isDefaultPrevented()) {
      return
    }

    const container = listRef.current
    if (!container) {
      return
    }

    // According to the original Github comment, using "requestAnimationFrame" makes
    // scrolling work when navigating from last item to first item and vice versa
    window.requestAnimationFrame(() => {
      const element = container.querySelector(
        "[aria-selected=true]"
      ) as HTMLLIElement

      if (!element) {
        return
      }

      const top = element.offsetTop - container.scrollTop
      const bottom =
        container.scrollTop +
        container.clientHeight -
        (element.offsetTop + element.clientHeight)

      if (bottom < 0) container.scrollTop -= bottom
      if (top < 0) container.scrollTop += top
    })
  }

  let showSelectedOptionLabel = !!selectedOptionLabel
  if (delegated.value === selectedOptionLabel) {
    showSelectedOptionLabel = false
  }

  return (
    <div css={{ position: "relative" }}>
      <ReachComboboxInput
        ref={ref}
        selectOnClick
        onKeyDown={onKeyDown}
        css={theme => [
          inputCss(hasError)(theme),
          showSelectedOptionLabel && inputWithSelectedValueCss(theme),
        ]}
        {...delegated}
      />
      {!!selectedOptionLabel && (
        <span aria-hidden css={selectedValueCss}>
          {selectedOptionLabel}
        </span>
      )}
    </div>
  )
})

export type ComboboxPopoverProps = PropsWithAs<
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

export type ComboboxListProps = PropsWithAs<"ul", ReachComboboxListProps>

export function ComboboxList(props: ComboboxListProps) {
  const { listRef } = useComboboxContext()
  return (
    <ReachComboboxList
      ref={listRef}
      persistSelection
      css={listCss}
      {...props}
    />
  )
}

export type ComboboxOptionProps = PropsWithAs<
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
    highlightMatches = true,
    value,
    children,
    ...delegated
  },
  ref
) {
  return (
    <ReachComboboxOption
      ref={ref}
      value={value}
      css={optionCss(highlightMatches)}
      {...delegated}
    >
      {selected && (
        <MdDone css={selectedOptionIconCss} aria-label={selectedAriaLabel} />
      )}
      {children || (highlightMatches ? <ComboboxOptionText /> : value)}
    </ReachComboboxOption>
  )
})

export type ComboboxOptionTextProps = {}

export function ComboboxOptionText(props: ComboboxOptionTextProps) {
  return <ReachComboboxOptionText {...props} />
}
