import { useState, memo } from 'react';

/* Mui */
import MuiTable, { TableProps as MuiTableProps } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';

import TableRow, { Header } from './TableRow';

export type TableProps<
    T extends Record<keyof T, React.ReactNode>,
    P extends string
> = {
    /** 每筆 data 唯一 key */
    pk: P;
    headers: Header<T>[];
    data: (T & Record<P, string>)[];
    total?: number;
    showPagination?: boolean;
    rowsPerPageOptions?: number[];
} & MuiTableProps;

function Table<T extends Record<keyof T, React.ReactNode>, P extends string>(
    props: TableProps<T, P>
) {
    const {
        pk,
        headers,
        data,
        total,
        showPagination,
        rowsPerPageOptions,
        ...restProps
    } = props;

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const showData = showPagination
        ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : data;

    const handleChangePage = (e: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+e.target.value);
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
            {showPagination && (
                <TablePagination
                    component="div"
                    count={total != null ? total : data.length}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={rowsPerPageOptions}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    onPageChange={handleChangePage}
                />
            )}
        </>
    );
}

Table.defaultProps = {
    total: undefined,
    showPagination: false,
    rowsPerPageOptions: [5, 10, 25, 100]
};

const genericMemo: <T>(component: T) => T = memo;

export default genericMemo(Table);
