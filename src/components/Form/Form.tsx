import Box from '@mui/material/Box';
import Input from './Input';

function Form() {
    return (
        <Box component="form">
            <Input label="帳號" />
            <Input label="密碼" type="password" />
            <Input label="數字" type="number" />
        </Box>
    );
}

export default Form;
