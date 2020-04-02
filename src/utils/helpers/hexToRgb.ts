export function hexToRGB(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

export function hexToRGBA(hexColor: string, opacity: number, isCssVar = false) {
  let hexStringToParse = hexColor

  if (isCssVar) {
    const hexMatch = hexColor.match(/#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i)
    if (hexMatch && hexMatch[0]) {
      hexStringToParse = hexMatch[0]
    }
  }

  console.log({ hexColor, isCssVar, hexStringToParse })

  const rgbColor = hexToRGB(hexStringToParse)
  if (!rgbColor) {
    return hexColor
  }
  return `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${opacity})`
}
