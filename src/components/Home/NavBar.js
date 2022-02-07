import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand>Flipzon</Navbar.Brand>
                    {/* <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/product">Products</Nav.Link>
                    </Nav> */}
            </Container>
        </Navbar>
    );
}

export default NavBar;