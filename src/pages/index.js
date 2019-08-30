import React, { useEffect, useState } from "react"
import sample from "lodash/sample"
import Result from "../components/Result/"
import Layout from "../components/Layout/"
import SEO from "../components/seo"
import TextInput from "../components/TextInput/"
import Emoji from "../components/Emoji/"

import emojis from "../utils/emojis"

const IndexPage = () => {
  const [input, setInput] = React.useState("")
  const [result, setTheResult] = useState([])

  useEffect(() => {
    setInput(input)
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
    <Layout>
      <SEO title="Home" />
      <TextInput value={input} setInput={setInput}></TextInput>
      <Result result={result}></Result>
    </Layout>
  )
}

export default IndexPage
