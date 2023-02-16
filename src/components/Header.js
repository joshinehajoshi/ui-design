import React, {useState} from 'react';
import '../styles/header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Sidebar from './Sidebar';


function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const openCloseHandler = () => {
      setIsOpen(!isOpen)
      console.log(isOpen)
  }

  return (
    <div className='header-wrapper'>
      <Sidebar isOpen={isOpen} />
  <Navbar bg="light" expand="lg" className='navbar'>

  <Button onClick={openCloseHandler} className="slide-btn" variant="light">#</Button>
      <Container fluid>
        <Navbar.Brand href="#">Hi User</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header