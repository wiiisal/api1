import React,{useEffect, useState}from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';
import Navba from './Navba';
import Pokelist from './Pokelist';
import Pagination from './Pagination';
import axios from 'axios'

function App() {
  const [pokemon,setPokemon]=useState([])
  const[currentPage,setCurrentPage]=useState("https://pokeapi.co/api/v2/pokemon")
 const [nextPage,setNextPage]=useState()
 const[prevPage,setPrevPage]=useState()
 const[loading,setLoading]=useState(true)

  useEffect(()=>{
    setLoading(true)
    let cancel
    axios.get(currentPage,{cancelToken:new axios.CancelToken(c=>cancel = c)})
    .then(res => {
      setLoading(false)
      setNextPage(res.data.next)
      setPrevPage(res.data.precious)
      setPokemon(res.data.results.map(p=>p.name))})
      return ()=> cancel()
  },[currentPage])

function goNextPage(){setCurrentPage(nextPage)}
function goPrevPage(){setCurrentPage(prevPage)}

if (loading) return "loading..."
	return (
    <>
	        <Router>
		          <div className="App">
			            <Navba/>
		         <Routes >
			         	<Route exact path='/' element={< Home />}></Route>
			        	<Route exact path='/About' element={< About />}></Route>
			        	<Route exact path='/Contact' element={< Contact />}></Route>
	        	</Routes>
	          	</div>
	        </Router>
          <div>
            <Pokelist pokemon={pokemon}/>
            <Pagination  goNextPage={goNextPage ? goNextPage : null} goPrevPage={goPrevPage ? goPrevPage : null}/>
          </div>
    </>
)
}

export default App;
