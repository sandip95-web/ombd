import React from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import { fetchDetail } from '../../features/Movie/movieSlice'
import {BsStar,BsHandThumbsUp} from 'react-icons/bs'
import {ImFilm} from 'react-icons/im'
import {AiOutlineCalendar} from 'react-icons/ai'
import './Detail.css'
import { removeaddMovies } from '../../features/Movie/movieSlice'
const MovieDetail = () => {
  const {movieid}=useParams()
  const dispatch=useDispatch()
  const data=useSelector(state=>state.movie.detail)
  useEffect(()=>{
    dispatch(fetchDetail(movieid))
    return ()=>{
      dispatch(removeaddMovies())
    }
  },[dispatch,movieid])
  return (
    <>
       
          {Object.keys(data).length===0 ? (
            <div>Loading.....</div>
          ):(
            <div className="movie-section">
            <div className="section-right">
            <div className="movie-title">{data.Title}</div>
             <div className="movie-rating">
                 <span>
                   IMBD Rating <BsStar/> : {data.imdbRating}
                 </span>
                 <span>
                   IMBD Votes <BsHandThumbsUp/> : {data.imdbVotes} 
                 </span>
                 <span> 
                  Runtime <ImFilm/> : {data.Runtime}
                 </span>
                 <span>
                   Year <AiOutlineCalendar/> : {data.Year} 
                 </span>
                 </div>
          <div className="movie-plot">{data.Plot} </div>
            <div className="movie-info">
              <div>
                <span>Director :</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars :</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes :</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages :</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards :</span>
                <span>{data.Awards}</span>
              </div>
            </div>  
            </div>
          <div className="section-left">
            <img src={data.Poster} alt={data.Title} />
          </div>
            </div>
          )}
       
    </>
  )
}

export default MovieDetail