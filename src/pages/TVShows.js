import React, { useState, useEffect } from 'react'
import Loader from "react-loader-spinner"

import { generateURL } from '../reusables/urls'
import { SHOWS_PER_PAGE } from '../reusables/constants'
import { showLink } from '../reusables/urls'

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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(generateURL(queries))
      .then(res => res.json())
      .then(receivedShows => {
        setTimeout(() => setLoading(false), 1000)
        setTVShows(receivedShows.titels)
      })
    setTotalPages(Math.ceil(tvShows.length / SHOWS_PER_PAGE))

  }, [queries, tvShows.length])

  const onFormSubmit = (event, updatedQueries) => {
    event.preventDefault()
    setQueries(updatedQueries)
  }

  return (
    <>
      {loading ?
        <div className="loader">
          <Loader
            type="TailSpin"
            color="red"
            height={100}
            width={100}
          />
        </div> :
        <div
          className="tvshow-container"
          style={{
            backgroundImage: `linear-gradient(rgba(22, 22, 22, 0.57) 30%, rgb(0, 0, 0) 100%), url('./assets/background_mobile2.jpg')`
          }}
        >
          <h1 className="section-headline">TV Shows</h1>
          <Form onFormSubmit={onFormSubmit} />
          <TVShowsComponent
            tvShows={tvShows}
            pageNumber={pageNumber}
            link={showLink}
          />
          <Pagination
            totalPages={totalPages}
            setPageNumber={setPageNumber}
            pageNumber={pageNumber}
          />
        </div>
      }
    </>  
  )
}
export default TVShows