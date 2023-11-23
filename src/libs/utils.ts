import hexRgb from 'hex-rgb'
import { customCursor } from './elements'

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

export function changeCursor(
  cursor: 'pencil-fill' | 'palette-line' | 'eraser-fill',
) {
  customCursor!.setAttribute('icon', `ri:${cursor}`)
}

// Credit: https://gabriellazcano.com/blog/create-a-custom-cursor-that-follows-you-and-inverts-colors/
export function getDimensions(e: MouseEvent) {
  customCursor!.style.top = `${e.clientY - 18}px` // -16px for the size of the icon
  customCursor!.style.left = `${e.clientX - 4}px`
}

export function throttle(callback: any, limit: number) {
  let wait = false

  return function () {
    if (!wait) {
      callback.apply(null, arguments)

      wait = true

      setTimeout(function () {
        wait = false
      }, limit)
    }
  }
}
