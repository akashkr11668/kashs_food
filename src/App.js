import { GlobalStyle } from 'GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from 'styles/theme'
import { BrowserRouter as Router } from 'react-router-dom'
import { Chefs, Footer, Header, Hero, Reviews, Service } from 'components'
import Menu from 'components/Menu'
import { useState } from 'react'

function App () {
  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Header setTheme={changeTheme} />
        <Hero />
        <Menu id='Menu' />
        <Service id='Services' />
        <Reviews id='Reviews' />
        <Chefs />
        <Footer />
      </ThemeProvider>
    </Router>
  )
}

export default App
