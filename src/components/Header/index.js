import React from "react"
import { Box, Text, ResponsiveContext } from "grommet"
import sample from "lodash/sample"
import Result from "../Result"
import Emoji from "../Emoji"

import emojis from "../../utils/emojis"

const getLetterEmoji = letter => {
  const safeLtr = letter.toLowerCase()
  return (
    <Emoji key={sample(emojis[safeLtr])} symbol={sample(emojis[safeLtr])} />
  )
}

const moji = [
  getLetterEmoji("m"),
  getLetterEmoji("o"),
  getLetterEmoji("j"),
  getLetterEmoji("i"),
]

const Header = () => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          direction="row"
          background="brand"
          width="100%"
          justify={size === "small" ? "center" : "start"}
        >
          <Text weight="bold">
            <Box pad="small">
              <Result
                result={moji}
                align="start"
                justify="start"
                height="auto"
                width="auto"
              />
            </Box>
          </Text>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default Header
