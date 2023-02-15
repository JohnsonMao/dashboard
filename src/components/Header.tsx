import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import { ColorModeContext } from '../App';

const Header: React.FC = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Box component="nav" bgcolor="primary.main">
            Header
            <Button
                variant="contained"
                color="secondary"
                onClick={colorMode.toggleColorMode}
            >
                {theme.palette.mode}
                mode
            </Button>
        </Box>
    );
};

export default Header;
