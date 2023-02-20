import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import RightIcon from '@mui/icons-material/ChevronRightRounded';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useThemeContext } from '../contexts/ThemeContext';
import { useMenuContext } from '../contexts/MenuContext';

const Header: React.FC = () => {
    const theme = useTheme();

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const { toggleColorMode } = useThemeContext();
    const { open, toggleMenu } = useMenuContext();

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
                        display: { xs: 'none', md: 'flex' },
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
                    <IconButton onClick={toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? (
                            <Brightness7Icon />
                        ) : (
                            <Brightness4Icon />
                        )}
                    </IconButton>
                    <Button variant="contained" color="secondary">
                        登出
                    </Button>
                </Box>
                <Box sx={{ display: { sm: 'block', md: 'none' } }}>
                    <IconButton
                        onClick={toggleMenu}
                        color="inherit"
                        size="large"
                    >
                        <RightIcon
                            sx={{ transform: `rotate(${open ? 180 : 0}deg)` }}
                        />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
