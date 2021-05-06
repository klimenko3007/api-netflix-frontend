import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import TVShows from './pages/TVShows'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Movies">Movies</Link>
            </li>
            <li>
              <Link to="/TV-Shows">TV Shows</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/TV-Shows" exact>
            <TVShows />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
