import React from 'react'

import Table from '../components/Table'

const About = () => {
  return (
    <div className="tvshow-container">
      <div className="max-width-fix">
        <h1 className="section-headline">Netflix data set project</h1>
        <p>The project is built as part of the assignment for Technigo bootcamp to practice building REST APIs and using them in a frontend projects</p>

        <h2 className="section-subheading">Backend</h2>
        <h3 className="text-heading">Overview</h3>
        <p>The Netflix data set API is organized around REST. At the moment it only performs GET requests. It shows different lists of movies and TV shows that can be further filtered with query parameters. It also shows individual TV shows or movies based on the id. The responses are sent in JSON format.</p>
        <h3 className="text-heading">Base URL</h3>
        <a className="endpoint-link" href="https://netflix-data-api-klimenko.herokuapp.com/">
          https://netflix-data-api-klimenko.herokuapp.com/
      </a>
        <p>The basic URL returns the list of all available endpoints</p>
        <h3 className="text-heading">Endpoints</h3>
        <a className="endpoint-link" href="https://netflix-data-api-klimenko.herokuapp.com/titels">
          GET /titels
      </a>
        <p>This endpoint returns a JSON object "titels" containing all the Netflix titels and information about them</p>
        <a className="endpoint-link" href="https://netflix-data-api-klimenko.herokuapp.com/Movies">
          GET /Movies
      </a>
        <p>This endpoint returns a JSON object "movies" containing all the Netflix movie titles and information about them</p>
        <a className="endpoint-link" href="https://netflix-data-api-klimenko.herokuapp.com/TV-Shows">
          GET /TV-Shows
      </a>
        <p>This endpoint returns a JSON object "titles" containing all the Netflix TV shows titles and information about them</p>
        <a className="endpoint-link" href="https://netflix-data-api-klimenko.herokuapp.com/Movies:id">
          GET /Movies:id
      </a>
        <p>This endpoint returns information about the single movie</p>
        <a className="endpoint-link" href="https://netflix-data-api-klimenko.herokuapp.com/TV-Shows:id">
          GET /TV-Shows:id
      </a>
        <p>This endpoint returns information about the single TV show</p>


        <h3 className="text-heading">Query parameters</h3>
        <p>The query parameters can be applied to /Movies and /TV-Shows endpoints to filter the data</p>
        <Table />

        <h2 className="section-subheading">Frontend</h2>
        <p>The the frontend is built as a Progressive Web Applictation using React </p>
      </div>
    </div>
  )
}
export default About