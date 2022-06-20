import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import MovieDetail from './Components/MovieDetail/MovieDetail'
import PageNotFound from './Components/PageNotFound/PageNotFound'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div className="App">
    <Router>
        <Header/>
        <Routes> 
            <Route exact path='/' element={<Home/>} />
            <Route path='/movie/:movieid' element={<MovieDetail/>} />
            <Route path='*' element={<PageNotFound/>} />
            </Routes>
          <Footer/> 
            </Router>    
    </div>
  );
}

export default App;
