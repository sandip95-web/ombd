import React from 'react'
import {useSelector} from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
import './MovieListing.css'
const MovieListing = () => {
  const movie=useSelector(state=>state.movie.movie)
  const series=useSelector(state=>state.movie.series)
  const renderMovie= 
  movie.Response==="True" ?(
    movie.Search.map((movie,index)=>(
      <MovieCard key={index} data={movie} />
    ))
  ):(
    <div className="movie-error">
    <h3>{movie.Error}</h3>
    </div>
  )
  const renderseries=
  series.Response==='True' ?(
    series.Search.map((series,index)=>(
        <MovieCard index={index} data={series} />
    ))
  ):(<div className='Error'>{series.Error}</div>)

  return (
        <>
           <div className="movie-wrapper">
            <div className="movie-list">
              <h1 className='m-name'>Movie</h1>
              <div className="movie-container">
                   {renderMovie}
              </div>
              <h1 className='s-name'>Series</h1>
              <div className="movie-container">
                   {renderseries}
              </div>
            </div>
           </div>
        </>
  )
}

export default MovieListing