import hexRgb from 'hex-rgb'

export function convertHexToRgb(hex: string) {
  const rgb = hexRgb(hex)

  return `rgb(${rgb.red} ${rgb.green} ${rgb.blue} / var(--tw-bg-opacity))`
}
