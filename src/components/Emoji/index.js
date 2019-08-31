import React from "react"
import { Text, Box } from "grommet"

const Emoji = ({ label, symbol }) => (
  <Box
    animation={{
      type: "zoomIn",
      delay: 0,
      duration: 300,
      size: "large",
    }}
    align="center"
    justify="center"
    direction="row"
  >
    <Text
      role="img"
      aria-label={label || ""}
      aria-hidden={label ? "false" : "true"}
      size="60px"
      as="span"
    >
      {symbol}
    </Text>
  </Box>
)
export default Emoji
