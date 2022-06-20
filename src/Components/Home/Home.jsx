import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {fetchMovie, fetchSeries} from '../../features/Movie/movieSlice'
import MovieListing from '../MovieListing/MovieListing'

const Home = () => {
  const movieText='One Piece'
  const seriesText='Stranger Things'
  const dispatch=useDispatch()
  useEffect(()=>{
      dispatch(fetchMovie(movieText))
      dispatch(fetchSeries(seriesText))
  },[dispatch])
  return (
    <>
    <MovieListing/>
    </>
  )
}

export default Home