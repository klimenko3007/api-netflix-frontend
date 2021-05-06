import React from 'react'

const PageButton = ({page, setPageNumber}) => {
  return (
      <button
        value={page}
        onClick={(e) => setPageNumber(e.target.value)}
      >
        {page}
      </button>

  )
}
export default PageButton