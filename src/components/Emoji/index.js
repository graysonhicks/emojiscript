import React from "react"
import { Text } from "grommet"

const Emoji = ({ label, symbol }) => {
  return (
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
  )
}

export default Emoji
