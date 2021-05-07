import React from 'react'
import {Link} from 'react-router-dom'

const TVShowThumb = ({show}) => {
  return (
      <Link className="link" to={`/TV-Shows/${show.show_id}`}>
        <p className="link-text">{show.title}</p>
      </Link>
  )
}
export default TVShowThumb