import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import React from 'react'
import SideBar from '../components/SideBar';
import {  Row, Col, Card, Nav } from 'react-bootstrap';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY


export default function Homepage() {
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState({genres: []});
    const [gen_ids, setGen_ids] = useState([]);
    const [moviesDefault, setMoviesDefault] = useState([]);
    


    const fetchMovies = async () => {
      const resp = await fetch (`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);
      const json = await resp.json()
      // console.log({json})
      setMovies(json.results);
      setMoviesDefault(json.results);
    }
    
    // Fetch genres's name
    const fetchGenresMovie = async () => {
        let url = `https://api.themoviedb.org/3/genre/movie/list?&api_key=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        setGenres(data);
    }


function splitNumber(arr) {
    var a = [],
    b = [],
    prev;

    arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== prev) {
        a.push(arr[i]);
        b.push(1);
        } else {
        b[b.length - 1]++;
        }
        prev = arr[i];
    }

    return [a, b];
}

  const getCategory = (newG) => {
        let g = moviesDefault.map(m => m.genre_ids);
        let gdx = g.join().split(",").map(m => parseInt(m));
        let p = splitNumber(gdx) ;
        let results = [] ;
        for(let i = 0; i< p[0].length; i++ ){
            let h = {};
            h.id = p[0][i];
            h.count = p[1][i];
            results.push(h);
        }
        for(let i of results){
            for(let j of newG.genres){
                if(i.id === j.id){
                    i['name'] = j.name;
                }
            }
        }
        setGen_ids(results);
    } 
    
    // console.log(genres)

    useEffect(() => {
      fetchMovies()
    },[])

    useEffect(() => {
      fetchGenresMovie();
    }, [movies])


    useEffect(() => {
      getCategory(genres);
      // eslint-disable-next-line 
    }, [genres])


    return (
      <div className="main-content"> 
        <div className="sidebar">
            <SideBar moviesDefault={moviesDefault} movies={movies} setMovies={setMovies} gen_ids={gen_ids}  />
        </div>
        <div className="movies-content">
          <h1 className="text-center"> Home Page</h1>
          <div className="main-content">
            <Row>
            {movies.map(m =>{
                    return (
                        <>
                    <Col >
                    <Card className = "m-3"  style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + m.backdrop_path }/>
                    <Card.Body>
                      <Card.Title>{m.title}</Card.Title>
                      <Card.Text style = {{height: 200, overflow: 'hidden', overflowY: "auto"}}>
                        {m.overview}
                      </Card.Text>
                      <Nav.Link as={Link} to= {'/movie/' + m.id}  className = "btn btn-primary">View Details</Nav.Link>   
                    </Card.Body>
                  </Card>
                  </Col>
                </>
                  )
                  })}
              
            </Row>
          </div>
        </div>

      </div> 
    )
}


