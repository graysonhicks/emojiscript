import React from "react"
import { Text, Box } from "grommet"

const Emoji = ({ label, symbol }) => {
  return (
    <Box align="center" justify="center" direction="row">
      <Text
        role="img"
        aria-label={label || ""}
        aria-hidden={label ? "false" : "true"}
        size="60px"
        as="span"
        textAlign="center"
      >
        {symbol}
      </Text>
    </Box>
  )
}

export default Emoji
