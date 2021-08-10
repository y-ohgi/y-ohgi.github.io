import React from 'react'
import { Box, CssBaseline } from "@material-ui/core"
import Header from "./components/header"
import About from './components/about'
import Links from './components/links'
import Price from './components/price'
import Footer from './components/footer'

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Box mt={9}>
        <About />
        <Links />
        <Box mt={3}>
          <Price />
        </Box>
        <Footer />
      </Box>
    </React.Fragment>
  )
}

export default App
