import React, { useState, useEffect } from 'react'

import { generateURL } from '../reusables/urls'
import { SHOWS_PER_PAGE } from '../reusables/constants'

import TVShowsComponent from '../components/TVShowsComponent'
import Pagination from '../components/Pagination'
import Form from "../components/Form";

const TVShows = () => {
  const initialQueries = [
    { name: "year", value: undefined },
    { name: "director", value: undefined },
    { name: "country", value: undefined },
    { name: "cast", value: undefined },
    { name: "yearAfter", value: undefined },
    { name: "yearBefore", value: undefined }
  ]
  const [pageNumber, setPageNumber] = useState(1)
  const [tvShows, setTVShows] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [queries, setQueries] = useState(initialQueries)

  useEffect(() => {
    fetch(generateURL(queries))
      .then(res => res.json())
      .then(receivedShows => setTVShows(receivedShows.titels))
    setTotalPages(Math.ceil(tvShows.length / SHOWS_PER_PAGE))

  }, [queries, tvShows.length])

  const onFormSubmit = (event, updatedQueries) => {
    event.preventDefault()
    setQueries(updatedQueries)
  }

  return (
    <div className="tvshow-container">
      <h1 className="section-headline">TV Shows</h1>
      <Form onFormSubmit={onFormSubmit} />
      <TVShowsComponent tvShows={tvShows} pageNumber={pageNumber} />
      <Pagination
        totalPages={totalPages}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />

    </div>
  )
}
export default TVShows