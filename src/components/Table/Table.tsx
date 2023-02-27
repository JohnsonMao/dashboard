import { useState, memo } from 'react';
import Paper from '@mui/material/Paper';

/* Mui */
import MuiTable, { TableProps as MuiTableProps } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';

import TableRow, { Header } from './TableRow';

type PrimaryKey = string | number;

export type TableProps<T = Record<string, string | number>> = {
    pk: PrimaryKey;
    headers: Header<T>[];
    data: T[];
    hasPagination?: boolean;
} & MuiTableProps;

const Table: React.FC<TableProps> = (props) => {
    const { headers, data, pk } = props;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

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
                        <TableRow headers={headers} isHeaders />
                    </TableHead>
                    <TableBody>
                        {data
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => (
                                <TableRow key={row[pk]} headers={headers} data={row} />
                            ))}
                    </TableBody>
                </MuiTable>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default memo(Table);
