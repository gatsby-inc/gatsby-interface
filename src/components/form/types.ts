export type GroupControlProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "value" | "name" | "id" | "aria-invalid" | "children"
> & {
  name: string // Force require "name" attribute
  value: string // Force require "value" attribute
}

export type FormFieldLabelSize = "L" | "M" | "S"

export type FormFieldBlockLayout = `horizontal` | `vertical`

export type FormGroupOptionsDirection = `row` | `column`
