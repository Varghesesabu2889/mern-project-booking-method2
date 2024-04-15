import React from 'react'
import './Footer.css'
import {Container,Row,Col,ListGroup,ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
const quick__link = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
];
const quick__link2 = [
  {
    path: '/imageGallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
];


const Footer = () => {

  const year = new Date().getFullYear()
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg="3">
          <div className="logo">
            <img src={logo} alt="" />
            <p>Welcome to Journey Junction where we're passionate about making your travel
               dreams a reality! Our mission is to empower travelers with tools for seamless trip planning and
                unforgettable experiences. Whether you're solo, with friends, or family, we're here to support
                 your journey. Let's explore and create lasting memories together!</p>
               <div className="social__links d-flex align-items-center gap-4">
               <span> <Link to='#' style={{color:"darkviolet"}}><i class="fa-brands fa-instagram"></i></Link></span>
               <span> <Link to='#'><i class="fa-brands fa-facebook-f"></i></Link>
               </span>
               <span> <Link to='#' style={{color:"black"}}><i class="fa-brands fa-x-twitter"></i></Link>
               </span>
               <span> <Link to='#' style={{color:"red"}}><i class="fa-brands fa-youtube"></i></Link>
               </span>
               </div>   
          </div>
        </Col>
       
        <Col lg='3'>
        <br /><br /><br /><br />
          <h5 className="footer__link-title">Discover</h5>
        <ListGroup className='footer__quick-links'>
          {
            quick__link.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>
                  {item.display}
                  </Link>
                </ListGroupItem>
            ))
          }
        </ListGroup>
        </Col>
        <Col lg='3'>
          <br /><br /><br /><br />
        <h5 className="footer__link-title">Quick Links</h5>
        <ListGroup className='footer__quick-links'>
          {
            quick__link2.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>
                  {item.display}
                  </Link>
                </ListGroupItem>
            ))
          }
        </ListGroup>
        </Col>
        <Col lg='3'>
        <br /><br /><br /><br />
        <h5 className="footer__link-title">Contact</h5>
        <ListGroup className='footer__quick-links'>
          
                <ListGroupItem  className='ps-0 border-0 d-flex
                 align-items-center gap-3'>
                 <h6 className='mb-0 d-flex
                 align-items-center gap-3'>
                  <span><i class="fa-solid fa-location-dot"></i></span>
                  Address:
                 </h6>
                 <p className='mb-0'>Kochi,Kerala</p>
                </ListGroupItem> 
                
                <ListGroupItem  className='ps-0 border-0 d-flex
                 align-items-center gap-3'>
                 <h6 className='mb-0 d-flex
                 align-items-center gap-3'>
                  <span>
                  <i class="fa-solid fa-envelope"></i>
                    </span>
                  Email:
                 </h6>
                 <p className='mb-0'>jj@123gmail.com</p>
                </ListGroupItem> 
                
                <ListGroupItem  className='ps-0 border-0 d-flex
                 align-items-center gap-3'>
                 <h6 className='mb-0 d-flex
                 align-items-center gap-3'>
                  <span>
                  <i class="fa-solid fa-phone"></i>
                    </span>
                  Phone no:
                 </h6>
                 <p className='mb-0'>+91 8921050000</p>
                </ListGroupItem> 
</ListGroup>
        </Col>
        <Col lg="12" className='text-center pt-5'>
          <p className="copyright">Copyright {year}
          designed and developed by Varghese Sabu.
           All rights reserved </p>
        
        </Col>
      </Row>
    </Container>
  </footer>
   
  
}

export default Footer