/* Mui */
import MuiTableRow, {
    TableRowProps as MuiTableRowProps
} from '@mui/material/TableRow';

import TableCell, { TableCellProps } from './TableCell';

export type Header<T = Record<string, unknown>> = {
    key: keyof T;
    label: string;
} & TableCellProps;

export type TableRowProps = {
    headers: Header[];
    data?: Record<string, React.ReactNode>;
    isHeaders?: boolean;
} & MuiTableRowProps;

const initBodyRowProps = {
    hover: true,
    role: 'checkbox',
    tabIndex: -1
};

const TableRow: React.FC<TableRowProps> = (props) => {
    const { headers, isHeaders, data, ...restProps } = props;
    const rowProps = isHeaders ? {} : initBodyRowProps;

    return (
        <MuiTableRow {...rowProps} {...restProps}>
            {headers.map((column) => {
                const value = isHeaders ? column.label : data?.[column.key];
                const format = isHeaders ? undefined : column.format;

                return (
                    <TableCell
                        key={column.key}
                        format={format}
                        value={value}
                    />
                );
            })}
        </MuiTableRow>
    );
};

export default TableRow;
