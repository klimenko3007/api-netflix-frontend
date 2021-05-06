export const generateURL = (queries) => {
  let URL_shows = new URL('https://netflix-data-api-klimenko.herokuapp.com/TV-Shows')
  queries.forEach((query) => {
    if(query.value) {
      URL_shows.searchParams.append(query.name, query.value)
    }
  } )
  console.log(URL_shows.href)
  return URL_shows.href
}