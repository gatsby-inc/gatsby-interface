import * as React from "react"
import { screen, render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  DropdownMenu,
  DropdownMenuButton,
  DropdownMenuItem,
  DropdownMenuItems,
} from ".."
import { ThemeProvider } from "../../ThemeProvider"

describe("<DropdownMenu>>", () => {
  it("should show the options when clicked", async () => {
    render(
      <ThemeProvider>
        <DropdownMenu>
          <DropdownMenuButton>Actions</DropdownMenuButton>
          <DropdownMenuItems>
            <DropdownMenuItem onSelect={jest.fn()}>Save</DropdownMenuItem>
            <DropdownMenuItem onSelect={jest.fn()}>Cancel</DropdownMenuItem>
          </DropdownMenuItems>
        </DropdownMenu>
      </ThemeProvider>
    )

    await userEvent.click(screen.getByRole(`button`, { name: `Actions` }))

    await waitFor(() => expect(screen.getByRole("menu")).toBeVisible())

    expect(screen.getByRole("menuitem", { name: /Save/i })).toBeVisible()
    expect(screen.getByRole("menuitem", { name: /Cancel/i })).toBeVisible()
  })
})
