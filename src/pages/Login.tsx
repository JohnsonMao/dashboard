import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import * as Yup from 'yup';

import Form from '@/components/Form/Form';

const initialValues = {
    username: 'test',
    password: '1234',
    number: 666
};
const onSubmit = (values) => console.log(values);
const schema = Yup.object({
    username: Yup.string()
        .max(20, '帳號長度不可超過 20 字')
        .required('請輸入帳號'),
    password: Yup.string()
        .max(20, '密碼長度不可超過 20 字')
        .required('請輸入密碼'),
    number: Yup.number().min(0, '數字不可低於 0').max(1000, '數字不可超過 1000')
});

function Login() {
    return (
        <Paper sx={{ display: 'inline-block' }}>
            <Box
                sx={{
                    p: 1,
                    textAlign: 'center',
                    borderRadius: '4px 4px 0 0'
                }}
            >
                <Typography>登入</Typography>
            </Box>
            <Divider />
            <Box sx={{ px: 2, pb: 1 }}>
                <Form
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={schema}
                />
            </Box>
        </Paper>
    );
}

export default Login;
