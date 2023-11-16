export type Config = {
  empty: boolean
  rainbowMode: boolean
  eraserEnabled: boolean
  pencilColor: string
}

export const config: Config = {
  empty: true,
  rainbowMode: false,
  eraserEnabled: false,
  pencilColor: 'rgb(37 99 235 / var(--tw-bg-opacity))',
}
