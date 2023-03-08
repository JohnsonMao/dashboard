import { useFormik, FormikConfig, FormikValues } from 'formik';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { genericMemo } from '@/utils/generic';
import Input from './Input';

function Form<T extends FormikValues>(props: FormikConfig<T>) {
    const formik = useFormik<T>(props);

    return (
        <Box component="form" onSubmit={formik.handleSubmit}>
            <Input label="帳號" {...formik.getFieldProps('username')} />
            <Input label="密碼" type="password" {...formik.getFieldProps('password')} />
            <Input label="數字" type="number" {...formik.getFieldProps('number')} />
            <Button type="submit">送出</Button>
        </Box>
    );
}

export default genericMemo(Form);
