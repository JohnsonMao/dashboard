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

function TableRow<T extends Record<keyof T, React.ReactNode>>(
    props: TableRowProps<T>
) {
    const { headers, isHeaders, row, ...restProps } = props;
    const rowProps = isHeaders ? {} : initBodyRowProps;

    return (
        <MuiTableRow {...rowProps} {...restProps}>
            {headers.map((header) => {
                const value = isHeaders ? header.label : row[header.key];
                const render = isHeaders ? undefined : header.render;

                return (
                    <TableCell key={header.key}>
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
