import { useField, FieldHookConfig } from 'formik';

import TextField, { TextFieldProps } from '@mui/material/TextField';

import { genericMemo } from '@/utils/generic';

function TextWidget<T>(props: TextFieldProps & FieldHookConfig<T>) {
    const { type, id, ...restProps } = props;
    const [field, meta] = useField(props);
    const error = meta.touched && !!meta.error;
    const helperText = error && meta.error;

    if (type === 'number') {
        return (
            <TextField
                id={`${id}-${restProps.name}`}
                size="small"
                margin="normal"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9.]*' }}
                error={error}
                helperText={helperText}
                {...restProps}
                {...field}
            />
        );
    }

    return (
        <TextField
            id={`${id}-${restProps.name}`}
            size="small"
            margin="normal"
            error={error}
            helperText={helperText}
            {...restProps}
            {...field}
        />
    );
}

export default genericMemo(TextWidget);
