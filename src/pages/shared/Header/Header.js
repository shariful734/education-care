import React from 'react';
import './Header.css'
import { Container, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavLink } from 'react-router-dom';



const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="nav-background" variant="dark">
        <Container>
          <Navbar.Brand className="fw-bold">Education Care</Navbar.Brand>
          <Navbar.Toggle />
          <NavbarCollapse className="justify-content-end">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/AddCourse">add course</NavLink>

          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;