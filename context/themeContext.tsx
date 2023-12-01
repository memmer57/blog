"use client"

import React, { useEffect } from "react"
import { createContext, useContext, useState } from "react"

interface ThemeContextProps {
  theme: string
  setMode: (theme: string) => void
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "dark",
  setMode: () => {},
})

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark")

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    localTheme && setTheme(localTheme)
  }, [])

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode)
  }

  useEffect(() => {
    if (!theme) return
    document.body.classList.remove("light", "dark")
    document.body.classList.add(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
