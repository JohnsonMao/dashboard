import Box, { BoxProps } from '@mui/material/Box';
import MuiTabs, { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
import Tab, { TabProps as MuiTabProps } from '@mui/material/Tab';

interface TabPanelProps extends BoxProps {
    value: string | number;
    target: string | number;
}

const TabPanel: React.FC<TabPanelProps> = (props) => {
    const { children, value, target, ...other } = props;

    return (
        <Box role="tabpanel" hidden={value !== target} {...other}>
            {value === target && <Box sx={{ p: 3 }}>{children}</Box>}
        </Box>
    );
};

interface TabsProps extends MuiTabsProps {
    tabs: MuiTabProps[];
}

const Tabs: React.FC<TabsProps> & { Panel: typeof TabPanel } = (props) => {
    const { children, tabs, ...restProps } = props;

    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <MuiTabs {...restProps}>
                    {tabs.map((tab) => (
                        <Tab key={tab.value} {...tab} />
                    ))}
                </MuiTabs>
            </Box>
            {children}
        </Box>
    );
};

Tabs.Panel = TabPanel;

export default Tabs;
