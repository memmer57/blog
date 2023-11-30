"use client"

import "./Navbar.scss"
import Link from "next/link"
import { SunFill, MoonFill } from "react-bootstrap-icons"
import { useTheme } from "@/context/themeContext"

const Navbar = () => {
  const { theme, setMode } = useTheme()

  return (
    <nav>
      <div className="nav-content">
        <Link href="/" className="logo">
          Memmerovo
        </Link>
        <div className="nav-links">
          <div className="nav-link">
            <Link href="/">Home</Link>
          </div>
          <div className="nav-link">
            <button
              className="theme-toggle"
              onClick={() => {
                setMode(theme === "light" ? "dark" : "light")
              }}
            >
              {theme === "dark" ? (
                <MoonFill className="theme-icon" />
              ) : (
                <SunFill className="theme-icon" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
