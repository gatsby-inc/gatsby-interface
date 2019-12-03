// The logic is collected from answers to this SO question:
// https://stackoverflow.com/q/3007480
const isMobileSafari = () => {
  if (typeof window === `undefined`) {
    return false
  }
  const { userAgent } = window.navigator
  const isIOS = /(iPod|iPhone|iPad)/i.test(userAgent)
  const isWebkit = /AppleWebKit/i.test(userAgent)
  const isIOSSafari =
    isIOS && isWebkit && !/(Chrome|CriOS|OPiOS)/.test(userAgent)
  return isIOSSafari
}

export default isMobileSafari
