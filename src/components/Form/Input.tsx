import { useId } from 'react';
import MuiTextField, { TextFieldProps } from '@mui/material/TextField';

function TextField(props: TextFieldProps) {
    const { type } = props;
    const id = useId();

    if (type === 'number') {
        return (
            <MuiTextField
                id={id}
                size="small"
                margin="normal"
                {...props}
                type="text"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9.]*' }}
            />
        );
    }

    return <MuiTextField id={id} size="small" margin="normal" {...props} />;
}

export default TextField;
