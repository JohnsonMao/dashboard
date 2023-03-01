import { useState } from 'react';

/* Mui */
import MuiTable, { TableProps as MuiTableProps } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';

import { genericMemo } from '@/utils/generic';
import TableRow, { Header } from './TableRow';

export type TableProps<T extends Record<keyof T, React.ReactNode>, P extends string> = {
    /** 每筆 data 唯一 key */
    pk: P;
    headers: Header<T>[];
    data: (T & Record<P, string>)[];
    hasPagination?: boolean;
    rowsPerPageOptions?: number[];
    total?: number;
} & MuiTableProps;

function Table<T extends Record<keyof T, React.ReactNode>, P extends string>(
    props: TableProps<T, P>
) {
    const {
        headers,
        data,
        pk,
        hasPagination,
        total,
        rowsPerPageOptions,
        ...restProps
    } = props;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const showData = hasPagination
        ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : data;

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
        <>
            <TableContainer>
                <MuiTable stickyHeader {...restProps}>
                    <TableHead>
                        <TableRow headers={headers} isHeaders />
                    </TableHead>
                    <TableBody>
                        {showData.map((row) => (
                            <TableRow
                                key={row[pk]}
                                headers={headers}
                                row={row}
                            />
                        ))}
                    </TableBody>
                </MuiTable>
            </TableContainer>
            {hasPagination && (
                <TablePagination
                    component="div"
                    rowsPerPageOptions={rowsPerPageOptions}
                    count={total != null ? total : data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            )}
        </>
    );
}

Table.defaultProps = {
    rowsPerPageOptions: [10, 25, 100]
};

export default genericMemo(Table);
