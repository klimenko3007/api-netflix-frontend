import React from 'react'
import {Link} from 'react-router-dom'

const TVShowThumb = ({show}) => {
  return (
    <div>
      <Link to={`/TV-Shows/${show.show_id}`}>{show.title}</Link>
    </div>
  )
}
export default TVShowThumb