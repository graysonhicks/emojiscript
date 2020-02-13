import React, { useState, useEffect } from "react"
import { Box, Image } from "grommet"

const ImageEmoji = ({ label, symbol }) => {
  const src = symbol.substr(1)
  const [image, setImage] = useState(null)

  useEffect(() => {
    const dynamicImport = import(
      // eslint-disable-next-line max-len
      /* webpackChunkName: "image-emojis" */ /* webpackMode: "lazy" */ `!file-loader!./images/${src}`
    )

    dynamicImport
      .then(image => {
        setImage(image.default)
      })
      .catch(reason => reason)
  })

  return (
    <Box width="60px" height="60px">
      <Image
        src={image}
        alt={label}
        aria-label={label || ""}
        aria-hidden={label ? "false" : "true"}
        fit="contain"
      />
    </Box>
  )
}

export default ImageEmoji
