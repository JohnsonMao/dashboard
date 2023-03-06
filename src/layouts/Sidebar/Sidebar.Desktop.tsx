import { useState } from 'react';

/* Mui */
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

/* Icon */
import DownIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import Menu from './Menu';

const openedMixin = (theme: Theme): CSSObject => ({
    marginRight: -1,
    paddingRight: 1,
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

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
    height: 0,
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

function Sidebar() {
    const [open, setOpen] = useState(true);

    const toggleSidebar = () => setOpen(!open);

    return (
        <Drawer variant="permanent" open={open}>
            <Toolbar />
            <Menu open={open} toggleSidebar={toggleSidebar} />
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
                <DownIcon sx={{ transform: `rotate(${open ? 90 : -90}deg)` }} />
            </Button>
        </Drawer>
    );
}

export default Sidebar;
