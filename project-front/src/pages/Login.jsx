import React, { useContext, useState } from 'react';
import { Container, Row, Col, Form, Button, FormGroup } from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom';
import '../styles/login.css'; 
import loginImg from '../assets/images/register.png'; 
import userImg from '../assets/images/user.png';
import TextField from '@mui/material/TextField';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utlis/config';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  console.log(credentials);

  const {dispatch} =  useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = e => {
    const { id, value } = e.target;
    setCredentials(prev => ({ ...prev, [id]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({type:'LOGIN_START'})

    try {
      const res = await fetch(`${BASE_URL}/auth/login`,{
        method:'post',
        headers:{
         'Content-Type':'application/json',
        },
        credentials:'include',
         body:JSON.stringify(credentials)
      })

      const result = await res.json()
      console.log(result);
      if(!res.ok)
      alert(result.message)
    console.log(result.data);
    dispatch({type:'LOGIN_SUCCESS',payload:result.data})
    navigate('/')


    } catch (err) {

      dispatch({type:'LOGIN_FAILURE',payload:err.data})
      
    }


    };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userImg} alt="" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <TextField style={{backgroundColor:"white"}} id="email" placeholder="Enter Your Email" variant="filled" type='email' required onChange={handleChange} className='form-control'/>
                  </FormGroup> <br />
                  <FormGroup>
                    <TextField style={{backgroundColor:"white"}} id="password" placeholder="Enter Your password" variant="filled" type='password' required onChange={handleChange} className='form-control' />
                  </FormGroup> <br />&nbsp;&nbsp;&nbsp;
                  <Button className='btn auth__btn' type='submit' onClick={handleClick}>Login</Button>
                </Form> <br />
                <p style={{color:"white"}}>Don't have an account ? <Link style={{color:"black", textDecoration: "none" }} to={'/register'}>Register</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;
