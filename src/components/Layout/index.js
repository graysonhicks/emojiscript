import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import { Box } from "grommet"

import Header from "../Header/"
import Footer from "../Footer"

const GlobalStyle = createGlobalStyle`
  html, body {
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

      <Box height="100vh" width="100%">
        <Header siteTitle={data.site.siteMetadata.title} />
        <Box width="100%" height="large" as="main">
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
