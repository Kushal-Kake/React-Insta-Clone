import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../../Images/icon.svg'
import camera from '../../../../Images/camera.png'
import './Header.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt='logo' />
            <span>Insta clone</span></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Link to="/post/new"><img src={camera} alt='camera' /></Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>


  )
}