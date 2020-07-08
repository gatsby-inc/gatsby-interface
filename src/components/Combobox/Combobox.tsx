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
  ComboboxButton as ReachComboboxButton,
  useComboboxContext as useReachComboboxContext,
} from "@reach/combobox"
import { PopoverProps } from "@reach/popover"
import { PropsWithAs } from "@reach/utils"
import { MdDone, MdArrowDropDown, MdSearch } from "react-icons/md"
import {
  comboboxCss,
  inputCss,
  popoverCss,
  listCss,
  optionCss,
  selectedOptionIconCss,
  selectedValueCss,
  inputWithSelectedValueCss,
  toggleButtonCss,
  inputWithToggleButtonCss,
  searchIconCss,
} from "./Combobox.styles"
import { warn } from "../../utils/maintenance/warn"
import { RequireProp } from "../../utils/types"
import { DisableReachStyleCheck } from "../../utils/helpers/DisableReachStyleCheck"
import { visuallyHiddenCss } from "../../stylesheets/a11y"

type ComboboxCustomContextValue = {
  listRef: React.RefObject<HTMLUListElement>
}

const ComboboxCustomContext = React.createContext<ComboboxCustomContextValue>({
  listRef: {
    current: null,
  },
})

function useComboboxCustomContext(): ComboboxCustomContextValue {
  return React.useContext(ComboboxCustomContext)
}

export type ComboboxProps = PropsWithAs<"div", ReachComboboxProps>

export function Combobox(props: ComboboxProps) {
  const listRef = React.useRef<HTMLUListElement>(null)

  return (
    <ComboboxCustomContext.Provider value={{ listRef }}>
      <DisableReachStyleCheck reachComponent="combobox" />
      <ReachCombobox openOnFocus css={comboboxCss} {...props} />
    </ComboboxCustomContext.Provider>
  )
}

export type ComboboxInputProps = PropsWithAs<
  "input",
  ReachComboboxInputProps & {
    selectedOptionLabel?: string
    hasError?: boolean
    showToggleButton?: boolean
    toggleButtonAriaLabel?: string
  }
>

export const ComboboxInput = React.forwardRef<
  HTMLInputElement,
  ComboboxInputProps
>(function ComboboxInput(
  {
    selectedOptionLabel,
    hasError,
    showToggleButton,
    toggleButtonAriaLabel = "Show options",
    ...delegated
  },
  ref
) {
  const { listRef } = useComboboxCustomContext()

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
      <MdSearch css={searchIconCss} aria-hidden />
      <ReachComboboxInput
        ref={ref}
        selectOnClick
        onKeyDown={onKeyDown}
        css={theme => [
          inputCss(hasError)(theme),
          showSelectedOptionLabel && inputWithSelectedValueCss(theme),
          showToggleButton && inputWithToggleButtonCss(theme),
        ]}
        {...delegated}
      />
      {!!selectedOptionLabel && (
        <span aria-hidden css={selectedValueCss}>
          {selectedOptionLabel}
        </span>
      )}
      {showToggleButton && (
        <ComboboxButton css={toggleButtonCss}>
          <span css={visuallyHiddenCss}>{toggleButtonAriaLabel}</span>
          <MdArrowDropDown aria-hidden />
        </ComboboxButton>
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
    <ReachComboboxPopover ref={ref} portal={true} css={popoverCss} {...props} />
  )
})

type ComboboxListBaseProps = PropsWithAs<"ul", ReachComboboxListProps>

/**
 * ComboboxList renders an element with role="listbox"
 * which must have an accessible name (https://dequeuniversity.com/rules/axe/3.5/aria-input-field-name?application=AxeChrome)
 * therefore we require "aria-label" or "aria-labelledby" to be passed
 */
export type ComboboxListProps =
  | RequireProp<ComboboxListBaseProps, "aria-label">
  | RequireProp<ComboboxListBaseProps, "aria-labelledby">

export function ComboboxList(props: ComboboxListProps) {
  const { listRef } = useComboboxCustomContext()

  if (process.env.NODE_ENV === `development`) {
    const hasAccessibleName = Boolean(
      props["aria-label"] || props["aria-labelledby"]
    )
    if (!hasAccessibleName) {
      warn(
        `<ComboboxList /> is missing one of the required props: "aria-label", "aria-labelledby"`
      )
    }
  }

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

export type ComboboxButtonProps = Omit<
  import("@reach/utils").PropsWithAs<"button", {}>,
  "type"
>

export function ComboboxButton(props: ComboboxButtonProps) {
  // According to WAI-ARIA authoring practices, combobox button should be excluded from the tab sequence
  // https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-6
  return <ReachComboboxButton tabIndex={-1} {...props} type="button" />
}

export function useComboboxContext() {
  return useReachComboboxContext()
}
