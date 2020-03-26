export const copyToClipboard = str => {
  const clipboard = window.navigator.clipboard
  /*
   * fallback to older browsers (including Safari)
   * if clipboard API not supported
   */
  if (!clipboard || typeof clipboard.writeText !== `function`) {
    const textarea = document.createElement(`textarea`)
    textarea.value = str
    textarea.setAttribute(`readonly`, true)
    textarea.setAttribute(`contenteditable`, true)
    textarea.style.position = `absolute`
    textarea.style.left = `-9999px`
    document.body.appendChild(textarea)
    textarea.select()
    const range = document.createRange()
    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
    textarea.setSelectionRange(0, textarea.value.length)
    document.execCommand(`copy`)
    document.body.removeChild(textarea)

    return Promise.resolve(true)
  }

  return clipboard.writeText(str)
}

/*
 @reach/menu-button base styles
*/

export const ReachMenuCss = {
  display: `block`,
  position: `absolute`,
}

export const ReachMenuListCss = {
  display: `block`,
  whiteSpace: `nowrap`,
  border: `solid 1px hsla(0, 0%, 0%, 0.25)`,
  background: `hsla(0, 100%, 100%, 0.99)`,
  outline: `none`,
  padding: `1rem 0`,
  fontSize: `85%`,
}

export const ReachMenuItemCss = {
  display: `block`,
  userSelect: `none`,
  cursor: `pointer`,

  /* a */
  color: `inherit`,
  font: `inherit`,
  textDecoration: `initial`,

  /* both */
  padding: `5px 20px`,
  "&[data-selected]": {
    background: `hsl(211, 81%, 36%)`,
    color: `white`,
    outline: `none`,
  },
}
