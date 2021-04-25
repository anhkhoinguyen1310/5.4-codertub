import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import React from 'react'
import { Container, Row, Col, Card, Nav } from 'react-bootstrap';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY


export default function Homepage() {
    const [movies, setMovies] = useState([])

    const fetchMovies = async () => {
      const resp = await fetch (`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);
      const json = await resp.json()
      console.log({json})
      setMovies(json.results);
    }
  
    useEffect(() => {
      fetchMovies()
    },[])
    return (
      <div> 
        <h1> Home Page</h1>
        <Container>
    <Row>
    {movies.map(m =>{
      console.log({m});
            return (
            <Col>
            <Card className = "m-3 " style={{ width: '18rem' }}>
            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + m.backdrop_path }/>
            <Card.Body>
              <Card.Title>{m.title}</Card.Title>
              <Card.Text style = {{height: 200, overflow: 'hidden'}}>
                {m.overview}
              </Card.Text>
              <Nav.Link as={Link} to= {'/movie/' + m.id}  className = "btn btn-primary">View Details</Nav.Link>
         
            </Card.Body>
          </Card>
          </Col>)
          })}
      
    </Row>
  </Container>
        
      </div> 
    )
}


