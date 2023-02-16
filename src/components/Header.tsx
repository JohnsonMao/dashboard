import React, { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import { ThemeContext } from '../contexts/ThemeContext';

const Header: React.FC = () => {
    const theme = useTheme();
    const colorMode = useContext(ThemeContext);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="sticky" sx={(t) => ({ zIndex: t.zIndex.drawer + 1 })}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography>Logo</Typography>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}
                >
                    <Typography>現在狀態：上班</Typography>
                    <Box>
                        <Typography onClick={handleOpenUserMenu}>
                            johnson.mao
                        </Typography>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            open={!!anchorElUser}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography>偏好設定</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={colorMode.toggleColorMode}
                    >
                        {theme.palette.mode}
                        mode
                    </Button>
                    <Button variant="contained" color="secondary">
                        登出
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
