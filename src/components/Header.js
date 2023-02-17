import React, {useState} from 'react';
import '../assets/styles/header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import search from '../styles/images/XMLID_223_.png';
import notification from '../assets/images/Vector.png';
import profile from '../assets/images/ProfilePic.png';


function Header({openCloseHandler}) {
  // const [isOpen, setIsOpen] = useState(true);

  // const openCloseHandler = () => {
  //     setIsOpen(!isOpen)
  //     console.log(isOpen)
  // }

  return (
    <>
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
          <Button><img src={search}></img></Button>
<Button><img src={notification}></img></Button>
<Button><img src={profile}></img></Button> 
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    </>
  )
}

export default Header