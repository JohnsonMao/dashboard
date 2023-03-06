import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Header from './Header';
import Sidebar from './Sidebar';

function Root() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box sx={{ display: 'flex' }}>
            <Header />
            {isDesktop ? <Sidebar.Desktop /> : <Sidebar.Mobile />}
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
