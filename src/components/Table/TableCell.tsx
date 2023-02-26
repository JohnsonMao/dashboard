import React from 'react';

/* Mui */
import MuiTableCell, {
    TableCellProps as MuiTableCellProps
} from '@mui/material/TableCell';

export interface TableCellProps extends MuiTableCellProps {
    value?: React.ReactNode;
    format?: (value: TableCellProps['value']) => React.ReactNode;
}

const TableCell = <T extends TableCellProps>(props: T) => {
    const { format, value, ...restProps } = props;

    return (
        <MuiTableCell {...restProps}>
            {typeof format === 'function' ? format(value) : value}
        </MuiTableCell>
    );
};

export default TableCell;
