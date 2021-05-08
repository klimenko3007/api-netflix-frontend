import React from 'react'

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Query</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>year</td>
          <td>Returns filtered list of movies/tv shows released during this year</td>
        </tr>
        <tr>
          <td>yearBefore</td>
          <td>Returns filtered list of movies/tv shows released before this year</td>
        </tr>
        <tr>
          <td>yearAfter</td>
          <td>Returns filtered list of movies/tv shows released after this year</td>
        </tr>
        <tr>
          <td>cast</td>
          <td>Returns filtered list of movies/tv shows that includes the name as a member of the cast</td>
        </tr>
        <tr>
          <td>director</td>
          <td>Returns filtered list of movies/tv shows that includes the name as a director</td>
        </tr>
        <tr>
          <td>country</td>
          <td>Returns filtered list of movies/tv shows that includes the country as a country of origin</td>
        </tr>
      </tbody>
    </table>

  )
}
export default Table