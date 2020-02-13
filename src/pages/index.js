import React, { useState } from "react"
import sample from "lodash/sample"
import { animated, useSpring, useTransition } from "react-spring"
import { Grommet, Button, Box, ResponsiveContext } from "grommet"
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
  const fadeButtonDesktop = useSpring({
    opacity: result.length > 0 || input.length > 0 ? 1 : 0,
  })

  const fadeButton = useTransition(
    result.length > 0 || input.length > 0 ? 1 : 0,
    null,
    {
      from: {
        opacity: 0,
        display: "none",
      },
      enter: {
        opacity: 1,
        display: "flex",
      },
      leave: {
        opacity: 0,
      },
    }
  )

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
        <ResponsiveContext.Consumer>
          {size => (
            <>
              <Box
                direction={size === "small" ? "column" : "row"}
                justify="center"
                align="center"
              >
                <TextInput input={input} setInput={setInput} />
                <Box direction="row">
                  <Button
                    label="Emojify"
                    fill="vertical"
                    onClick={handleEmoji}
                    margin={{ right: "small" }}
                  />
                  {size === "small" ? (
                    fadeButton.map(({ item, key, props }) =>
                      item ? (
                        <ClearButton
                          key={key}
                          style={props}
                          label="Clear"
                          fill="vertical"
                          color="neutral-3"
                          onClick={clearResult}
                          disabled={result.length === 0 && input.length === 0}
                        />
                      ) : null
                    )
                  ) : (
                    <ClearButton
                      style={fadeButtonDesktop}
                      label="Clear"
                      fill="vertical"
                      color="neutral-3"
                      onClick={clearResult}
                      disabled={result.length === 0 && input.length === 0}
                    />
                  )}
                </Box>
              </Box>
              <Box align="center" pad="medium">
                <Result result={result}></Result>
              </Box>
            </>
          )}
        </ResponsiveContext.Consumer>
      </Layout>
    </Grommet>
  )
}

export default IndexPage
