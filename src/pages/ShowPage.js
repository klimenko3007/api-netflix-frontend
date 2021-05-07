import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShowPage = () => {
  const { id } = useParams()

  const [show, setShow] = useState()

  useEffect(() => {
    fetch(`https://netflix-data-api-klimenko.herokuapp.com/TV-shows/${id}`)
      .then(res => res.json())
      .then(receivedShow => setShow(receivedShow.show))
  }, [id])
  return (
    <>
      {show &&
        <div
          className="show-container"
          style={{ backgroundImage: `url('./assets/show.jpg')` }}
        >
          <h1 className="show-titel">{show.title}</h1>
          <p>Cast: {show.cast}</p>
          <p>Release: {show.release_year}</p>
          <p>Genre{show.listed_in}</p>
          <p>Country: {show.country}</p>
          <p>Available: {show.duration}</p>
          <p>{show.description}</p>
        </div>
      }
    </>
  )
}

export default ShowPage