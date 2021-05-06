import React from 'react'
import PageButton from './PageButton'

const Pagination = ({totalPages, setPageNumber}) => {
  const pages = [...Array(totalPages).keys()].map(num => num+1)
  return (
    <div>
      <p>Chose page</p>

      {pages.map(page => <PageButton key={page} page={page} setPageNumber={setPageNumber} />)}

    </div>
  )
}
export default Pagination