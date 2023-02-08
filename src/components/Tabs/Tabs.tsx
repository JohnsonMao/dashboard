import React from 'react';
import BsTabs, { TabsProps as BsTabsProps } from 'react-bootstrap/Tabs';
import BsTab, { TabProps } from 'react-bootstrap/Tab';

export interface TabsProps extends BsTabsProps {
    items: TabProps[];
}

const Tabs: React.FC<TabsProps> = (props) => {
    const { items, ...tabsProps } = props;

    return (
        <BsTabs {...tabsProps}>
            {items.map((item) => (
                <BsTab key={item.eventKey} {...item} />
            ))}
        </BsTabs>
    );
};

export default Tabs;
