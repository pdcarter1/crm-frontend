import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import { useHistory} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { userLogout } from "../../api/userApi";

export const Header = () => {
  const history = useHistory();

  const logMeOut = () => {
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("crmSite");
    userLogout();
    history.push("/");
  };

  return (
    <Navbar
      collapseOnSelect
      bg="info"
      variant="dark"
      expand="md"
    >
      <Navbar.Brand>
        <img src={logo} width="50px" alt="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/dashboard">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link href="/dashboard">Tickets</Nav.Link>
          </LinkContainer>

          
          
          <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};