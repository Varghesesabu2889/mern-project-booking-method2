import React from 'react'
import './newsletter.css'
import {Container,Row,Col} from 'react-bootstrap'
import femaleTourist from '../assets/images/newa.png'
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';

const Newsletter = () => {
    function showAlert() {
    Swal.fire({
        title: 'Thank You For Subscribing us....',
        text: 'Your mail is subscribed our website successfully',
        icon: 'success',
        confirmButtonText: 'okay'
      });
    }
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className='newsletter__content'>
                    <h2>Embark on a Journey of Discovery, Subscribe to Unlock India's Hidden Treasures!</h2>
                    <div className="newsletter__input">
                        <TextField className='form-control' type="email" label="Enter your email" variant='standard' />
                        <button className="btn newsletter__btn" onClick={showAlert}>Subscribe</button>
                    </div>
                    <p>
                    Subscribe to our website today to unlock access to curated travel 
                    content, insider insights, and special promotions tailored to enhance
                     your exploration of India's rare and enchanting places. Join us on a 
                     journey of discovery and adventure as we uncover hidden treasures and share 
                     unforgettable experiences together.
                    </p>
                    </div>
                </Col>
            <Col lg='6' style={{marginTop:"15px"}}>
                <div className="newsletter__img">
                    <img src={femaleTourist} alt="" width={"10px"} height={"400px"}  />
                </div>
            </Col>

        </Row>
    </Container>
  </section>
}
export default Newsletter