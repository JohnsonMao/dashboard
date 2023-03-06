import { useState } from 'react';

/* Mui */
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

/* Icon */
import DownIcon from '@mui/icons-material/KeyboardArrowDownRounded';

/* Component */
import NavLink from '@/components/NavLink';

/* Mock */
import sidebar from '@/assets/mocks/sidebar.json';

const rotateSX = (isRight: boolean) => ({
    transform: `rotate(${isRight ? 0 : -90}deg)`,
    transition: 'transform .25s'
});

type MenuProps = {
    open: boolean;
    toggleSidebar: () => void;
    children?: React.ReactNode;
};

function Menu(props: MenuProps) {
    const { open, toggleSidebar, children } = props;
    const [childOpen, setChildOpen] = useState<boolean[]>([]);

    const handleClick = (page: typeof sidebar[number], index?: number) => {
        const isMobile = window.innerWidth < 900;

        if (isMobile && page.path) toggleSidebar();

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
                overflowY: 'overlay',
                overflowX: 'hidden',
                '& .active': {
                    background: 'rgba(0, 0, 0, 0.12)'
                }
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
}

Menu.defaultProps = {
    children: null
};

export default Menu;
