// import { Link, useParams } from "react-router-dom";
import { useEffect } from 'react'
import { Switch, Route } from "react-router-dom";
import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import MoviePage from './pages/MoviePage'
//comment out the Link to deploy but why it 
//2nd try to comment out the Link
// const Home = () => {
//   return (
//     <div>
//       <h1>Home</h1>
//       <Link to="/login"> Login Page! </Link>
//       <Link to="/test"> Testing Page! </Link>
//     </div>
//   );
// };



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
