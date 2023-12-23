/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import hexRgb from 'hex-rgb'
import { customCursor } from './elements'

export function convertHexToRgb(hex: string): string {
  const rgb = hexRgb(hex)

  return `rgb(${rgb.red} ${rgb.green} ${rgb.blue} / var(--tw-bg-opacity))`
}

export function getRandomRgb(): string {
  return `rgb(${Math.floor(Math.random() * 256)} ${Math.floor(
    Math.random() * 256
  )} ${Math.floor(Math.random() * 256)} / var(--tw-bg-opacity))`
}

export function resetDataStateOfBtns(): void {
  const btns = document.querySelectorAll<HTMLDivElement>(
    'button[data-state="chosen"'
  )

  btns.forEach((btn) => {
    btn.setAttribute('data-state', '')
  })
}

export function changeCursor(
  cursor: 'pencil-fill' | 'palette-line' | 'eraser-fill'
): void {
  customCursor?.setAttribute('icon', `ri:${cursor}`)
}

// Credit: https://gabriellazcano.com/blog/create-a-custom-cursor-that-follows-you-and-inverts-colors/
export function getDimensions(e: MouseEvent): void {
  customCursor!.style.top = `${e.clientY - 18}px` // -16px for the size of the icon
  customCursor!.style.left = `${e.clientX - 4}px`
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function throttle(callback: any, limit: number): () => void {
  let wait = false

  return function () {
    if (!wait) {
      // @ts-ignore
      // eslint-disable-next-line prefer-rest-params, prefer-spread
      callback.apply(null, arguments)

      wait = true

      setTimeout(function () {
        wait = false
      }, limit)
    }
  }
}
