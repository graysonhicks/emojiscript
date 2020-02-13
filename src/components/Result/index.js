import React from "react"
import { animated, useTransition } from "react-spring"
import { Box, Text } from "grommet"

const AnimatedBox = animated(Text)

const Result = ({ result, ...rest }) => {
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
      justify={rest.justify || "center"}
      height={rest.height || "small"}
      overflow="hidden"
      align={rest.align || "center"}
      width={rest.width || "large"}
      direction="row"
      wrap={true}
    >
      {result.length
        ? transitions.map(({ item, props, key }) =>
            item === " " ? (
              <Box width="60px" />
            ) : (
              <AnimatedBox key={key} style={props}>
                {item}
              </AnimatedBox>
            )
          )
        : "Result here..."}
    </Box>
  )
}

export default Result
