import { config as defaultConfig } from './libs/config'
import {
  gridContainer,
  hsColorInput,
  hsColorInputLabel,
  layoutRangeSlider,
  layoutRangeSliderLabel,
} from './libs/elements'
import { convertHexToRgb } from './libs/utils'

const handler = {
  set: function (target: any, property: any, value: any) {
    if (property === 'empty' && value === false) {
      console.log('disabled')
      hsColorInput!.classList
    } else if (property === 'empty' && value === false) {
      hsColorInput!.removeAttribute('disabled')
    }

    target[property] = value

    return true
  },
}

const config = { ...defaultConfig }
const proxy = new Proxy(config, handler)

export function appendNewSlots(n: number) {
  if (!config.empty) return

  gridContainer!.innerHTML = ''
  gridContainer!.style.gridTemplateColumns = `repeat(${n}, minmax(0, 1fr))`
  gridContainer!.style.gridTemplateRows = `repeat(${n}, minmax(0, 1fr))`

  for (let i = 1; i <= n * n; i++) {
    const slot = document.createElement('div')

    slot.addEventListener('mousedown', () => {
      slot.style.backgroundColor = config.pencilColor
      proxy.empty = false
    })
    slot.setAttribute('class', 'slot')
    gridContainer!.appendChild(slot)
  }
}

layoutRangeSlider!.addEventListener('input', () => {
  if (!config.empty) return

  const value = parseInt(layoutRangeSlider!.value)

  appendNewSlots(value)
  layoutRangeSliderLabel!.textContent = `${value} x ${value}`
})

hsColorInput!.addEventListener('input', () => {
  const value = hsColorInput!.value

  hsColorInputLabel!.textContent = value
  config.pencilColor = convertHexToRgb(value)
})

appendNewSlots(16)
