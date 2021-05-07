import React, { useState } from 'react'
import { FaChevronCircleDown } from "react-icons/fa";

const Form = ({ onFormSubmit }) => {
  const [year, setYear] = useState("")
  const [yearAfter, setYearAfter] = useState("")
  const [yearBefore, setYearBefore] = useState("")
  const [country, setCountry] = useState("")
  const [cast, setCast] = useState("")
  const [visible, setVisible] = useState(false)

  const updatedQueries = [
    { name: "year", value: year },
    { name: "country", value: country },
    { name: "cast", value: cast },
    { name: "yearAfter", value: yearAfter },
    { name: "yearBefore", value: yearBefore }
  ]

  return (
    <div className="form-container">
      <div
        onClick={() => setVisible(!visible)}
        className="form-header-container"
      >
        <h2 className="form-header">Filter the list</h2>
        <FaChevronCircleDown />
      </div>
      <form onSubmit={(e) => onFormSubmit(e, updatedQueries)} className={`form-wrapper ${visible ? 'visible' : ""}`}>
        <label className="label">
          Pick a year
          <input
            className="input"
            type="text"
            value={year}
            onChange={e => setYear(e.target.value)}
          />
        </label>
        <label className="label">
          Pick a cast member
          <input
            className="input"
            type="text"
            value={cast}
            onChange={e => setCast(e.target.value)}
          />
        </label>
        <label className="label">
          Pick a country
          <input
            type="text"
            value={country}
            onChange={e => setCountry(e.target.value)}
            className="input"
          />
        </label>
        <label className="label">
          Shows before year:
          <input
            type="text"
            value={yearBefore}
            onChange={e => setYearBefore(e.target.value)}
            className="input"
          />
        </label>
        <label className="label">
          Shows after year:
          <input
            type="text"
            value={yearAfter}
            onChange={e => setYearAfter(e.target.value)}
            className="input"
          />
        </label>

        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form