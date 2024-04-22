import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Header() {
  const wishlist = useSelector((state) => state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <>

        
    <Navbar expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none',color:'white'}} ><i class="fa-solid fa-cart-shopping"></i> E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}><i className="fa-sharp fa-solid fa-heart fa-flip-horizontal"></i>Wishlist <Badge bg="secondary">{wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link ><Link to={'/cart'} style={{textDecoration:'none',color:'white'}}><i className="fa-solid fa-cart-shopping"></i>Cart <Badge bg="secondary">{cart.length}</Badge></Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    </>
  )
}

export default Header