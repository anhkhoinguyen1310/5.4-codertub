import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import React from 'react'
import { Container, Row, Col, Card, Nav } from 'react-bootstrap';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
    
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
                <>
            <Col >
            <Card className = "m-3"  style={{ width: '15rem' }}>
            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + m.backdrop_path }/>
            <Card.Body>
              <Card.Title>{m.title}</Card.Title>
              <Card.Text style = {{height: 200, overflow: 'hidden'}}>
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
  </Container>
        
      </div> 
    )
}


/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={'https://image.tmdb.org/t/p/w500/' + m.backdrop_path }
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{m.title}</h3>
      <p>{m.overview}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */


// const MultiCarouselPage = () => {
//   return (
//     <MDBContainer>
//       <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
//         <MDBCarouselInner>
//           <MDBRow>
//             <MDBCarouselItem itemId="1">
//               <MDBCol md="4">
//                 <MDBCard className="mb-2">
//                   <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the card's content.
//                     </MDBCardText>
//                     <MDBBtn color="primary">MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//               <MDBCol md="4">
//                 <MDBCard className="mb-2">
//                   <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the card's content.
//                     </MDBCardText>
//                     <MDBBtn color="primary">MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//               <MDBCol md="4">
//                 <MDBCard className="mb-2">
//                   <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the card's content.
//                     </MDBCardText>
//                     <MDBBtn color="primary">MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId="2">
//               <MDBCol md="4">
//                 <MDBCard className="mb-2">
//                   <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the card's content.
//                     </MDBCardText>
//                     <MDBBtn color="primary">MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//               <MDBCol md="4">
//                 <MDBCard className="mb-2">
//                   <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the card's content.
//                     </MDBCardText>
//                     <MDBBtn color="primary">MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//               <MDBCol md="4">
//                 <MDBCard className="mb-2">
//                   <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the card's content.
//                     </MDBCardText>
//                     <MDBBtn color="primary">MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId="3">
//               <MDBCol md="4">
//                 <MDBCard className="mb-2">
//                   <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the card's content.
//                     </MDBCardText>
//                     <MDBBtn color="primary">MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//               <MDBCol md="4">
//                 <MDBCard className="mb-2">
//                   <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the card's content.
//                     </MDBCardText>
//                     <MDBBtn color="primary">MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//               <MDBCol md="4">
//                 <MDBCard className="mb-2">
//                   <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the card's content.
//                     </MDBCardText>
//                     <MDBBtn color="primary">MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//             </MDBCarouselItem>
//           </MDBRow>
//         </MDBCarouselInner>
//       </MDBCarousel>
//     </MDBContainer>
//   );
// }

