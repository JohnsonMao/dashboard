import { memo } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

import TextField, { TextFieldProps } from '@mui/material/TextField';

type TextWidgetProps = UseControllerProps & TextFieldProps;

function TextWidget(props: TextWidgetProps) {
    const { type, id, control, name, ...restProps } = props;
    const {
        field: { ref, ...fieldProps }
    } = useController({
        control,
        name
    });

    if (type === 'number') {
        return (
            <TextField
                inputRef={ref}
                id={`${id}-${name}`}
                size="small"
                margin="normal"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9.]*' }}
                {...restProps}
                {...fieldProps}
            />
        );
    }

    return (
        <TextField
            inputRef={ref}
            id={`${id}-${name}`}
            size="small"
            margin="normal"
            type={type}
            {...restProps}
            {...fieldProps}
        />
    );
}

export default memo(TextWidget);
