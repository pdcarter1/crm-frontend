import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../assets/img/logo.png';

export const Header = () => {
    return (
        <Navbar
            CollapseOnClick
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
                    <Nav.Link href="/dashboard</Nav.Link>">Dashboard</Nav.Link>
                    <Nav.Link href="/dashboard</Nav.Link>">Tickets</Nav.Link>
                    <Nav.Link href="/dashboard</Nav.Link>">Logout</Nav.Link>
                </Nav>    
            </Navbar.Collapse>
        </Navbar>
    )
}