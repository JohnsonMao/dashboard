import { memo } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import TextField, { TextFieldProps } from '@mui/material/TextField';

type TextWidgetProps = {
    name: string;
} & TextFieldProps;

function TextWidget({ type, id, name, ...textFieldProps }: TextWidgetProps) {
    const { control } = useFormContext();

    if (type === 'number') {
        return (
            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field: { ref, ...fieldProps }, fieldState }) => (
                    <TextField
                        inputRef={ref}
                        id={`${id}-${name}`}
                        size="small"
                        margin="normal"
                        error={!!fieldState.error?.message}
                        helperText={fieldState.error?.message}
                        inputProps={{
                            inputMode: 'numeric',
                            pattern: '[0-9.]*'
                        }}
                        {...textFieldProps}
                        {...fieldProps}
                    />
                )}
            />
        );
    }

    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field: { ref, ...fieldProps }, fieldState }) => (
                <TextField
                    inputRef={ref}
                    id={`${id}-${name}`}
                    size="small"
                    margin="normal"
                    type={type}
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                    {...textFieldProps}
                    {...fieldProps}
                />
            )}
        />
    );
}

export default memo(TextWidget);
