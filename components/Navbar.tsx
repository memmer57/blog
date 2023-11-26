import "./Navbar.scss"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <div className="nav-content">
        <Link href="/" className="logo">
          Memmerovo
        </Link>
      </div>
      {/*
      <div className="nav-links">
        <div className="nav-link">
          <Link href="/">Home</Link>
        </div>
      </div>
      */}
    </nav>
  )
}

export default Navbar
