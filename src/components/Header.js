import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="nav-container">
          <ul className="nav-container">
            <li >
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li>
              <Link className="nav-link" to="/Movies">Movies</Link>
            </li>
            <li>
              <Link className="nav-link" to="/TV-Shows">TV Shows</Link>
            </li>
          </ul>
        </nav>
  )
}
export default Header