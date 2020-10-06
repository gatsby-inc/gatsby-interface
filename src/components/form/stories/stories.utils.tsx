import {
  StyledLabelSize,
  FormFieldBlockLayout,
  FormGroupOptionsDirection,
} from ".."
import { ArgTypes } from "@storybook/react"
import { ErrorValidationMode } from "../../form-skeletons"

const LABEL_SIZES: StyledLabelSize[] = [`L`, `M`, `S`]
const LAYOUTS: FormFieldBlockLayout[] = [`horizontal`, `vertical`]
const VALIDATION_MODES: ErrorValidationMode[] = [`focus`, `change`, `submit`]

export const commonFieldArgTypes: ArgTypes = {
  id: {
    description: `id is always required`,
    type: {
      required: true,
    },
    table: {
      type: {
        summary: `string`,
      },
    },
    control: {
      type: `text`,
    },
  },
  label: {
    type: {
      required: true,
    },
    table: {
      type: {
        summary: `ReactNode`,
      },
    },
    control: {
      type: `text`,
    },
  },
  labelSize: {
    description: `Controls font size for the field label`,
    table: {
      type: {
        summary: LABEL_SIZES.map(labelSize => `"${labelSize}"`).join(` | `),
      },
      defaultValue: {
        summary: `M`,
      },
    },
    control: {
      type: `select`,
      options: LABEL_SIZES,
    },
  },
  hint: {
    description: `Pass a hint/description message to be displayed below the field; it will be associated with the field control via ARIA attributes`,
    table: {
      type: {
        summary: `ReactNode`,
      },
    },
    control: {
      type: `text`,
    },
  },
  error: {
    description: `Pass an error message to be displayed below the field; it will be associated with the field control via ARIA attributes`,
    table: {
      type: {
        summary: `ReactNode`,
      },
    },
    control: {
      type: `text`,
    },
  },
  required: {
    description: `Whether the field should be marked as required`,
    table: {
      type: {
        summary: `boolean`,
      },
    },
    control: {
      type: `boolean`,
    },
  },
  disabled: {
    description: `Whether the field should be marked as disabled`,
    table: {
      type: {
        summary: `boolean`,
      },
    },
    control: {
      type: `boolean`,
    },
  },
  layout: {
    description: `Horizontal layout puts label in the same line as the field control; it reverts back to vertical layout on small screens`,
    table: {
      type: {
        summary: LAYOUTS.map(layout => `"${layout}"`).join(` | `),
      },
      defaultValue: {
        summary: `vertical`,
      },
    },
    control: {
      type: `select`,
      options: LAYOUTS,
    },
  },
  validationMode: {
    description: `Instructs screen readers when to announce error messages`,
    table: {
      type: {
        summary: VALIDATION_MODES.map(layout => `"${layout}"`).join(` | `),
      },
      defaultValue: {
        summary: undefined,
      },
    },
    control: {
      type: `select`,
      options: VALIDATION_MODES,
    },
  },
}

const OPTIONS_DIRECTIONS: FormGroupOptionsDirection[] = [`row`, `column`]

export const commonGroupFieldArgTypes: ArgTypes = {
  optionsDirection: {
    description: `Allows to display options inline ("row" value is only compatible with "default" variant)`,
    table: {
      type: {
        summary: OPTIONS_DIRECTIONS.map(
          optionsDirection => `"${optionsDirection}"`
        ).join(` | `),
      },
      defaultValue: {
        summary: `column`,
      },
    },
    control: {
      type: `select`,
      options: OPTIONS_DIRECTIONS,
    },
  },
}

export const requiredArgs = {
  id: `required`,
  name: `required`,
  label: `Label`,
  required: true,
}

export const disabledArgs = {
  id: `disabled`,
  name: `disabled`,
  label: `Label`,
  disabled: true,
}

export const withHintArgs = {
  id: `withHint`,
  name: `withHint`,
  label: `Label`,
  hint: `Hint text`,
}

export const withErrorArgs = {
  id: `withError`,
  name: `withError`,
  label: `Label`,
  error: `Error message`,
}

export const withErrorAndHintArgs = {
  id: `withErrorAndHint`,
  name: `withErrorAndHint`,
  label: `Label`,
  hint: `Hint text`,
  error: `Error message`,
}
