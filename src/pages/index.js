import React, { useState } from "react"
import sample from "lodash/sample"
import { animated, useSpring } from "react-spring"
import { Grommet, Button, Box } from "grommet"
import { grommet } from "grommet/themes"
import Result from "../components/Result/"
import Layout from "../components/Layout/"
import SEO from "../components/seo"
import TextInput from "../components/TextInput/"
import Emoji from "../components/Emoji/"
import Title from "../components/Title"

import emojis from "../utils/emojis"

const ClearButton = animated(Button)

const IndexPage = () => {
  const [input, setInput] = React.useState("")
  const [result, setTheResult] = useState([])
  const fadeButton = useSpring({
    opacity: result.length > 0 || input.length > 0 ? 1 : 0,
  })

  const handleEmoji = () => {
    const emojiArray = []
    for (let i = 0; i < input.length; i++) {
      const element = input[i]
      const letterEmoji = sample(emojis[element.toLowerCase()])
      emojiArray.push(<Emoji key={`${letterEmoji}${i}`} symbol={letterEmoji} />)
    }
    setTheResult(emojiArray)
  }

  const clearResult = () => {
    setTheResult([])
    setInput("")
  }

  return (
    <Grommet theme={grommet}>
      <Layout>
        <SEO title="Home" />
        <Title />
        <Box direction="row" justify="center" align="center">
          <TextInput input={input} setInput={setInput} />
          <Button
            label="Emojify"
            fill="vertical"
            onClick={handleEmoji}
            margin={{ right: "small" }}
          />

          <ClearButton
            style={fadeButton}
            label="Clear"
            fill="vertical"
            color="neutral-3"
            onClick={clearResult}
            disabled={result.length == 0 && input.length == 0}
          />
        </Box>
        <Box align="center" pad="medium">
          <Result result={result}></Result>
        </Box>
      </Layout>
    </Grommet>
  )
}

export default IndexPage
