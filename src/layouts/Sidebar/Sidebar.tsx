import { useState } from 'react';

/* Mui */
import { styled, Theme, CSSObject, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';

/* Icon */
import DownIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import LogoutIcon from '@mui/icons-material/LogoutRounded';
import PersonIcon from '@mui/icons-material/PersonRounded';

/* Context */
import { useSidebarContext } from '@/contexts/SidebarContext';

import Menu from './Menu';

const openedMixin = (theme: Theme): CSSObject => ({
    width: '200px',
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    [theme.breakpoints.up('md')]: {
        display: 'block',
        boxShadow: theme.shadows[2]
    }
});

const closedMixin = (theme: Theme): CSSObject => ({
    width: '64px',
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.up('md')]: {
        display: 'block',
        boxShadow: theme.shadows[2]
    }
});

const DasktopDrawer = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    display: 'none',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme)
    })
}));

const rotateSX = (isRight: boolean) => ({
    transform: `rotate(${isRight ? 0 : -90}deg)`,
    transition: 'transform .25s'
});

const Sidebar: React.FC = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const { open, toggleSidebar } = useSidebarContext();
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser((pre) => (pre ? null : event.currentTarget));
    };

    if (isDesktop) {
        return (
            <DasktopDrawer variant="permanent" open={open}>
                <Toolbar />
                <Menu />
                <Button
                    onClick={toggleSidebar}
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        p: 1
                    }}
                    color="inherit"
                    fullWidth
                >
                    <DownIcon
                        sx={{ transform: `rotate(${open ? 90 : -90}deg)` }}
                    />
                </Button>
            </DasktopDrawer>
        );
    }

    return (
        <Drawer
            variant="temporary"
            anchor="top"
            open={open}
            onClose={toggleSidebar}
            ModalProps={{
                keepMounted: true // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box'
                }
            }}
        >
            <Toolbar />
            <Menu>
                <ListItemButton>
                    <ListItemText primary="現在狀態：上班" />
                </ListItemButton>
                <ListItemButton onClick={handleUserMenu}>
                    <PersonIcon />
                    <ListItemText primary="johnson.mao" />
                    <DownIcon sx={rotateSX(!!anchorElUser)} />
                </ListItemButton>
                <Collapse in={!!anchorElUser} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="偏好設定" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton>
                    <LogoutIcon />
                    <ListItemText primary="登出" />
                </ListItemButton>
            </Menu>
        </Drawer>
    );
};

export default Sidebar;
