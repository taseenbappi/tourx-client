import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo/tour-x.png';
import './Header.css';


const Header = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='shadow-sm'>
                <Container fluid>
                    <Navbar.Brand to="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fw-bolder">
                            <Nav.Link as={HashLink} to="/home" className="item-navi">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#tourPackage">Tour Package</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#blogs">Blogs</Nav.Link>
                            <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#contact">Contact US</Nav.Link>
                            <Nav.Link as={HashLink} to="/booking">My Booking</Nav.Link>
                            <Nav.Link as={HashLink} to="/register">Register</Nav.Link>
                            {
                                user.displayName ?
                                    <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                                    :
                                    <button className="btn btn-primary">Logout</button>
                            }

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;