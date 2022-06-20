import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import './Card.css'
const MovieCard = ({index,data}) => {
  return (
    <>
    {Object.keys(data).length===0 ?(
      <div>Loading....</div>
    ):(
      <Link to={`/movie/${data.imdbID}`}>
        <Card style={{ width: '18rem' }} className='m-card' >
      <Card.Img variant="top" src={data.Poster} />
      <Card.Body>
        <Card.Title>{data.Title}</Card.Title>
        <Card.Text>
          {data.Year}          
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    )}
    </>
  )
}

export default MovieCard