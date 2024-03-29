import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const whishlist = useSelector(state => state.wishlistReducer)
  const cart=useSelector(state=>state.cartReducer)
  return (
      <>
          <Navbar style={{zIndex:'1'}} expand="lg" className="bg-secondary position-fixed top-0 w-100">
      <Container>
        <Navbar.Brand > <Link to={"/"} style={{color:'blueviolet', fontWeight:'bold',textDecoration:'none'}} > <i class="fa-solid fa-truck-fast  fa-bounce me-2"></i> E-Cart  </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
              <Nav.Link> <Link to={'/whishlist'} className='d-flex align-item-center' style={{ textDecoration: 'none', color: 'red', fontWeight: 'bold' }} > <i class="fa-solid fa-heart fa-beat-fade me-2"></i>  Whishlist
                <Badge className='rounded ms-2 bg-success'> {whishlist.length} </Badge> </Link></Nav.Link>
              <Nav.Link> <Link to={'/cart'} className='d-flex align-item-center' style={{ textDecoration: 'none', color: 'red', fontWeight: 'bold' }} > <i class="fa-solid fa-shopping-cart fa-beat-fade me-2 "></i>  Cart
                <Badge className='rounded ms-2 bg-success'>{cart.length}</Badge> </Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
      </>
  )
}

export default Header