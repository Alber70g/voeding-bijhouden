import { h } from 'hyperapp'
export const renderVoeding = (v) => (
  <span>
    {v.start.toLocaleString()} -{' '}
    {new Date(v.start.getTime() + v.duur * 1000 * 60).toLocaleTimeString()}{' '}
    <br />
    {v.duur} minuten
  </span>
)

export const setStyle = (styles) => (element) => {
  element.style = styles
}

export const getTime = (date) => `${date.getHours()}:${date.getMinutes()}`

export const idx = (exists, apply, prop) => (exists ? apply(prop || exists) : '')

export const guid = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}
