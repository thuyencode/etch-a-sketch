import 'remixicon/fonts/remixicon.css'
import {
  clearAllBtn,
  eraserBtn,
  gridContainer,
  hsColorInput,
  hsColorInputLabel,
  layoutRangeSlider,
  layoutRangeSliderLabel,
  pencilBtn,
  rainbowBtn,
} from './libs/elements'
import {
  convertHexToRgb,
  getRandomRgb,
  resetDataStateOfBtns,
} from './libs/utils'

let isMouseDown = false

document.body.addEventListener('mousedown', () => (isMouseDown = true))
document.body.addEventListener('mouseup', () => (isMouseDown = false))

const defaultConfig = {
  empty: true,
  rainbowMode: false,
  eraserEnabled: false,
  pencilColor: 'rgb(37 99 235 / var(--tw-bg-opacity))',
}

const config = { ...defaultConfig }

const handler = {
  set: function (target: any, property: any, value: any) {
    if (property === 'empty' && value === false) {
      layoutRangeSlider!.setAttribute('disabled', 'true')
    } else if (property === 'empty' && value === true) {
      layoutRangeSlider!.removeAttribute('disabled')
    }

    target[property] = value

    return true
  },
}

const proxy = new Proxy<typeof config>(config, handler)

function appendNewSlots(n: number) {
  if (!config.empty) return

  function changeBg(e: MouseEvent) {
    if (e.type === 'mouseover' && !isMouseDown) {
      return
    }

    if (config.eraserEnabled) {
      ;(e.target as HTMLDivElement).style.backgroundColor = 'white'
    } else {
      ;(e.target as HTMLDivElement).style.backgroundColor = !config.rainbowMode
        ? config.pencilColor
        : getRandomRgb()
    }

    proxy.empty = false
  }

  gridContainer!.innerHTML = ''
  gridContainer!.style.gridTemplateColumns = `repeat(${n}, minmax(0, 1fr))`
  gridContainer!.style.gridTemplateRows = `repeat(${n}, minmax(0, 1fr))`

  for (let i = 1; i <= n * n; i++) {
    const slot = document.createElement('div')

    slot.addEventListener('mouseover', changeBg)
    slot.addEventListener('mousedown', changeBg)
    slot.setAttribute('class', 'slot')

    gridContainer!.appendChild(slot)
  }
}

function clearAll() {
  gridContainer!.childNodes.forEach(
    (slot) => ((slot as HTMLDivElement).style.backgroundColor = 'white'),
  )
  proxy.empty = true
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

clearAllBtn!.addEventListener('click', () => clearAll())

pencilBtn!.addEventListener('click', () => {
  resetDataStateOfBtns()

  pencilBtn!.setAttribute('data-state', 'chosen')

  config.rainbowMode = false
  config.eraserEnabled = false
})

rainbowBtn!.addEventListener('click', () => {
  resetDataStateOfBtns()

  rainbowBtn!.setAttribute('data-state', 'chosen')

  config.rainbowMode = true
  config.eraserEnabled = false
})

eraserBtn!.addEventListener('click', () => {
  resetDataStateOfBtns()

  eraserBtn!.setAttribute('data-state', 'chosen')

  config.eraserEnabled = true
  config.rainbowMode = false
})

// Run this function first
appendNewSlots(16)
