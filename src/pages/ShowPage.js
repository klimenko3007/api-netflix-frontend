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
        <div>
          <h1>{show.title}</h1>
          <p>{show.description}</p>
          <p>{show.release_year}</p>
        </div>
      }
    </>
  )
}

export default ShowPage