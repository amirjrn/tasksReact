import { useState } from 'react'
function useTempState({ initialState, timeout }) {
  const [state, setState] = useState(initialState)
  function setTempState(newState) {
    setState((prevState) => [...prevState, newState])
    setTimeout(
      () =>
        setState((prevState) => {
          var newState = [...prevState]
          newState.shift()
          return newState
        }),
      timeout
    )
  }
  return [state, setTempState]
}
export default useTempState
