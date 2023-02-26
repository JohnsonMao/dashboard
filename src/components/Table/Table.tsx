import React from 'react';
import Paper from '@mui/material/Paper';

/* Mui */
import MuiTable, { TableProps as MuiTableProps } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import TableCell, { TableCellProps } from './TableCell';

import rows from '@/assets/mocks/table.json';

interface Column extends TableCellProps {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: string;
    minWidth?: number;
    align?: 'right';
    // format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'name', label: 'Name', minWidth: 120 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 80 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 120,
        align: 'right',
        format: (value) =>
            typeof value === 'number' && value.toLocaleString('en-US')
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 120,
        align: 'right',
        format: (value) =>
            typeof value === 'number' && value.toLocaleString('en-US')
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 120,
        align: 'right',
        format: (value) => typeof value === 'number' && value.toFixed(2)
    }
];

export interface TableProps extends MuiTableProps {
    headers?: React.ReactNode;
    children?: React.ReactNode;
}

const Table: React.FC<TableProps> = (props) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer>
                <MuiTable stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    value={column.label}
                                />
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.code}
                                >
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell
                                                key={column.id}
                                                format={column.format}
                                                value={value}
                                            />
                                        );
                                    })}
                                </TableRow>
                            ))}
                    </TableBody>
                </MuiTable>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default Table;
