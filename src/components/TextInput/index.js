import React from "react"
import { TextInput as GTextInput } from "grommet"

const TextInput = ({ input, setInput }) => {
  return (
    <GTextInput
      placeholder="type here"
      value={input}
      onChange={event => setInput(event.target.value)}
    />
  )
}

export default TextInput
