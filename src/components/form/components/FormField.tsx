/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import { Interpolation } from "@emotion/serialize"
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

const sharedDescriptionStyles: Interpolation = {
  alignItems: `flex-start`,
  color: colors.grey[50],
  display: `flex`,
  fontSize: fontSizes[`2xs`],
  lineHeight: 1.2,
  margin: `0 ${spaces[`2xs`]}`,
  position: `relative`,
  zIndex: 0,

  svg: {
    flexShrink: 0,
    marginRight: spaces[`2xs`],
    marginTop: `0.1em`,
    width: `1em`,
    height: `1em`,
  },
}

const Hint: React.FC<FormFieldSkeletonHintProps> = ({ children, ...rest }) => {
  return (
    <FormFieldSkeleton.Hint css={sharedDescriptionStyles} {...rest}>
      <MdInfoOutline />
      {children}
    </FormFieldSkeleton.Hint>
  )
}

const errorEntry = keyframes`
  50% {
    opacity: .5;
  }
  to {
    opacity: 1;
  }
`

const errorIconEntry = keyframes`
  to {
    transform: scale(1)
  }
`

FormField.Hint = Hint
FormField.Hint.displayName = `FormField.Hint`

const Error: React.FC<FormFieldSkeletonErrorProps> = ({
  children,
  ...rest
}) => {
  const { hasHint } = FormFieldSkeleton.useFormFieldSkeleton()

  return (
    <FormFieldSkeleton.Error
      css={[
        sharedDescriptionStyles,
        {
          animation: `${errorEntry} .25s ease forwards`,
          color: colors.red[70],
          marginTop: hasHint ? spaces[`2xs`] : 0,
          opacity: 0,

          svg: {
            animation: `${errorIconEntry} .25s ease-out forwards`,
            transform: `scale(0)`,
          },
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
