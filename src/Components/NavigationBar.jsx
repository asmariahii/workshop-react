import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Shop</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link>
          <NavLink to="/" exact activeClassName="active" className="nav-link">
            Home
          </NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/events" exact activeClassName="active" className="nav-link">
            Events
          </NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/TodoList" exact activeClassName="active" className="nav-link">
            Todo
          </NavLink>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
