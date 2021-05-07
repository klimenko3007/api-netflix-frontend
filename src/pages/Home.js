import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div
      className="home-contaier"
      style={{ backgroundImage: `url('./assets/home_background.jpg')` }}
    >
      <h1 className="headline-home">
        Welcome to Netflix data set!
      </h1>
      <h2 className="subheading-home">
        Check out the information about Netflix TV shows and movies!
      </h2>
      <div className="home-wrapper">
        <Link className="home-link" to="/TV-Shows">TV Shows</Link>
        <Link className="home-link" to="/Movies">Movies</Link>
      </div>

    </div>
  )
}
export default Home