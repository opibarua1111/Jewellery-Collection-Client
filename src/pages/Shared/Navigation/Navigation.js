// import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar variant="dark" fixed="top" sticky="top" collapseOnSelect expand="lg" className="bg-black">
                <Container>
                    <Navbar.Brand href="#home">Jewellery</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
                        <Nav.Link as={Link} to="/explore" className="text-white">Explore</Nav.Link>
                        {user?.email ?
                            <Nav>
                                <Nav.Link as={Link} to="/dashboard" className="text-white">Dashboard</Nav.Link>
                                <br />
                                <Button onClick={logOut} className="text-white btn-danger" variant="light">Logout</Button>
                            </Nav>
                            :
                            <Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link>
                        }
                        {user?.email && <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;