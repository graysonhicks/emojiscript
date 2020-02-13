import React from "react"
import { Box, TextInput as GTextInput, ResponsiveContext } from "grommet"

const TextInput = ({ input, setInput }) => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          width={size === "small" ? "95%" : "large"}
          margin={{
            right: size === "small" ? "auto" : "small",
            left: size === "small" ? "auto" : 0,
          }}
          height={size === "small" ? "xsmall" : "auto"}
        >
          <GTextInput
            placeholder="Type your text here :)"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default TextInput
