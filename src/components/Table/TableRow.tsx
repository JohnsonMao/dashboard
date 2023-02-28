/* Mui */
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import MuiTableRow, {
    TableRowProps as MuiTableRowProps
} from '@mui/material/TableRow';

export type Header<T> = {
    key: keyof T;
    label: string;
    value?: React.ReactNode;
    render?: (value: Header<T>['value'], item?: T) => React.ReactNode;
} & TableCellProps;

export type TableRowProps<T> = {
    isHeaders?: boolean;
    headers: Header<T>[];
    row?: T;
} & MuiTableRowProps;

const initBodyRowProps = {
    hover: true,
    role: 'checkbox',
    tabIndex: -1
};

function TableRow<T>(props: TableRowProps<T>) {
    const { headers, isHeaders, row, ...restProps } = props;
    const rowProps = isHeaders ? {} : initBodyRowProps;

    return (
        <MuiTableRow {...rowProps} {...restProps}>
            {headers.map((header) => {
                const value = isHeaders ? header.label : row?.[header.key];
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
