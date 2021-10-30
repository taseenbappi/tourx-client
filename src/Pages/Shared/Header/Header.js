import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo/tour-x.png';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div className="">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='shadow-sm container-fluid'>
                <Container fluid>
                    <Navbar.Brand to="#home"><img src={logo} alt="" className="img-fluid" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fw-bolder">
                            <Nav.Link as={HashLink} to="/home" className="item-navi">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#tourPackage">Tour Package</Nav.Link>
                            {user.displayName && <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link>}
                            <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/addPackage">Add Package</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/myOrder">My Order</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/manageOrder">Manage Order</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={HashLink} to="/home#blogs">Blogs</Nav.Link>
                            <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#contact">Contact US</Nav.Link>
                            <Nav.Link as={HashLink} to="/register">Register</Nav.Link>
                            {
                                user.displayName &&
                                <img src={user.photoURL} alt="" height='50' width='50' className="rounded-circle m-auto p-1" />
                            }
                            <Nav.Link className="text-primary">{user?.displayName}</Nav.Link>

                            {
                                !user.displayName ?
                                    <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                                    :
                                    <button className="btn btn-primary" onClick={logOut}>Logout</button>
                            }

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;