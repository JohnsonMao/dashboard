/* Mui */
import MuiTableCell, {
    TableCellProps as MuiTableCellProps
} from '@mui/material/TableCell';

export type TableCellProps = {
    value?: React.ReactNode;
    format?: (value: TableCellProps['value']) => React.ReactNode;
} & MuiTableCellProps;

const TableCell: React.FC<TableCellProps> = (props) => {
    const { format, value, ...restProps } = props;

    return (
        <MuiTableCell {...restProps}>
            {typeof format === 'function' ? format(value) : value}
        </MuiTableCell>
    );
};

export default TableCell;
