import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from "react-loader-spinner";


import image from '../images/show.jpg'

const ShowPage = ({ link }) => {
  const { id } = useParams()

  const [show, setShow] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${link}${id}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else throw new Error(res.statusText)
      })
      .then(receivedShow => {
        setTimeout(() => setLoading(false), 1500)
        setShow(receivedShow.show)
      })
      .catch((error) => {
        setLoading(false)
        setError(true)
      })
  }, [id, link])
  return (
    <div
      className="show-container"
      style={{ backgroundImage: `linear-gradient(rgba(22, 22, 22, 0.57) 30%, rgb(0, 0, 0) 100%), url(${image})` }}
    >
      {error && <p className="error">Opps, we could not find this movie/show </p>}
      {loading ?
        <div className="loader">
          <Loader
            type="TailSpin"
            color="red"
            height={100}
            width={100}
          />
        </div> :
        show &&
        <>
          <h1 className="show-titel">{show.title}</h1>
          <p><span className="bold">Cast</span>: {show.cast}</p>
          <p><span className="bold">Release</span>: {show.release_year}</p>
          <p><span className="bold">Genre</span>: {show.listed_in}</p>
          <p><span className="bold">Country</span>: {show.country}</p>
          <p><span className="bold">Duration</span>: {show.duration}</p>
          <p>{show.description}</p>
        </>
      }
    </div>
  )
}

export default ShowPage