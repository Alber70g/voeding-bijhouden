import { h } from 'hyperapp'
export const renderVoeding = (v) => (
  <span>
    {v.start.toLocaleString()} -{' '}
    {new Date(v.start.getTime() + v.duur * 1000 * 60).toLocaleTimeString()}{' '}
    <sup>{v.duur} minuten</sup>
  </span>
)

export const setStyle = (styles) => (element) => {
  element.style = styles
}

export const getTime = (date) => `${date.getHours()}:${date.getMinutes()}`

export const idx = (exists, apply, prop) => (exists ? apply(prop || exists) : '')
