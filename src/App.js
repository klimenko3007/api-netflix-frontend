import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import TVShows from './pages/TVShows'
import ShowPage from './pages/ShowPage'
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <div className="content-container">
        <Header />
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
          <Route path="/TV-Shows/:id" exact>
            <ShowPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
