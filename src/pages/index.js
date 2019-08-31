import React, { useEffect, useState } from "react"
import sample from "lodash/sample"
import { Grommet } from "grommet"
import { grommet } from "grommet/themes"
import Result from "../components/Result/"
import Layout from "../components/Layout/"
import SEO from "../components/seo"
import TextInput from "../components/TextInput/"
import Emoji from "../components/Emoji/"
import Title from "../components/Title"

import emojis from "../utils/emojis"

const IndexPage = () => {
  const [input, setInput] = React.useState("")
  const [result, setTheResult] = useState([])

  useEffect(() => {
    // TODO: Find way of getting location of cursor so emoji can be
    // inserted in the middle, not just appended.
    const lastLetter = input[input.length - 1] || ""
    const lastLetterEmoji = sample(emojis[lastLetter.toLowerCase()])

    setTheResult(oldResult =>
      [
        ...oldResult,
        <Emoji key={oldResult.length} symbol={lastLetterEmoji}></Emoji>,
      ].slice(0, input.length)
    )
  }, [input])

  return (
    <Grommet theme={grommet}>
      <Layout>
        <SEO title="Home" />
        <Title />
        <TextInput value={input} setInput={setInput}></TextInput>
        <Result result={result}></Result>
      </Layout>
    </Grommet>
  )
}

export default IndexPage
