import '../styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = typeof window !== 'undefined' && window.localStorage.getItem('theme')
    if (saved) setTheme(saved)
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light')
      window.localStorage.setItem('theme', theme)
    }
  }, [theme])

  return <Component {...pageProps} theme={theme} setTheme={setTheme} />
}
