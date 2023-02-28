import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Header from './Header';
import Sidebar from './Sidebar';

function Root() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Header />
            <Sidebar />
            <Container
                component="main"
                sx={{
                    mt: 8,
                    p: 3,
                    flexGrow: 1,
                    maxHeight: 'calc(100vh - 64px)',
                    overflow: 'auto'
                }}
            >
                <Outlet />
            </Container>
        </Box>
    );
}

export default Root;
