'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

function applyTheme(theme: Theme) {
  const root = window.document.documentElement
  root.classList.toggle('light', theme === 'light')
  root.classList.toggle('dark', theme === 'dark')
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Dark is the default; an inline script in layout.tsx sets the class before
  // hydration to avoid a flash, so read the already-applied value here.
  const [theme, setThemeState] = useState<Theme>('dark')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null
    const initial: Theme = stored === 'light' || stored === 'dark' ? stored : 'dark'
    setThemeState(initial)
    applyTheme(initial)
  }, [])

  const setTheme = (next: Theme) => {
    setThemeState(next)
    applyTheme(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
