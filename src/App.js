//import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom";
import React from 'react'
import { Container, } from 'react-bootstrap';
import './App.css';
import Navbar from './components/Navbar'
//comment out the Link to deploy but why it 
//2nd try to comment out the Link

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY
function Homepage() {
  const [Movies] = useState([])
  const fetchMovies = async () => {
    const resp = await fetch (`https://api.themoviedb.org/3/movie/76341?api_key=${API_KEY}`,);
    const json = await resp.json()
    console.log({json})
  }
  useEffect(() => {
    fetchMovies()
  },[])
  return (
    <div> 
      <h1> Home Page</h1>
      {
        Movies.map(m => {
          return <h1>{m.title}</h1>
        })
      }
    </div>
  )
}

function App() {
  return (
    <div className="App">
    <Navbar />
    <Container>
      <Switch>
      <Route path="/" exact component={Homepage} />
      </Switch>
    </Container>
  </div>
  );
}

export default App;
