import React from "react"
import { Text } from "grommet"

import ImageEmoji from "../ImageEmoji"

const Emoji = ({ label, symbol }) => {
  if (symbol.charAt(0) === "#") {
    return <ImageEmoji symbol={symbol} label={label} />
  }

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
