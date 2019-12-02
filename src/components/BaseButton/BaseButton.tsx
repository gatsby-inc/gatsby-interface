import React from "react"

export type BaseButtonProps = Omit<JSX.IntrinsicElements["button"], "ref"> & {
  loading?: boolean;
  loadingLabel?: React.ReactNode;
  LoadingIcon?: React.ComponentType<any>; // TODO replace any with something more strict
}

export const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  (props, ref) => {
    const {
      children,
      disabled = false,
      loading = false,
      loadingLabel = `Loading`,
      LoadingIcon,
      type = `button`,
      ...rest
    } = props

    return (
      <button
        disabled={loading ? true : disabled}
        type={type}
        {...rest}
        ref={ref}
      >
        {loading ? (
          <React.Fragment>
            {loadingLabel && <span>{loadingLabel}</span>}
            {` `}
            {LoadingIcon && <LoadingIcon />}
          </React.Fragment>
        ) : (
          children
        )}
      </button>
    )
  }
)
