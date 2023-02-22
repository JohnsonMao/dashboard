import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Header from '../components/Header';
import Menu from '../components/Menu';

const Root: React.FC = () => (
    <Box sx={{ display: 'flex' }}>
        <Header />
        <Menu />
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

export default Root;
