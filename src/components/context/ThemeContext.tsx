import React, {createContext} from 'react'
import theme from './theme'

type ThemeProvider = {
    children: React.ReactNode
}

const ThemeContext = createContext(theme)
const ThemeContextProvider = ({children}:ThemeProvider) => {
  return (
    <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContextProvider, ThemeContext}