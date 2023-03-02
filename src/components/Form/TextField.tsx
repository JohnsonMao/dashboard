import { useId } from 'react';
import MuiTextField from '@mui/material/TextField';

function TextField() {
    const id = useId();

    return (
        <MuiTextField
            id={id}
            label="Size"
            defaultValue="Small"
            size="small"
        />
    );
}

export default TextField;
