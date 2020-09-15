import React from "react"
import Markdown from "markdown-to-jsx"

const isLastChar = (char: string, str: string) => str[str.length - 1] === char

// Check for "1 |" presence to create a code block
// Stores every last index owning a " |" string
// to close the code block at the good position
// IMPORTANT: mutates the stringPartsByLines array
const formatCodeBlocks = (stringPartsByLines: string[]) => {
  let lastIndexFound = -1
  for (let i = 0; i < stringPartsByLines.length; i++) {
    const str = stringPartsByLines[i]

    if (str.includes(`1 |`)) {
      stringPartsByLines[i] = "```" + str
    }

    if (str.includes(` |`)) {
      lastIndexFound = i
    }
  }

  if (lastIndexFound > -1) {
    stringPartsByLines[lastIndexFound] =
      stringPartsByLines[lastIndexFound] + "```"
  }

  return stringPartsByLines.join("\n")
}

export interface FormattedMessageProps {
  rawMessage: string
}

export const FormattedMessage = ({ rawMessage }: FormattedMessageProps) => {
  const stringPartsByLines = rawMessage.split("\n")
  const message = formatCodeBlocks(stringPartsByLines)

  // Markdown formatter treats strings without line break as spans, we need to wrap them in a <p></p>
  // to make it act as a line title
  const isOneLine = stringPartsByLines.length === 1
  if (isOneLine) {
    return (
      <p>
        <Markdown>{message}</Markdown>
      </p>
    )
  }

  const firstLine = stringPartsByLines[0]

  // Line breaking to create a title at the first ":" met
  if (firstLine.includes(":")) {
    return <Markdown>{message.replace(`:`, `:\n\n`)}</Markdown>
  }

  // Line breaking to create a title when the first line ends with "."
  if (isLastChar(".", firstLine)) {
    const [_, ...actual] = stringPartsByLines
    const newFirstLine = firstLine.substring(0, firstLine.length - 1)
    const nextMessage = [`${newFirstLine}.\n\n`, ...actual].join("\n")

    return <Markdown>{nextMessage}</Markdown>
  }

  return <Markdown>{message}</Markdown>
}
