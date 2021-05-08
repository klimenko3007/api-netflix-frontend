import React from 'react'
import {Link} from 'react-router-dom'

const TVShowThumb = ({show, link}) => {
  return (
      <Link className="link" to={`${link}${show.show_id}`}>
        <p className="link-text">{show.title}</p>
      </Link>
  )
}
export default TVShowThumb