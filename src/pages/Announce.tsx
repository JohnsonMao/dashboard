import { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';

import Tabs from '@/components/Tabs';
import Table from '@/components/Table';

import { headers, Data } from '@/assets/mocks/table';

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

function Announce() {
    const [value, setValue] = useState(announceType['全部']);
    const [data, setData] = useState<Data[]>([]);

    const handleChange = (e: React.SyntheticEvent, v: announceType) => {
        setValue(v);
    };

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/comments'
            );
            const result = await response.json();

            setData(result);
        }
        fetchData();
    }, []);

    return (
        <Paper>
            <Tabs value={value} tabs={tabs} onChange={handleChange}>
                <Table
                    pk="id"
                    headers={headers}
                    data={data}
                    tableContainerProps={{ sx: { maxHeight: 396 } }}
                    showPagination
                />
            </Tabs>
        </Paper>
    );
}

export default Announce;
