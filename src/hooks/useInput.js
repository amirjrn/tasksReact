import { useState } from 'react'
function useInput(name) {
  const [input, setInput] = useState(name)
  const handleChange = (e) => setInput(e.currentTarget.value)
  return [input, handleChange]
}
export default useInput
