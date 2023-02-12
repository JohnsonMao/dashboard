import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>
    );
};

export default Root;
