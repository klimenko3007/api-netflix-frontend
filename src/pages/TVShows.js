import React, { useState, useEffect } from 'react'

import { generateURL } from '../reusables/urls'

import TVShowsComponent from '../components/TVShowsComponent'
import Pagination from '../components/Pagination'

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
  const [year, setYear] = useState("")
  const [director, setDirector] = useState("")
  const [yearAfter, setYearAfter] = useState("")
  const [yearBefore, setYearBefore] = useState("")
  const [country, setCountry] = useState("")
  const [cast, setCast] = useState("")
  const [queries, setQueries] = useState(initialQueries)


  const onPreviousPageClick = () => {
    setPageNumber(Number(pageNumber) - 1)
  }

  const onNextPageClick = () => {
    setPageNumber(Number(pageNumber) + 1)
  }
  

  useEffect(() => {
    fetch(generateURL(queries))
      .then(res => res.json())
      .then(receivedShows => setTVShows(receivedShows.titels))

    setTotalPages(Math.ceil(tvShows.length / 50))

  }, [queries, tvShows.length])

  const onYearChange = (event) => {
    setYear(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    const updatedQueries = [
      { name: "year", value: year },
      { name: "director", value: director },
      { name: "country", value: country },
      { name: "cast", value: cast },
      { name: "yearAfter", value: yearAfter },
      { name: "yearBefore", value: yearBefore }
    ]
    setQueries(updatedQueries)
  }

  return (
    <div>
      <form  onSubmit={onFormSubmit}>
        <label>
          Enter year
          <input
            type="text"
            value={year}
            onChange={onYearChange}
          />
        </label>
        <label>
          Enter cast
          <input
            type="text"
            value={cast}
            onChange={e => setCast(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
        </form>
      <TVShowsComponent tvShows={tvShows} pageNumber={pageNumber} />
      <Pagination totalPages={totalPages} setPageNumber={setPageNumber} />
      <button onClick={onPreviousPageClick}>Back</button>
      <button onClick={onNextPageClick}>Next</button>
    </div>
  )
}
export default TVShows