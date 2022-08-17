import React from 'react'
import type { AppProps } from 'next/app'
import { useThemeContext } from '@/utils/useThemeContext'
import { themeLight, themeDark } from '@/styles/theme'
import { GlobalStyles } from '@/styles/global'
import { ThemeProvider } from '@emotion/react'
import Header from '@/components/Header'

function App({ Component, pageProps }: AppProps) {

  const [theme, toggleTheme] = useThemeContext()
  const themeMode = theme === 'light' ? themeLight : themeDark

  return (
    <React.StrictMode>
      <GlobalStyles />
      <ThemeProvider theme={themeMode}>
        <Header toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default App