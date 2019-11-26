/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React from "react"

import { MdError, MdInfoOutline } from "react-icons/md"
import {
  FormFieldSkeletonProps,
  FormFieldSkeleton,
  FormFieldSkeletonLabelProps,
  FormFieldSkeletonHintProps,
  FormFieldSkeletonErrorProps,
} from "../../form-skeletons/components/FormFieldSkeleton"

import colors from "../../../theme/colors"
import { spaces, fontSizes } from "../../../utils/presets"

export function FormField(props: FormFieldSkeletonProps) {
  return <FormFieldSkeleton {...props} />
}

export type FormFiledWrapperProps = Pick<
  JSX.IntrinsicElements["div"],
  "className" | "style"
>

const Wrapper: React.FC<FormFiledWrapperProps> = props => (
  <div
    css={{
      "&:not(:last-child)": {
        marginBottom: spaces.m,
      },
    }}
    {...props}
  />
)

FormField.Wrapper = Wrapper
FormField.Wrapper.displayName = `FormField.Wrapper`

export type FormFieldLabelSize = "L" | "M" | "S"

const FORM_FIELD_LABEL_SIZES = {
  L: fontSizes.s,
  M: fontSizes.xs,
  S: fontSizes[`2xs`],
}

type FormFieldLabelProps = FormFieldSkeletonLabelProps & {
  isRequired?: boolean;
  size?: FormFieldLabelSize;
}

const Label: React.FC<FormFieldLabelProps> = ({
  children,
  isRequired,
  size = `M`,
  ...rest
}) => {
  return (
    <FormFieldSkeleton.Label
      css={{
        alignItems: `flex-end`,
        color: colors.grey[60],
        display: `flex`,
        fontSize: FORM_FIELD_LABEL_SIZES[size],
        justifyContent: `space-between`,
        margin: `0 ${spaces.xs} ${spaces[`2xs`]} ${spaces[`2xs`]}`,
        position: `relative`,
      }}
      {...rest}
    >
      {children}{" "}
      {isRequired && (
        <span
          css={{
            color: colors.purple[50],
            fontSize: fontSizes[`2xs`],
          }}
        >
          required
        </span>
      )}
    </FormFieldSkeleton.Label>
  )
}

FormField.Label = Label
FormField.Label.displayName = `FormField.Label`

// todo: find a proper style for
const sharedDescriptionStyles: any = (hasChildren: boolean) => ({
  alignItems: `flex-start`,
  color: colors.grey[50],
  display: `flex`,
  fontSize: fontSizes[`2xs`],
  lineHeight: 1.2,
  margin: `0 ${spaces[`2xs`]}`,
  marginTop: hasChildren ? spaces.xs : 0,
  position: `relative`,
  zIndex: 0,

  svg: {
    color: `current-color`,
    flexShrink: 0,
    marginRight: spaces[`2xs`],
    marginTop: `0.1em`,
    width: `1em`,
    height: `1em`,
  },
})

const Hint: React.FC<FormFieldSkeletonHintProps> = ({ children, ...rest }) => {
  const hasChildren: boolean = children ? true : false
  const { hasError } = FormFieldSkeleton.useFormFieldSkeleton()

  return (
    <FormFieldSkeleton.Hint
      css={[
        sharedDescriptionStyles(hasChildren),
        {
          marginTop: hasChildren && hasError ? spaces[`2xs`] : spaces.xs,
        },
      ]}
      {...rest}
    >
      <MdInfoOutline />
      {children}
    </FormFieldSkeleton.Hint>
  )
}

const errorEntry = keyframes`
    50% {
      opacity: .5;
      transform: translate(0, 0);
    }
  to {
    opacity: 1;
     transform: translate(0, 0);
  }
`

FormField.Hint = Hint
FormField.Hint.displayName = `FormField.Hint`

const Error: React.FC<FormFieldSkeletonErrorProps> = ({
  children,
  ...rest
}) => {
  const hasChildren: boolean = children ? true : false

  return (
    <FormFieldSkeleton.Error
      css={[
        sharedDescriptionStyles(hasChildren),
        {
          animation: `${errorEntry} .25s ease forwards`,
          color: colors.red[70],
          opacity: 0,
          transform: `translate(0, -100%)`,
        },
      ]}
      {...rest}
    >
      <MdError />
      {children}
    </FormFieldSkeleton.Error>
  )
}

FormField.Error = Error
FormField.Error.displayName = `InputField.Error`

export default FormField
