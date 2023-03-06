import { useState } from 'react';

/* Mui */
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Toolbar from '@mui/material/Toolbar';

/* Icon */
import DownIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import LogoutIcon from '@mui/icons-material/LogoutRounded';
import PersonIcon from '@mui/icons-material/PersonRounded';

/* Context */
import { useSidebar } from '@/contexts/SidebarContext';

import Menu from './Menu';

const rotateSX = (isRight: boolean) => ({
    transform: `rotate(${isRight ? 0 : -90}deg)`,
    transition: 'transform .25s'
});

function Sidebar() {
    const { open, toggleSidebar } = useSidebar();
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser((pre) => (pre ? null : event.currentTarget));
    };

    return (
        <Drawer
            variant="temporary"
            anchor="top"
            open={open}
            onClose={toggleSidebar}
            ModalProps={{
                keepMounted: true // Better open performance on mobile.
            }}
        >
            <Toolbar />
            <Menu open={open} toggleSidebar={toggleSidebar}>
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
}

export default Sidebar;
