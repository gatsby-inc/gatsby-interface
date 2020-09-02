import React from "react"

export const formatLogMessage = (message: string): JSX.Element[] => {
  return cutMessageToLines(message)
    .reduce(groupLinesToPart, [])
    .reduce(composeHeading, [])
    .map(partToHtml)
}

const cutMessageToLines = (message: string) => message.split(/\r?\n/)

const groupLinesToPart = (acc: string[][], item: string, idx: number) => {
  if (!acc.length) {
    acc.push([])
  }

  // we create a new part when there is an empty line or it's a second line
  // for cases when the is no visible parts in the cli message
  if (!item || idx === 1) {
    acc.push([])
  }

  if (item) {
    acc[acc.length - 1].push(item)
  }

  return acc
}

const composeHeading = (acc: string[][], item: string[], idx: number) => {
  // If the first line ends with ':' we assume the second line is a continuation of it
  const extendHeading =
    idx === 1 ? acc[0] && acc[0][0] && acc[0][0].endsWith(":") : false

  if (extendHeading) {
    acc[0] = [...acc[0], ...item]
  } else {
    acc.push(item)
  }

  return acc
}

const URL_REGEX = /(https?:\/\/([-a-zA-Z0-9@:%_+.~#?&//=]*))/

const establishLinks = (item: string) => {
  // make link active
  return item.replace(
    URL_REGEX,
    url =>
      `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
  )
}

const toInlineText = (item: string) => {
  // add space at the end of string to separate phrase from the following one
  return `${establishLinks(item)} `
}

const ERROR_POINTERS_REGEX = /\^+/
const LINE_PREFIX_REGEX = /^([\s|>]+\d*\s\|\s)|([\d|\s]+\|)/

const toCodeLine = (item: string) => {
  const styledItem = item
    // wrap "^^^^^^^^^^" in <em> for special styling
    .replace(ERROR_POINTERS_REGEX, pointers => `<em>${pointers}</em>`)
    // wrap line number prefix in <span> for special styling
    .replace(LINE_PREFIX_REGEX, linePrefix => `<span>${linePrefix}</span>`)

  return `${styledItem}\r\n`
}

// We assume that lines starting with '-' are list items
const LIST_MARKER_REGEX = /^-\s/

const toListItem = (item: string) => {
  const cleandItem = item.replace(LIST_MARKER_REGEX, "")

  return `<li>${establishLinks(cleandItem)}</li>`
}

const CODE_REGEX = /^([\s|>]+\d*\s\|\s)|([\d|\s]+\|)|GraphQL/

const partToHtml = (part: string[]) => {
  const isList = part.every(item => LIST_MARKER_REGEX.test(item))

  if (isList) {
    return (
      <ul dangerouslySetInnerHTML={{ __html: part.map(toListItem).join(``) }} />
    )
  }

  const isCode = part.every(item => CODE_REGEX.test(item))

  if (isCode) {
    return (
      <pre tabIndex={0}>
        <code
          dangerouslySetInnerHTML={{ __html: part.map(toCodeLine).join(``) }}
        />
      </pre>
    )
  }

  return (
    <p dangerouslySetInnerHTML={{ __html: part.map(toInlineText).join(``) }} />
  )
}
