## Legacy Buttons

These `Buttons` are available in `gatsby-interface` but are already deprecated. Do not use them!.

```javascript
import {
  PrimaryButton,
  SecondaryButton,
  CancelButton,
  SuccessButton,
  TextButton,
  PrimaryDeleteButton,
  SecondaryDeleteButton
} from "gatsby-interface"

function Component() => (
  // use <Button ... insted of
  <PrimaryButton>PrimaryButton</PrimaryButton>

  // use <Button variant="SECONDARY"... insted of
  <SecondaryButton>SecondaryButton</SecondaryButton>

  // use <Button variant="SECONDARY" tone="NEUTRAL"... insted of
  <CancelButton>CancelButton</CancelButton>

  // use <Button tone="SUCCESS"... insted of
  <SuccessButton>SuccessButton</SuccessButton>

  // use <Button variant="GHOST" tone="NEUTRAL"... instead of
  <TextButton>TextButton</TextButton>

  // use <Button tone="DANGER"... insted of
  <PrimaryDeleteButton>PrimaryDeleteButton</PrimaryDeleteButton>

  // use <Button variant="SECONDARY" tone="DANGER" ... instead of
  <SecondaryDeleteButton>SecondaryDeleteButton</SecondaryDeleteButton>
)
```
