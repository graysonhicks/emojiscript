import React from "react"
import { Box } from "grommet"

const Result = ({ result }) => {
  return (
    <Box
      justify="center"
      width="large"
      direction="row"
      width="100%"
      animation="slideUp"
      wrap="true"
    >
      {result.length ? result : "Result here..."}
    </Box>
  )
}

export default Result
