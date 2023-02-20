import { useState } from 'react';

import { styled, Theme, CSSObject } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Toolbar from '@mui/material/Toolbar';
import RightIcon from '@mui/icons-material/ChevronRightRounded';
import DownIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import NavLink from './NavLink';
import { useMenuContext } from '../contexts/MenuContext';
import sidebar from '../assets/mocks/sidebar.json';

const DRAWER_WIDTH = 200;
const openedMixin = (theme: Theme, isMobile?: boolean): CSSObject => ({
    width: '100%',
    height: 'calc(100vh - 72.5px)',
    overflowX: 'hidden',
    boxShadow: theme.shadows[2],
    transition: theme.transitions.create('height', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    [theme.breakpoints.up('md')]: {
        display: isMobile ? 'none' : 'block',
        width: DRAWER_WIDTH,
        height: '100%',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    }
});

const closedMixin = (theme: Theme, isMobile?: boolean): CSSObject => ({
    width: '100%',
    height: 0,
    overflow: 'hidden',
    boxShadow: theme.shadows[2],
    transition: theme.transitions.create('height', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.up('md')]: {
        display: isMobile ? 'none' : 'block',
        width: '64px',
        height: '100%',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
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

const MenuList: React.FC = () => {
    const { open, toggleMenu } = useMenuContext();
    const [childOpen, setChildOpen] = useState<boolean[]>([]);

    const handleClick = (page: typeof sidebar[number], index?: number) => {
        const isMobile = window.innerWidth < 900;

        if (isMobile && page.path) toggleMenu();

        if (index != null && index > -1) {
            setChildOpen((pre) => {
                const arr = pre.concat();
                arr[index] = !arr[index];
                return arr;
            });
        }
    };

    return (
        <List
            sx={{
                maxHeight: 'calc(100vh - 112.5px)',
                overflowY: 'auto',
                overflowX: 'hidden'
            }}
        >
            {sidebar.map((page, index) => (
                <ListItem
                    key={page.text}
                    disablePadding
                    sx={{ display: 'block' }}
                >
                    <ListItemButton
                        component={page.children ? 'div' : NavLink}
                        to={page.path}
                        onClick={() => handleClick(page, index)}
                    >
                        <ListItemText
                            primary={page.text}
                            sx={{ opacity: open ? 1 : 0 }}
                        />
                        {page.children && open && (
                            <DownIcon
                                sx={{
                                    transform: `rotate(${
                                        childOpen[index] ? 180 : 0
                                    }deg)`
                                }}
                            />
                        )}
                    </ListItemButton>
                    <Collapse
                        in={childOpen[index]}
                        timeout="auto"
                        unmountOnExit
                    >
                        <List component="div" disablePadding>
                            {page.children?.map((p) => (
                                <ListItemButton
                                    key={p.text}
                                    component={NavLink}
                                    to={p.path}
                                    sx={{ pl: 4 }}
                                    onClick={() => handleClick(p)}
                                >
                                    <ListItemText primary={p.text} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                </ListItem>
            ))}
        </List>
    );
};

const ResponsiveDrawer: React.FC = () => {
    const { open, toggleMenu } = useMenuContext();

    return (
        <Box component="nav" aria-label="sidebar">
            <Drawer
                variant="temporary"
                anchor="top"
                open={open}
                onClose={toggleMenu}
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
                <MenuList />
            </Drawer>
            <DasktopDrawer variant="permanent" open={open}>
                <Toolbar />
                <MenuList />
                <Button
                    onClick={toggleMenu}
                    sx={{
                        display: { md: 'flex', sm: 'none' },
                        position: 'absolute',
                        bottom: 0,
                        p: 1
                    }}
                    color="inherit"
                    fullWidth
                >
                    <RightIcon
                        sx={{ transform: `rotate(${open ? 180 : 0}deg)` }}
                    />
                </Button>
            </DasktopDrawer>
        </Box>
    );
};

export default ResponsiveDrawer;
