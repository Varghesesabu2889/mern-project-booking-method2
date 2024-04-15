import React,{useRef,useEffect, useContext} from 'react';
import { Link, NavLink,useNavigate } from 'react-router-dom';
import { Container, Row, Button } from 'react-bootstrap'; 
import logo from '../../assets/images/logo.png';
import './header.css';
import { AuthContext } from '../../context/AuthContext';

const nav__link = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
  {
    path:'/imageGallery',
    display:'Gallery'
  },
  {
    path: '/about',
    display: 'About'
  }
];

const Header = () => {

const headerRef = useRef(null)
const menuRef = useRef(null)
const navigate = useNavigate();
const {user,dispatch}= useContext(AuthContext);

const logout =()=>{
  
  dispatch({type:"LOGOUT"})
  navigate('/')
}

const stickyHeaderFunc = ()=>{
  window.addEventListener('scroll',()=>{
    if(document.body.scrollTop>80 || 
      document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')

      }
  })
}

useEffect(()=>{
stickyHeaderFunc()
return window.removeEventListener('scroll',stickyHeaderFunc)
});

const toggleMenu =()=> menuRef.current.classList.toggle('show__menu') 


  return (
    <header className='header' ref={headerRef}>
    <Container>
      <Row>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          {/* Logo */}
          <div className="logo">
            <Link to={'/'}><img src={logo} alt="" /></Link>
          </div>
          {/* menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu d-flex align-items-center gap-5">
              {nav__link.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.path}
                    activeClassName="active__link"
                    exact={item.path === '/home'}
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* buttons */}
          <div className="nav__right d-flex align-items-center gap-4">
            <div className="nav__btns d-flex align-items-center gap-4">
                {
                  user? <>
                 <h5 className='mb-0'>{user.username}</h5> 
                 <Button className='btn danger__btn' onClick={logout}>Logout</Button>
                 
                  </>:
                  <>
                  <Button className='btn secondary__btn' as={Link} to={'/login'}>
                Login
              </Button>
              <Button className='btn primary__btn' as={Link} to={'/register'}>
                Register
              </Button>
                  </>
                }


              
            </div>
            <span className='mobile__menu'  onClick={toggleMenu}>
              <Link style={{color:"black"}}>
              <i class="ri-menu-3-line"></i>
              </Link>
            </span>
          </div>
        </div>
      </Row>
    </Container>
    </header>
  );
};

export default Header;
