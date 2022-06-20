import React from 'react'
import './Header.css'
import {Button,Navbar,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { fetchMovie, fetchSeries } from '../../features/Movie/movieSlice'
const Header = () => {
  const[term,setTerm]=useState('')
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{
            e.preventDefault();
            console.log(term);
            dispatch(fetchMovie(term))
            dispatch(fetchSeries(term))
  }
  return (
    <>
     <div className="header">
     <Navbar bg='info'>
  <Container>
    <Link to='/' style={{textDecoration:'none',cursor:'pointer'}}>
      <Navbar.Brand className='page-title'>Movie App</Navbar.Brand>
    </Link>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <img className='logo' src="https://cdn-icons-png.flaticon.com/512/4221/4221419.png" alt="logo" />
      </Navbar.Text>
      <form onSubmit={handleSubmit}>
          <button type='submit'>Search</button>
        <input type="text" placeholder='Type Movie,Anime,Series' value={term} onChange={(e)=>setTerm(e.target.value)} />
      </form>
    </Navbar.Collapse>
  </Container>
</Navbar>
     </div>
    </>
  )
}

export default Header