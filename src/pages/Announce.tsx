import { useState } from 'react';
import Box from '@mui/material/Box';

import Tabs from '../components/Tabs';

enum announceType {
    '其他',
    '管理辦法',
    '活動公告',
    '全部' = 'all'
}

const tabs = [
    {
        label: '全部',
        value: announceType['全部']
    },
    {
        label: '管理辦法',
        value: announceType['管理辦法']
    },
    {
        label: '活動公告',
        value: announceType['活動公告']
    },
    {
        label: '其他',
        value: announceType['其他']
    }
];

const Announce: React.FC = () => {
    const [value, setValue] = useState(announceType['全部']);

    const handleChange = (e: React.SyntheticEvent, v: announceType) => {
        setValue(v);
    };

    return (
        <Tabs value={value} tabs={tabs} onChange={handleChange}>
            {tabs.map((tab) => (
                <Box key={tab.value}>{value === tab.value && tab.label}</Box>
            ))}
        </Tabs>
    );
};

export default Announce;
