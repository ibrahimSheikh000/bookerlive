import React, {useState, useEffect}from 'react'
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap'
import "../css/Navbar.css"
import logo from '../images/logo (1).PNG'
const NavbarComponent = () => {
    const [NavbarBackground, setNavbarBackground] = useState(false);
    const changeNavbarBackground = () => {
        if(window.scrollY >= 80){
            setNavbarBackground(true);
        }else{
            setNavbarBackground(false);
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll', changeNavbarBackground);
        return() => {
            window.removeEventListener('scroll', changeNavbarBackground);
        };
    }, []);
  return (
    <>
     <Navbar
  expand="lg"
  fixed="top"
  className={NavbarBackground ? 'navbar-colored' : 'navbar-transparent'}
>
  <Container>
  <Navbar.Brand href="#home" className="d-flex align-items-center">
      <img src={logo} alt="Logo" className='navbar-logo' style={{ maxWidth: '100%', height: 'auto' }} />
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
      <Container fluid>
        <Row className="w-100">
          <Col lg={8} md={7} sm={12}>
            <Nav className="d-flex justify-content-start">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#search-hotels">Search Hotels</Nav.Link>
              <Nav.Link href="#search-flights">Search Flights</Nav.Link>
              <Nav.Link href="#hotel-deals">Hotel Deals</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
          </Col>
          <Col lg={4} md={5} sm={12} className="d-flex justify-content-end">
            <Nav>
              <Nav.Link href="#register">
                <i className="bi bi-person-plus"></i> Register
              </Nav.Link>
              <Nav.Link href="#login">
                <i className="bi bi-box-arrow-in-right"></i> Login
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </>
  )
}

export default NavbarComponent