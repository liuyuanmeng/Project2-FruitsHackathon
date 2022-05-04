import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import salad from './../images/salad.png'

const PageNavBar = () => {


  return (
    <Navbar expand='sm'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img src={salad}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end'>
          <Nav.Link className='text-white' as={Link} to='/fruits'>Fruits</Nav.Link>
          <Nav.Link className='text-white' as={Link} to='/salad'>Salad Maker</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavBar