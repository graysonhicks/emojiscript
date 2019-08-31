import React from "react"
import { Box } from "grommet"

const Result = ({ result }) => {
  return (
    <Box justify="center" width="large" direction="row" width="100%">
      {result}
    </Box>
  )
}

export default Result
