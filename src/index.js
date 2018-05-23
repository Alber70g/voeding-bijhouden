import { h, app } from 'hyperapp'
import { newVoedingView, newVoedingState, newVoedingActions } from './newVoeding'
import { renderVoeding } from './utils'

const state = {
  voedingen: [],
  newVoeding: newVoedingState,
  views: {
    newVoeding: false,
    debug: false,
  },
}

const actions = {
  views: {
    newVoeding: () => ({ newVoeding: true }),
  },
  newVoeding: newVoedingActions,
  addNewVoeding: () => (state, actions) => {
    setTimeout(() => {
      actions.saveLocalstorage()
    })
    return {
      views: {
        ...state.views,
        newVoeding: false,
      },
      voedingen: [
        ...state.voedingen,
        { start: state.newVoeding.start, duur: state.newVoeding.duur },
      ],
      newVoeding: newVoedingState,
    }
  },
  loadLocalstorage: (voedingenString) => {
    if (voedingenString) {
      const voedingen = JSON.parse(voedingenString).voedingen
      const voedingenWithDate = voedingen.map((v) => ({ ...v, start: new Date(v.start) }))
      return { voedingen: voedingenWithDate }
    }
  },
  saveLocalstorage: () => (state) => {
    localStorage.setItem('voedingen', JSON.stringify({ voedingen: state.voedingen }))
  },
}

const view = (state, actions) => (
  <div>
    <h1>Voedingen</h1>
    <ul>{state.voedingen.map((v) => <li>{renderVoeding(v)}</li>)}</ul>
    {state.views.newVoeding ? (
      newVoedingView(state, actions)
    ) : (
      <button onclick={actions.views.newVoeding}>Nieuwe voeding</button>
    )}
    {state.views.debug ? <pre>{JSON.stringify(state, null, 2)}</pre> : ''}
  </div>
)

const appActions = app(state, actions, view, document.body)

appActions.loadLocalstorage(localStorage.getItem('voedingen'))
