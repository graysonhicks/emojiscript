import React from "react"
import { animated, useTransition } from "react-spring"
import { Box } from "grommet"

const AnimatedBox = animated(Box)

const Result = ({ result }) => {
  const height = "60px"
  const transitions = useTransition(result, item => item.key, {
    from: {
      opacity: 0,
      position: "absolute",
      transform: "scale(0.9)",
    },
    enter: {
      opacity: 1,
      position: "relative",
      transform: "scale(1)",
    },
    leave: {
      position: "absolute",
      opacity: 0,
      transform: "scale(0.7)",
      zIndex: -1,
    },
  })
  return (
    <Box
      justify="center"
      height="small"
      overflow="hidden"
      align="center"
      width="large"
      direction="row"
      wrap={true}
    >
      {result.length
        ? transitions.map(({ item, props, key }) => (
            <AnimatedBox key={key} style={props}>
              {item}
            </AnimatedBox>
          ))
        : "Result here..."}
    </Box>
  )
}

export default Result
