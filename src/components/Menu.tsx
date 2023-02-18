import { useState, useContext } from 'react';

import { styled, Theme, CSSObject, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Toolbar from '@mui/material/Toolbar';
import RightIcon from '@mui/icons-material/ChevronRightRounded';
import DownIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import useMediaQuery from '@mui/material/useMediaQuery';

import NavLink from './NavLink';
import { MenuContext } from '../contexts/MenuContext';
import sidebar from '../assets/mocks/sidebar.json';

const DRAWER_WIDTH = 200;

const openedMixin = (theme: Theme): CSSObject => ({
    width: '100%',
    overflowX: 'hidden',
    transition: theme.transitions.create('height', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    [theme.breakpoints.up('sm')]: {
        width: DRAWER_WIDTH,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    }
});

const closedMixin = (theme: Theme): CSSObject => ({
    width: '100%',
    height: 0,
    overflowX: 'hidden',
    transition: theme.transitions.create('height', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.up('sm')]: {
        width: '64px',
        height: '100%',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    }
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme)
    })
}));

const Menu: React.FC = () => {
    const { open, toggleMenu } = useContext(MenuContext);
    const [childOpen, setChildOpen] = useState<boolean[]>([]);

    const handleClick = (index: number) => {
        setChildOpen((pre) => {
            const arr = pre.concat();
            arr[index] = !arr[index];
            return arr;
        });
    };

    return (
        // <Drawer variant="temporary" open={open}>
        <Drawer variant="permanent" open={open}>
            <Toolbar />
            <Divider />
            <List
                sx={{
                    maxHeight: 'calc(100vh - 112.5px)',
                    overflowY: 'auto',
                    overflowX: 'hidden'
                }}
            >
                {sidebar.map((page, index) => (
                    <ListItem key={page.text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            component={page.children ? 'div' : NavLink}
                            to={page.path}
                            onClick={() => handleClick(index)}
                        >
                            <ListItemText primary={page.text} sx={{ opacity: open ? 1 : 0 }} />
                            {page.children && open && (
                                <DownIcon
                                    sx={{ transform: `rotate(${childOpen[index] ? 180 : 0}deg)` }}
                                />
                            )}
                        </ListItemButton>
                        {open && (
                            <Collapse in={childOpen[index]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {page.children?.map((p) => (
                                        <ListItemButton
                                            key={p.text}
                                            component={NavLink}
                                            to={p.path}
                                            sx={{ pl: 4 }}
                                        >
                                            <ListItemText primary={p.text} />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Collapse>
                        )}
                    </ListItem>
                ))}
            </List>
            <Button
                onClick={toggleMenu}
                sx={{ position: 'absolute', bottom: 0, p: 1 }}
                color="inherit"
                fullWidth
            >
                <RightIcon sx={{ transform: `rotate(${open ? 180 : 0}deg)` }} />
            </Button>
        </Drawer>
    );
};

export default Menu;
