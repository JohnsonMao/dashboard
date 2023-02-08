import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Container, Navbar, Nav } from 'react-bootstrap';

const Header: React.FC = () => {
    return (
        <Navbar className='border-bottom mb-3'>
            <Container>
                <Navbar.Brand as={Link} to='/'>Social App</Navbar.Brand>
                <Navbar.Text className='me-auto'>
                    <Form.Control />
                </Navbar.Text>
                <Nav className='justify-content-end'>
                    <Nav.Item as={Link} to='/signin'>註冊/登入</Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
