import React from "react"
import { Box, TextInput as GTextInput } from "grommet"

const TextInput = ({ input, setInput }) => {
  return (
    <Box width="large" margin={{ right: "small" }}>
      <GTextInput
        placeholder="Type your text here :)"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </Box>
  )
}

export default TextInput
