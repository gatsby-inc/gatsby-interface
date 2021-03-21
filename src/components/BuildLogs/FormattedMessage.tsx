import * as React from "react"
import Markdown from "markdown-to-jsx"

// Check for "1 |" presence to create a code block
// Stores every last index owning a " |" string
// to close the code block at the good position
//
// Example code block:
//
// 15 |           frontmatter {
// 16 |             date(formatString: $invaludVar)
//    |                                ^
//
// Example with a stacktrace:
//
// 1 | agilityNEW-RightOrLeftCaseStudyTestimonial-Dev
//   | ^'. Stacktrace was 'GraphQLError: Syntax Error: Unexpected Name "agilityNEW"
//     at syntaxError (/usr/src/app/www/node_modules/graphql/error/syntaxError.js:15:10)
//     at Parser.unexpected (/usr/src/app/www/node_modules/graphql/language/parser.js:1463:41)
//
const formatCodeBlocks = (stringPartsByLines: string[]) => {
  let lastIndexFound = -1
  let codeBlockOpen = false

  const nextLines = stringPartsByLines.map((orgStr, index) => {
    // transform path strings into <code /> blocks
    const str = orgStr
      .replace(/(')(\S*\/\S*)(')/gi, "`$2`")
      .replace(/(")(\S*\/\S*)(")/gi, "`$2`")

    if (
      str.match(/(\s|\t)*\d+\s\|/) ||
      str.match(/(\s|\t)*\|(\s|\t)*\^/) ||
      // There is no leading `|` if there is a stacktrace. To limit false
      // positives we only check for a stacktrace if we are already inside
      // a code block.
      (codeBlockOpen && str.match(/(\s|\t)at \w+/))
    ) {
      if (codeBlockOpen) {
        lastIndexFound = index
      } else {
        codeBlockOpen = true
        return "```" + str
      }
    } else if (codeBlockOpen) {
      // Close the current code block if the line doesn't match anymore
      codeBlockOpen = false
      return "```" + str
    }

    return str
  })

  if (lastIndexFound > -1) {
    nextLines[lastIndexFound] = nextLines[lastIndexFound] + "```"
  }

  return nextLines.join("\n")
}

export interface FormattedMessageProps {
  rawMessage: string
}

export const FormattedMessage = ({ rawMessage }: FormattedMessageProps) => {
  const stringPartsByLines = rawMessage.split("\n")
  const message = formatCodeBlocks(stringPartsByLines)

  // Markdown formatter treats strings without line break as spans, we need to wrap them in a
  // <div><p></p></div> to keep the same structure as a multi line message.
  const isOneLine = stringPartsByLines.length === 1
  if (isOneLine) {
    return (
      <div>
        <p>
          <Markdown>{message}</Markdown>
        </p>
      </div>
    )
  }

  const firstLine = stringPartsByLines[0]

  // Line breaking to create a title at the first ":" met
  if (firstLine.endsWith(":")) {
    return <Markdown>{message.replace(`:`, `:\n\n`)}</Markdown>
  }

  // Line breaking to create a title when the first line ends with "."
  if (firstLine.endsWith(".")) {
    const [_, ...actual] = stringPartsByLines
    const newFirstLine = firstLine.substring(0, firstLine.length - 1)
    const nextMessage = [`${newFirstLine}.\n\n`, ...actual].join("\n")

    return <Markdown>{nextMessage}</Markdown>
  }

  return <Markdown>{message}</Markdown>
}
