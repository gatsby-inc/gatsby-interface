import "unfetch/polyfill"

global.___loader = {
  enqueue: jest.fn(),
}

const warn = console.warn
console.warn = (message, ...args) => {
  if (
    /(@reach\/dialog styles not found.|@reach\/menu-button styles not found.)/gi.test(
      message
    )
  ) {
    return
  }

  warn.apply(console, [message, ...args])
}

const error = console.error
console.error = (message, ...args) => {
  // TODO: Incompatibility issue with React 16.8, fixed in 16.9: https://github.com/testing-library/react-testing-library#suppressing-unnecessary-warnings-on-react-dom-168
  if (/Warning.*not wrapped in act/.test(message)) {
    return ""
  }

  if (/(Invalid prop|Failed prop type)/gi.test(message)) {
    throw new Error(message)
  }

  error.apply(console, [message, ...args])
}
