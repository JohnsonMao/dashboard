import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Container, Navbar, Nav } from 'react-bootstrap';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';

import { auth } from '../../utils/firebase';

const Header: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (_user) => {
            setUser(_user);
        });
    }, []);

    return (
        <Navbar className="border-bottom mb-3">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Social App
                </Navbar.Brand>
                <Navbar.Text className="me-auto">
                    <Form.Control />
                </Navbar.Text>
                <Nav className="justify-content-end gap-3">
                    {user ? (
                        <>
                            <Nav.Item as={Link} to="/newPost">
                                發表文章
                            </Nav.Item>
                            <Nav.Item as={Link} to="/user">
                                會員
                            </Nav.Item>
                            <Nav.Item onClick={() => signOut(auth)}>
                                登出
                            </Nav.Item>
                        </>
                    ) : (
                        <Nav.Item as={Link} to="/signin">
                            註冊/登入
                        </Nav.Item>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
