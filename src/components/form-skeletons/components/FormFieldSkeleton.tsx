import React from "react"
import { getHintId, getErrorId } from "../utils"

export type FormFieldSkeletonContextValue = {
  id: string
  hasHint?: boolean
  hasError?: boolean
  meta: {
    hintId?: string
    errorId?: string
    controlDescribedBy?: string
  }
}

const FormFieldSkeletonContext = React.createContext<
  FormFieldSkeletonContextValue
>({
  id: ``,
  hasHint: undefined,
  hasError: undefined,
  meta: {
    hintId: undefined,
    errorId: undefined,
    controlDescribedBy: undefined,
  },
})

export type FormFieldSkeletonProps = {
  id: string
  hasHint?: boolean
  hasError?: boolean
  children?: React.ReactNode
}

export function useFormField(
  fieldId: string,
  {
    required = false,
    hasError = false,
    hasHint = false,
    validationMode,
  }: {
    required?: boolean
    hasError?: boolean
    hasHint?: boolean
    validationMode?: ErrorValidationMode
  }
): FormFieldData {
  const hintId = getHintId(fieldId)
  const errorId = getErrorId(fieldId)
  const controlDescribedBy =
    [hasError && errorId, hasHint && hintId]
      .filter(describedBy => describedBy)
      .join(` `) || undefined

  return {
    controlProps: {
      id: fieldId,
      "aria-describedby": controlDescribedBy,
      "aria-invalid": hasError,
      required,
    },
    labelProps: {
      htmlFor: fieldId,
    },
    hintProps: {
      id: hintId,
      hidden: !hasHint,
    },
    errorProps: {
      id: errorId,
      hidden: !hasError,
      "aria-live": getErrorAriaLiveAttribute(validationMode),
    },
  }
}

export type FormFieldData = {
  controlProps: {
    id: string
    "aria-describedby": string | undefined
    "aria-invalid": boolean
    required: boolean
  }
  labelProps: {
    htmlFor: string
  }
  hintProps: {
    id: string
    hidden: boolean
  }
  errorProps: {
    id: string
    hidden: boolean
    "aria-live": `polite` | `assertive` | `off` | undefined
  }
}

export type FormGroupFieldData = {
  groupContainerProps: {
    id: string
    role: `group`
    "aria-labelledby": string
  }
  groupLabelProps: {
    id: string
  }
  getControlProps: (
    optionValue: string
  ) => {
    id: string
    "aria-describedby": string | undefined
    "aria-invalid": boolean
    required: boolean
  }
  getControlLabelProps: (
    optionValue: string
  ) => {
    htmlFor: string
  }
  hintProps: {
    id: string
    hidden: boolean
  }
  errorProps: {
    id: string
    hidden: boolean
    "aria-live": `polite` | `assertive` | `off` | undefined
  }
  meta: {
    required: boolean
  }
}

export function useFormGroupField(
  fieldId: string,
  {
    required = false,
    hasError = false,
    hasHint = false,
    validationMode,
  }: {
    required?: boolean
    hasError?: boolean
    hasHint?: boolean
    validationMode?: ErrorValidationMode
  }
): FormGroupFieldData {
  const hintId = getHintId(fieldId)
  const errorId = getErrorId(fieldId)
  const controlDescribedBy =
    [hasError && errorId, hasHint && hintId]
      .filter(describedBy => describedBy)
      .join(` `) || undefined

  const groupLabelId = `${fieldId}__legend`

  return {
    groupContainerProps: {
      id: fieldId,
      role: `group`,
      "aria-labelledby": groupLabelId,
    },
    groupLabelProps: {
      id: groupLabelId,
    },
    getControlProps: (optionValue: string) => ({
      id: getGroupOptionId(fieldId, optionValue),
      "aria-describedby": controlDescribedBy,
      "aria-invalid": hasError,
      required,
    }),
    getControlLabelProps: (optionValue: string) => ({
      htmlFor: getGroupOptionId(fieldId, optionValue),
    }),
    hintProps: {
      id: hintId,
      hidden: !hasHint,
    },
    errorProps: {
      id: errorId,
      hidden: !hasError,
      "aria-live": getErrorAriaLiveAttribute(validationMode),
    },
    meta: {
      required,
    },
  }
}

function getGroupOptionId(fieldId: string, optionValue: string) {
  return `${fieldId}__option--${optionValue}`
}

function FormFieldSkeletonProvider({
  id,
  hasError,
  hasHint,
  children,
}: FormFieldSkeletonProps) {
  const fieldContext = React.useMemo<FormFieldSkeletonContextValue>(() => {
    const hintId = getHintId(id)
    const errorId = getErrorId(id)
    const controlDescribedBy =
      [hasError && errorId, hasHint && hintId]
        .filter(describedBy => describedBy)
        .join(` `) || undefined

    return {
      id,
      hasError,
      hasHint,
      meta: {
        hintId,
        errorId,
        controlDescribedBy,
      },
    }
  }, [id, hasError, hasHint])

  return (
    <FormFieldSkeletonContext.Provider value={fieldContext}>
      {children}
    </FormFieldSkeletonContext.Provider>
  )
}

export type FormFieldSkeletonLabelProps = Omit<
  JSX.IntrinsicElements["label"],
  "ref" | "htmlFor"
>

export const FormFieldSkeletonLabel: React.FC<FormFieldSkeletonLabelProps> = props => {
  const { id } = useFormFieldSkeleton()

  return <label htmlFor={id} {...props} />
}

export type FormFieldSkeletonHintProps = Omit<
  JSX.IntrinsicElements["div"],
  "ref" | "id"
>

export const FormFieldSkeletonHint: React.FC<FormFieldSkeletonHintProps> = ({
  children,
  ...rest
}) => {
  const { hasHint, meta } = useFormFieldSkeleton()

  return (
    <div id={meta.hintId} {...rest}>
      {hasHint ? children : null}
    </div>
  )
}

export type ErrorValidationMode = "focus" | "change" | "submit"
export type FormFieldSkeletonErrorProps = Omit<
  JSX.IntrinsicElements["div"],
  "ref" | "id"
> & { validationMode?: ErrorValidationMode }

export const FormFieldSkeletonError: React.FC<FormFieldSkeletonErrorProps> = ({
  children,
  validationMode,
  ...rest
}) => {
  const { hasError, meta } = useFormFieldSkeleton()

  return (
    <div
      id={meta.errorId}
      aria-live={getErrorAriaLiveAttribute(validationMode)}
      {...rest}
    >
      {hasError ? children : null}
    </div>
  )
}

export function FormFieldSkeleton(props: FormFieldSkeletonProps) {
  return <FormFieldSkeletonProvider {...props} />
}

export function useFormFieldSkeleton() {
  return React.useContext(FormFieldSkeletonContext)
}

function getErrorAriaLiveAttribute(
  validationMode?: ErrorValidationMode
): React.HTMLAttributes<HTMLDivElement>["aria-live"] {
  if (validationMode === `focus`) {
    return `assertive`
  }
  if (validationMode === `change`) {
    return `polite`
  }
  return undefined
}
