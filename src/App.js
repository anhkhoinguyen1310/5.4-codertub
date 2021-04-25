import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom";
import React from 'react'
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import './App.css';
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import MoviePage from './pages/Homepage'
//comment out the Link to deploy but why it 
//2nd try to comment out the Link
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/login"> Login Page! </Link>
      <Link to="/test"> Testing Page! </Link>
    </div>
  );
};



function App() {
  return (
    <div className="App">
    <Navbar />
    <Home/>
    <Container>
      <Switch>
      <Route path="/movie/:id"  component={MoviePage} />
      <Route path="/"  component={Homepage} />
      </Switch>
    </Container>
  </div>
  );
}

export default App;
