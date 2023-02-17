import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Root: React.FC = () => (
    <>
        <Header />
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Container
                component="main"
                sx={{ flexGrow: 1, py: 3, maxHeight: 'calc(100vh - 64px)' }}
            >
                <Outlet />
            </Container>
        </Box>
    </>
);

export default Root;
