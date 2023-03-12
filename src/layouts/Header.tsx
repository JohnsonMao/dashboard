import { useState } from 'react';

/* Mui */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

/* Icon */
import DownIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import LogoutIcon from '@mui/icons-material/LogoutRounded';
import PersonIcon from '@mui/icons-material/PersonRounded';

/* Context */
import { ToggleThemeButton } from '@/contexts/ThemeContext';

import { ToggleSidebarButton } from './Sidebar';

const rotateSX = (isRight: boolean) => ({
    transform: `rotate(${isRight ? 0 : -90}deg)`,
    transition: 'transform .25s'
});

function Header() {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" sx={(t) => ({ zIndex: t.zIndex.drawer + 1 })}>
            <Toolbar>
                <Typography sx={{ flex: 1 }}>Logo</Typography>
                <ToggleThemeButton />
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Button color="inherit" sx={{ fontWeight: 'bold' }}>
                        現在狀態：上班
                    </Button>
                    <Box>
                        <Button color="inherit" onClick={handleOpenUserMenu}>
                            <PersonIcon />
                            johnson.mao
                            <DownIcon sx={rotateSX(!!anchorElUser)} />
                        </Button>
                        <Menu
                            id="menu-appbar"
                            open={!!anchorElUser}
                            anchorEl={anchorElUser}
                            onClose={handleCloseUserMenu}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center'
                            }}
                        >
                            <MenuItem
                                onClick={handleCloseUserMenu}
                                sx={{ flexDirection: 'column' }}
                            >
                                <Typography>偏好設定</Typography>
                                <Typography variant="caption">
                                    個人化設定
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Button color="inherit" sx={{ fontWeight: 'bold' }}>
                        <LogoutIcon />
                        登出
                    </Button>
                </Box>
                <ToggleSidebarButton />
            </Toolbar>
        </AppBar>
    );
}

export default Header;
