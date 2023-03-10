import { memo, forwardRef } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

function TextWidget(
    props: TextFieldProps,
    ref: React.ForwardedRef<HTMLDivElement>
) {
    const { type, id, ...restProps } = props;

    if (type === 'number') {
        return (
            <TextField
                ref={ref}
                id={`${id}-${restProps.name}`}
                size="small"
                margin="normal"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9.]*' }}
                {...restProps}
            />
        );
    }

    return (
        <TextField
            ref={ref}
            id={`${id}-${restProps.name}`}
            size="small"
            margin="normal"
            {...restProps}
        />
    );
}

export default memo(forwardRef(TextWidget));
