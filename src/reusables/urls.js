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

export const generateURLMovies = (queries) => {
  let URL_movies = new URL('https://netflix-data-api-klimenko.herokuapp.com/Movies')
  queries.forEach((query) => {
    if(query.value) {
      URL_movies.searchParams.append(query.name, query.value)
    }
  } )
  return URL_movies.href
}

export const movieIdLink = 'https://netflix-data-api-klimenko.herokuapp.com/Movies/'
export const showIDLink = 'https://netflix-data-api-klimenko.herokuapp.com/TV-shows/'

export const movieLink = '/Movies/'
export const showLink = '/TV-Shows/'