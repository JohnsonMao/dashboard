import React from 'react';
import MuiTableCell, {
    TableCellProps as MuiTableCellProps
} from '@mui/material/TableCell';

export interface TableCellProps extends MuiTableCellProps {
    column?: any;
    value?: any;
}

const TableCell: React.FC<TableCellProps> = (props) => {
    const { column, value } = props;
    return (
        <MuiTableCell key={column.id} align={column.align}>
            {column.format && typeof value === 'number'
                ? column.format(value)
                : value}
        </MuiTableCell>
    );
};

export default TableCell;
