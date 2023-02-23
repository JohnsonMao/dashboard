import { useState } from 'react';

/* Mui */
import { styled, Theme, CSSObject, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
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
import { useMenuContext } from '../contexts/MenuContext';

/* Component */
import NavLink from './NavLink';

/* Mock */
import sidebar from '../assets/mocks/sidebar.json';

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

const MenuList: React.FC<{ children?: React.ReactNode }> = (props) => {
    const { children } = props;
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
                            <DownIcon sx={rotateSX(childOpen[index])} />
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
            {children}
        </List>
    );
};

const ResponsiveDrawer: React.FC = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const { open, toggleMenu } = useMenuContext();
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser((pre) => (pre ? null : event.currentTarget));
    };

    return (
        <Box component="nav">
            {isDesktop ? (
                <DasktopDrawer variant="permanent" open={open}>
                    <Toolbar />
                    <MenuList />
                    <Button
                        onClick={toggleMenu}
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
            ) : (
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
                    <MenuList>
                        <ListItemButton>
                            <ListItemText primary="現在狀態：上班" />
                        </ListItemButton>
                        <ListItemButton onClick={handleUserMenu}>
                            <PersonIcon />
                            <ListItemText primary="johnson.mao" />
                            <DownIcon sx={rotateSX(!!anchorElUser)} />
                        </ListItemButton>
                        <Collapse
                            in={!!anchorElUser}
                            timeout="auto"
                            unmountOnExit
                        >
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
                    </MenuList>
                </Drawer>
            )}
        </Box>
    );
};

export default ResponsiveDrawer;
