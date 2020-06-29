/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import {
  CheckboxConnectedField,
  CheckboxGroupConnectedField,
  InputConnectedField,
  RadioButtonConnectedField,
  SelectConnectedField,
  TextAreaConnectedField,
  FormFieldBlockLayout,
} from ".."
import { Formik } from "formik"
import * as Yup from "yup"
import Debug from "../../../utils/formik/Debug"
import { Button } from "../../Button"
import { MdArrowForward } from "react-icons/md"
import { getStoryOptions, radioKnobOptions } from "../../../utils/storybook"
import ConnectedFieldsDocs from "./connectedFields.mdx"
import { radios } from "@storybook/addon-knobs"

export default {
  title: `Form/Connected Fields`,
  parameters: {
    layout: `padded`,
    options: {
      showRoots: true,
    },
    docs: {
      page: ConnectedFieldsDocs,
    },
  },
}

const categories = [`article`, `essay`, `memories`].map(name => {
  return {
    label: name,
    value: name.toLowerCase().replace(/\s/g, `-`),
  }
})

const tags = [`one`, `two`, `three`, `four`, `five`].map(name => {
  return {
    label: name,
    value: name.toLowerCase().replace(/\s/g, `-`),
  }
})

const Actions: React.FC<{ isSubmitting: boolean }> = ({
  isSubmitting,
  ...rest
}) => {
  const [showDebug, setShowDebug] = React.useState(false)
  return (
    <React.Fragment>
      <div
        css={{
          display: `flex`,
          justifyContent: `space-between`,
        }}
        {...rest}
      >
        <Button type="reset" variant="SECONDARY" tone="NEUTRAL">
          Reset
        </Button>
        <Button
          type="submit"
          loading={isSubmitting}
          rightIcon={<MdArrowForward />}
        >
          Submit
        </Button>
      </div>
      <Button
        css={theme => ({
          marginTop: theme.space[8],
          width: `100%`,
        })}
        tone="NEUTRAL"
        size="S"
        variant="GHOST"
        onClick={() => setShowDebug(prevState => !prevState)}
      >
        {showDebug ? `Hide` : `Show`} debuger
      </Button>
      {showDebug && <Debug />}
    </React.Fragment>
  )
}

const initailValues = {
  title: ``,
  description: ``,
  author: ``,
  category: ``,
  tags: [],
  agreement: false,
}

export const Example = () => {
  const TITLE_MIN_LENGTH = 3
  const TITLE_MAX_LENGTH = 15
  const DESCRIPTION_MAX_LENGTH = 50
  const TAGS_MIN_LENGTH = 3

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required(`The Title field is required.`)
      .min(
        TITLE_MIN_LENGTH,
        `Title must be at least ${TITLE_MIN_LENGTH} character long.`
      )
      .max(
        TITLE_MAX_LENGTH,
        `Title can't be longer that ${TITLE_MAX_LENGTH} characters.`
      ),
    description: Yup.string().max(
      DESCRIPTION_MAX_LENGTH,
      `Description can't be longer than ${DESCRIPTION_MAX_LENGTH} characters.`
    ),
    author: Yup.string().required(`The Author field is required.`),
    category: Yup.string().required(`The Category field is required.`),
    tags: Yup.array()
      .required("The Tags field is required")
      .min(
        TAGS_MIN_LENGTH,
        `You have to mark at least ${TAGS_MIN_LENGTH} tags`
      ),
    agreement: Yup.bool().oneOf(
      [true],
      "You must agre with Terms and Privacy Policy"
    ),
  })

  const LAYOUTS: FormFieldBlockLayout[] = [`horizontal`, `vertical`]
  const layout = radios(`Layout`, radioKnobOptions(LAYOUTS), `horizontal`)

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initailValues}
      onSubmit={() => {
        setTimeout(() => {
          alert("Form submitted")
        }, 1000)
      }}
    >
      {({ isSubmitting, handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          noValidate
          css={theme => ({
            display: `grid`,
            gridGap: theme.space[5],
            maxWidth: `80%`,
            width: `600px`,
          })}
        >
          <InputConnectedField
            name="title"
            hint={`At least ${TITLE_MIN_LENGTH} and not more than ${TITLE_MAX_LENGTH} characters`}
            required
            layout={layout}
          />

          <TextAreaConnectedField
            name="description"
            hint={`Be concise, the field can't be longer than ${DESCRIPTION_MAX_LENGTH} characters`}
            layout={layout}
          />

          <SelectConnectedField
            name="author"
            options={getStoryOptions("mid")}
            required
            layout={layout}
          />

          <RadioButtonConnectedField
            name="category"
            options={categories}
            required
            layout={layout}
          />

          <CheckboxGroupConnectedField
            name="tags"
            options={tags}
            // optionsDirection="row"
            hint={`Check at least ${TAGS_MIN_LENGTH} tags`}
            required
            layout={layout}
          />

          <CheckboxConnectedField
            name="agreement"
            label={
              <React.Fragment>
                I have read and agree with the <a href="/">Terms</a> and{" "}
                <a href="/">Privacy Policy</a>. Lorem Ipsum is simply dummy text
                of the printing and typesetting industry.
              </React.Fragment>
            }
          />

          <Actions isSubmitting={isSubmitting} />
        </form>
      )}
    </Formik>
  )
}
