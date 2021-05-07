import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import image from '../images/show.jpg'

const ShowPage = () => {
  const { id } = useParams()

  const [show, setShow] = useState()

  useEffect(() => {
    fetch(`https://netflix-data-api-klimenko.herokuapp.com/TV-shows/${id}`)
      .then(res => res.json())
      .then(receivedShow => setShow(receivedShow.show))
  }, [id])
  return (
    <div
      className="show-container"
      style={{backgroundImage: `linear-gradient(rgba(22, 22, 22, 0.57) 30%, rgb(0, 0, 0) 100%), url(${image})`}}
    >
      {show &&
        <>
          <h1 className="show-titel">{show.title}</h1>
          <p><span className="bold">Cast</span>: {show.cast}</p>
          <p><span className="bold">Release</span>: {show.release_year}</p>
          <p><span className="bold">Genre</span>: {show.listed_in}</p>
          <p><span className="bold">Country</span>: {show.country}</p>
          <p><span className="bold">Available</span>: {show.duration}</p>
          <p>{show.description}</p>
        </>
      }
    </div>
  )
}

export default ShowPage