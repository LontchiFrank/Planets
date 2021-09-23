import React from "react";
import { Navbar, Nav,NavDropdown,Container } from "react-bootstrap";
function Navig() {
  return (
    <div>
      {/* <div className='planets-links'>
                        <Link to='/mercury' className='nav'>Mercury</Link>
                        <Link to='/venus'  className='nav'>Venus</Link>
                        <Link to='/earth' className='nav'>Earth</Link>
                        <Link to='/mars' className='nav'>Mars</Link>
                        <Link to='/jupiter' className='nav'>Jupiter</Link>
                        <Link to='/saturn' className='nav'>Saturn</Link> 
                        <Link to='/uranus' className='nav'>Uranus</Link> 
                        <Link to='/neptune' className='nav'>Neptune</Link> 
                    </div> */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navig;
