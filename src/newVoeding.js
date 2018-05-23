import { h } from 'hyperapp'
import { renderVoeding, setStyle, getTime, idx } from './utils'

export const newVoedingState = {
  startPristine: true,
  duurPristine: true,
}

export const newVoedingActions = {
  setKant: (kant) => ({ kant }),
  setInitialState: () => ({ start: new Date(), duur: 15 }),
  addStartTime: (amount) => (state) => {
    const newStartTime = new Date(state.start.getTime() + amount * 1000 * 60)
    if (state.duurPristine) {
      return {
        startPristine: false,
        duur: (new Date() - newStartTime) / 1000 / 60,
        start: newStartTime,
      }
    } else {
      return {
        startPristine: false,
        start: newStartTime,
      }
    }
  },
  setDuurTime: (time) => (state) => {
    if (state.startPristine) {
      return {
        duurPristine: false,
        // reduce the 'duur' from the current time when start is unchanged
        start: new Date(new Date().getTime() - time * 1000 * 60),
        duur: time,
      }
    } else {
      return {
        duurPristine: false,
        duur: time,
      }
    }
  },
}

// state and actions are the full state and actions, not the partials
export const newVoedingView = (state, actions) => (
  <div oncreate={actions.newVoeding.setInitialState}>
    <h2>Nieuwe voeding</h2>
    <p>
      <button
        class={state.newVoeding.kant === 'links' ? 'selected' : ''}
        onclick={() => actions.newVoeding.setKant('links')}
      >
        Links
      </button>
      <button
        class={state.newVoeding.kant === 'rechts' ? 'selected' : ''}
        onclick={() => actions.newVoeding.setKant('rechts')}
      >
        Rechts
      </button>
    </p>
    <p>
      <label oncreate={setStyle('display: block;')}>
        Duur: <strong>{state.newVoeding.duur} minuten</strong>
      </label>
      <ul>
        <button onclick={() => actions.newVoeding.setDuurTime(5)}>5</button>
        <button onclick={() => actions.newVoeding.setDuurTime(10)}>10</button>
        <button onclick={() => actions.newVoeding.setDuurTime(15)}>15</button>
        <button onclick={() => actions.newVoeding.setDuurTime(20)}>20</button>
      </ul>
      <input type="number" onblur={(e) => actions.newVoeding.setDuurTime(e.target.value)} />
    </p>
    <p>
      <label oncreate={setStyle('display: block;')}>
        Start tijd <strong>{idx(state.newVoeding.start, getTime)}</strong>
      </label>
      <ul>
        <button onclick={() => actions.newVoeding.addStartTime(-5)}>-5</button>
        <button onclick={() => actions.newVoeding.addStartTime(-1)}>-1</button>
        <button onclick={() => actions.newVoeding.addStartTime(1)}>+1</button>
        <button onclick={() => actions.newVoeding.addStartTime(5)}>+5</button>
      </ul>
    </p>
    <p>{idx(state.newVoeding.start, renderVoeding, state.newVoeding)}</p>
    <p>
      <button onclick={actions.addNewVoeding}>Voeding toevoegen</button>
    </p>
  </div>
)
