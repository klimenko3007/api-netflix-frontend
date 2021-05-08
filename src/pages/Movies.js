import React, { useState, useEffect } from 'react'


import { generateURLMovies } from '../reusables/urls'
import { SHOWS_PER_PAGE } from '../reusables/constants'
import {movieLink} from '../reusables/urls'

import TVShowsComponent from '../components/TVShowsComponent'
import Pagination from '../components/Pagination'
import Form from "../components/Form";

const Movies = () => {
  const initialQueries = [
    { name: "year", value: undefined },
    { name: "director", value: undefined },
    { name: "country", value: undefined },
    { name: "cast", value: undefined },
    { name: "yearAfter", value: undefined },
    { name: "yearBefore", value: undefined }
  ]
  const [queries, setQueries] = useState(initialQueries)
  const [pageNumber, setPageNumber] = useState(1)
  const [movies, setMovies] = useState([])
  const [totalPages, setTotalPages] = useState(0)

  const onFormSubmit = (event, updatedQueries) => {
    event.preventDefault()
    setQueries(updatedQueries)
  }

  useEffect(() => {
    fetch(generateURLMovies(queries))
      .then(res => res.json())
      .then(receivedMovies => setMovies(receivedMovies.movies))
    setTotalPages(Math.ceil(movies.length / SHOWS_PER_PAGE))

  }, [queries, movies.length])


  return (
    <div className="tvshow-container" style={{ backgroundImage: `linear-gradient(rgba(22, 22, 22, 0.57) 30%, rgb(0, 0, 0) 100%), url('./assets/background_mobile.jpg')` }}>
      <h1 className="section-headline">Movies</h1>
      <Form onFormSubmit={onFormSubmit} />
      <TVShowsComponent tvShows={movies} pageNumber={pageNumber} link={movieLink}/>
      <Pagination 
      totalPages={totalPages} 
      pageNumber={pageNumber} 
      setPageNumber={setPageNumber}/>
    </div>
  )
}
export default Movies