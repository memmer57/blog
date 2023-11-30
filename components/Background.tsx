"use client"

import "./DarkBackground.scss"
import "./LightBackground.scss"
import { useTheme } from "@/context/themeContext"

export default function Background() {
  const { theme } = useTheme()
  if (theme === "dark") {
    return (
      <div className="dark-background">
        <div className="stars">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="star" />
          ))}
        </div>
      </div>
    )
  } else {
    return <div className="light-background" />
  }
}
