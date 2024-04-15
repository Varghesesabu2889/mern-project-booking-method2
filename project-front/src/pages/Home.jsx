import React from 'react'
import '../styles/home.css'
import {Container,Row,Col} from 'react-bootstrap'
import heroVideo2 from '../assets/images/hero-video3.mp4'
import heroVideo from '../assets/images/hero-video2.mp4'
import heroVideo3 from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle'
import worldImg from '../assets/images/world.gif'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
// import ImageGallery from '../Image-Gallery/ImageGallery'
import Newsletter from '../shared/Newsletter'
import toursimg from '../assets/images/tours.jpg'
import toursimg2 from '../assets/images/tours2.jpg'
import toursimg3 from '../assets/images/tours3.png'
import toursimg4 from '../assets/images/tours4.jpg'
import toursimg5 from '../assets/images/tours5.jpg'

import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
const Home = () => {
  return (
    <>
    {/* hero section */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'}/>
                <img src={worldImg} alt="" />
                </div>
                <h3>Discover India's Hidden Gems: Uncovering Rare and Remarkable Destinations with us
                   </h3>
                    <p>
                    During my travels through India's rare and stunning destinations,
                     I had the privilege of discovering a secluded village nestled amidst
                      the Western Ghats. The warm hospitality of the locals, coupled with 
                      breathtaking landscapes of tea plantations and misty mountains, created 
                      a mesmerizing and unforgettable experience.</p> <p> I'd like to express my gratitude to Journey Junction
                       website for inspiring me to explore India's rare and beautiful destinations,
                        leading me to discover hidden gems and create unforgettable memories during my travels.
                    </p>
                  </div>
          </Col>
          <Col lg="2">
            <div className="hero__video_box hero_box ">
              <video src={heroVideo} alt="" autoPlay  loop controls/>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__video_box mt-4">
              <video src={heroVideo2} alt="" autoPlay  loop controls style={{marginTop:"20px"}}/>
            </div>
          </Col><Col lg="2">
            <div className="hero__video_box mt-5">
              <video src={heroVideo3} alt="" autoPlay loop controls style={{marginTop:"40px"}}/>
            </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>
    {/*   Hero Section  */}
    <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h6 className="services__subtitle">What we serve</h6>
          <h2 className='services__title'>We offer our best services</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
    </section>
    {/* image gallery section */}
    <section> 
      <Container>
        <Row>
          <Col lg="12">
          <Subtitle subtitle={"Trip"} />
            <h2 className="gallery__title">
              Visit our Latest Trip Photos
            </h2>
          <MDBCarousel>
      <MDBCarouselItem itemId={1}>
        <img src={toursimg} className='d-block w-100' alt='...' style={{height:"550px"}} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={toursimg2} className='d-block w-100' alt='...' style={{height:"550px"}} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={toursimg3} className='d-block w-100' alt='...' style={{height:"550px"}} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4}>
        <img src={toursimg4} className='d-block w-100' alt='...' style={{height:"550px"}} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={5}>
        <img src={toursimg5} className='d-block w-100' alt='...' style={{height:"550px"}} />
      </MDBCarouselItem>
    </MDBCarousel>
            {/* <ImageGallery/> */}
          </Col>
        </Row>
      </Container>
    </section>
    <Newsletter/>
    </>
  )
}

export default Home