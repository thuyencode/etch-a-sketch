import hexRgb from 'hex-rgb'

export function convertHexToRgb(hex: string) {
  const rgb = hexRgb(hex)

  return `rgb(${rgb.red} ${rgb.green} ${rgb.blue} / var(--tw-bg-opacity))`
}

export function getRandomRgb() {
  return `rgb(${Math.floor(Math.random() * 256)} ${Math.floor(
    Math.random() * 256,
  )} ${Math.floor(Math.random() * 256)} / var(--tw-bg-opacity))`
}

export function resetDataStateOfBtns() {
  const btns = document.querySelectorAll<HTMLDivElement>(
    'button[data-state="chosen"',
  )

  btns.forEach((btn) => btn.setAttribute('data-state', ''))
}
