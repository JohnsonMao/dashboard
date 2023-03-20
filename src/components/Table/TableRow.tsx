/* Mui */
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import MuiTableRow, {
    TableRowProps as MuiTableRowProps
} from '@mui/material/TableRow';

export type Header<T extends Record<keyof T, React.ReactNode>> = {
    key: keyof T & string;
    label: string;
    render?: (value: React.ReactNode, item?: T) => React.ReactNode;
} & TableCellProps;

type HeaderRowProps = {
    isHeaders: true;
    row?: never;
};

type DataRowProps<T> = {
    isHeaders?: false;
    row: T;
};

export type TableRowProps<T extends Record<keyof T, React.ReactNode>> =
    MuiTableRowProps & {
        headers: Header<T>[];
    } & (HeaderRowProps | DataRowProps<T>);

const initBodyRowProps = {
    hover: true,
    role: 'checkbox',
    tabIndex: -1
};

function TableRow<T extends Record<keyof T, React.ReactNode>>({
    headers,
    isHeaders,
    row,
    ...tableRowProps
}: TableRowProps<T>) {
    const rowProps = isHeaders ? {} : initBodyRowProps;

    return (
        <MuiTableRow {...rowProps} {...tableRowProps}>
            {headers.map((header) => {
                const { label, key, render, ...tableCellProps } = header;
                const value = isHeaders ? label : row[header.key];

                return (
                    <TableCell key={key} {...tableCellProps}>
                        {typeof render === 'function'
                            ? render(value, row)
                            : value}
                    </TableCell>
                );
            })}
        </MuiTableRow>
    );
}

export default TableRow;
