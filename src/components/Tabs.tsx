import Box from '@mui/material/Box';
import MuiTabs, { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
import Tab, { TabProps as MuiTabProps } from '@mui/material/Tab';

interface TabsProps extends MuiTabsProps {
    value: string | number;
    tabs: MuiTabProps[];
}

const Tabs: React.FC<TabsProps> = (props) => {
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

export default Tabs;
