import { Store } from "../core";

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {},
  loading: false,
  message: 'Search for the movie title!'
})

export default store
export const searchMovies = async page => {
  store.state.loadging = true
  store.state.page = page
  if(page === 1) {
    store.state.movie = []
    store.state.message = ''
  }

  try {
    const res = await fetch(`https://omdbapi.com?apikey=78177d20&s=${store.state.searchText}&page=${page}`)
    // const res = await fetch('/api/movie', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title: store.state.searchText,
    //     page
    //   })
    // })
    const { Response, Search, totalResults, Error } = await res.json() //fetch의 json메서드는 바디의 내용을 json 반환해줌
    if (Response === 'True') {
      store.state.movies = [
        ...store.state.movies,
        ...Search
      ]
      store.state.pageMax = Math.ceil(Number(totalResults) / 10)
    } else { // 에러 없이 보냈지만 받아온 데이터가 잘 못 될경우
      store.state.message = Error
      store.state.pageMax = 1
    }
  } catch(error) {
    console.log('searchMovies error:', error)
  } finally {
    store.state.loading = false
  }
}

export const getMovieDetails = async id => {
  try {
    const res = await fetch(`https://omdbapi.com?apikey=78177d20&i=${id}&plot=full`)
    // const res = await fetch('/api/movie', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     id
    //   })
    // })
    store.state.movie = await res.json()
  } catch (error) {
    console.log('getMovieDetails error:', error)
  }
}
