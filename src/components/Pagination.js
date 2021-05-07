import React from 'react'
import PageButton from './PageButton'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Pagination = ({ totalPages, setPageNumber, pageNumber }) => {
  const onPreviousPageClick = () => {
    setPageNumber(Number(pageNumber) - 1)
  }

  const onNextPageClick = () => {
    setPageNumber(Number(pageNumber) + 1)
  }

  const pages = [...Array(totalPages).keys()].map(num => num + 1)
  return (
    <div className="pagination-container">

      <button
        className="pagination-button-nav"
        disabled={pageNumber === 1}
        onClick={onPreviousPageClick}
      >
        <FaChevronLeft style={{size: 10}}/>
      </button>

      {pages.map(page => <PageButton
        key={page}
        page={page}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
      )}

      <button
        className="pagination-button-nav"
        onClick={onNextPageClick}
        disabled={pageNumber === pages.length}
      >
        <FaChevronRight />
      </button>

    </div>
  )
}
export default Pagination