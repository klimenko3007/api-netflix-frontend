import React from 'react'

import TVShowThumb from './TVShowThumb'

const SHOWS_PER_PAGE = 50

const TVShowsComponent = ({ tvShows, pageNumber }) => {
  const startIndex = (pageNumber - 1)*SHOWS_PER_PAGE
  const selectedShows = tvShows.slice(startIndex, startIndex+SHOWS_PER_PAGE)

  return (
    <div>
      <h1>TV Shows</h1>
      {selectedShows.map(show => <TVShowThumb key={show.show_id} show={show} />)}
    </div>
  )
}
export default TVShowsComponent