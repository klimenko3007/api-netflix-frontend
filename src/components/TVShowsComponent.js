import React from 'react'

import TVShowThumb from './TVShowThumb'

import { SHOWS_PER_PAGE } from '../reusables/constants'

const TVShowsComponent = ({ tvShows, pageNumber }) => {
  const startIndex = (pageNumber - 1)*SHOWS_PER_PAGE
  const selectedShows = tvShows.slice(startIndex, startIndex+SHOWS_PER_PAGE)

  return (
    <div>
      {selectedShows.map(show => <TVShowThumb key={show.show_id} show={show} />)}
    </div>
  )
}
export default TVShowsComponent