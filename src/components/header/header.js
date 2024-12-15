import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/user" className="nav-link">PostUser</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
