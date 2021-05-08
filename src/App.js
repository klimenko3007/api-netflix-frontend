import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import TVShows from './pages/TVShows'
import ShowPage from './pages/ShowPage'
import Header from "./components/Header";

import {movieIdLink} from './reusables/urls'
import {showIDLink} from './reusables/urls'

const App = () => {
  return (
    <Router>
      <div className="content-container">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/movies/:id">
            <ShowPage link={movieIdLink}/>
          </Route>
          <Route path="/TV-Shows">
            <TVShows />
          </Route>
          <Route path="/TV-Shows/:id">
            <ShowPage link={showIDLink}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
