import React from "react"
import { Box, TextInput as GTextInput } from "grommet"

const TextInput = ({ input, setInput }) => {
  return (
    <Box
      margin={{ bottom: "large" }}
      direction="row"
      width="100%"
      justify="center"
    >
      <Box width="large">
        <GTextInput
          placeholder="Type your text here :)"
          value={input}
          onChange={event => setInput(event.target.value)}
        />
      </Box>
    </Box>
  )
}

export default TextInput
