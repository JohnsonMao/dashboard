import { useState, memo } from 'react';

/* Mui */
import MuiTable, { TableProps as MuiTableProps } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer, {
    TableContainerProps
} from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import TableRow, { Header } from './TableRow';

export type TableProps<
    T extends Record<keyof T, React.ReactNode>,
    P extends string
> = {
    /** 每筆 data 唯一 key */
    pk: P;
    headers: Header<T>[];
    isLoading?: boolean;
    data?: (T & Record<P, string | number>)[];
    total?: number;
    showPagination?: boolean;
    rowsPerPageOptions?: number[];
    tableContainerProps?: TableContainerProps;
} & MuiTableProps;

function Table<T extends Record<keyof T, React.ReactNode>, P extends string>({
    pk,
    headers,
    isLoading,
    data,
    total,
    showPagination,
    rowsPerPageOptions = [10, 25, 100],
    tableContainerProps,
    ...tableProps
}: TableProps<T, P>) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const showData = showPagination
        ? data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
            <TableContainer {...tableContainerProps}>
                <MuiTable stickyHeader {...tableProps}>
                    <TableHead>
                        <TableRow headers={headers} isHeaders />
                    </TableHead>
                    <TableBody>
                        {isLoading ? (
                            <Box component="tr">
                                <Box
                                    component="td"
                                    colSpan={headers.length}
                                    textAlign="center"
                                    p={3}
                                >
                                    <CircularProgress />
                                </Box>
                            </Box>
                        ) : (
                            showData?.map((row) => (
                                <TableRow
                                    key={row[pk]}
                                    headers={headers}
                                    row={row}
                                />
                            ))
                        )}
                    </TableBody>
                </MuiTable>
            </TableContainer>
            {showPagination && (
                <TablePagination
                    component="div"
                    count={total != null ? total : data?.length || -1}
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

const genericMemo: <T>(component: T) => T = memo;

export default genericMemo(Table);
