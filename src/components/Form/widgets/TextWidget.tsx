import { memo } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import TextField, { TextFieldProps } from '@mui/material/TextField';

type TextWidgetProps = {
    name: string;
} & TextFieldProps;

function TextWidget(props: TextWidgetProps) {
    const { type, id, name, ...restProps } = props;
    const { control } = useFormContext();

    // if (type === 'number') {
    //     return (
    //         <TextField
    //             inputRef={ref}
    //             id={`${id}-${name}`}
    //             size="small"
    //             margin="normal"
    //             inputProps={{ inputMode: 'numeric', pattern: '[0-9.]*' }}
    //             {...restProps}
    //             {...fieldProps}
    //         />
    //     );
    // }

    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field: { ref, ...fieldProps } }) => (
                <TextField
                    inputRef={ref}
                    id={`${id}-${name}`}
                    size="small"
                    margin="normal"
                    type={type}
                    {...restProps}
                    {...fieldProps}
                />
            )}
        />
    );
}

export default memo(TextWidget);
