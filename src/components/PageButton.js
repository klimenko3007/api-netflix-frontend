import React from 'react'

const PageButton = ({ page, setPageNumber, pageNumber }) => {
  const generateClasseName = (pageNumber) => {
    return `button ${pageNumber === page && "active"}`
  }
  return (
    <button
      className={generateClasseName(pageNumber)}
      onClick={(e) => setPageNumber(page)}
    >
      {page}
    </button>

  )
}
export default PageButton