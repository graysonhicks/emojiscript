import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import { Box } from "grommet"

import Header from "../Header/"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100vh;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box align="center" justify="center" pad="small" height="100vh">
        <Box width="large" as="main">
          {children}
        </Box>
      </Box>

      <footer>Footer</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
