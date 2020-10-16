## Dropdown

This components is a Dropdown an can be used as following:

```jsx
export const Basic = () => {
  const [selected, setSelected] =
    (React.useState < undefined) | (string > undefined)

  return (
    <Dropdown>
      <DropdownLabel placeholder="Placeholder for the dropdown">
        {selected}
      </DropdownLabel>
      <DropdownItems>
        <DropdownItem onSelect={() => setSelected("First")}>First</DropdownItem>
        <DropdownItem onSelect={() => setSelected("Second")}>
          Second
        </DropdownItem>
        <DropdownItem onSelect={() => setSelected("Third")}>Third</DropdownItem>
        <DropdownItem onSelect={() => setSelected("Fourth")}>
          Fourth
        </DropdownItem>
      </DropdownItems>
    </Dropdown>
  )
}
```
