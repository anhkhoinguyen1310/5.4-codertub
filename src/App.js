
import { useEffect } from 'react'
import { Switch, Route } from "react-router-dom";
import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import MoviePage from './pages/MoviePage'



function App() {

    useEffect(() => {
    const appState = localStorage.getItem("imdbState");
    if(!appState){
      localStorage.setItem("imdbState", JSON.stringify({
        movies: [
          {id: "treo", comments: []}
        ]
      }))
    } else {
    }
  }, [])


  return (
    <div className="App">
    <Navbar />
    {/* <Home/> */}
    <div>
      <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/movie/:id"  exact component={MoviePage} />
      </Switch>
    </div>
  </div>
  );
}

export default App;
