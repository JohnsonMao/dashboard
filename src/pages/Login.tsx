import { z } from 'zod';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Form from '@/components/Form/Form';

const uiSchema = [
    {
        label: '帳號',
        type: 'text',
        name: 'username'
    },
    {
        label: '密碼',
        type: 'password',
        name: 'password'
    },
    {
        label: '數字',
        type: 'number',
        name: 'number'
    }
];

const validationSchema = z.object({
    username: z
        .string({ required_error: '請輸入帳號' })
        .max(20, '帳號長度不可超過 20 字'),
    password: z
        .string({ required_error: '請輸入密碼' })
        .max(20, '密碼長度不可超過 20 字'),
    number: z
        .number({ invalid_type_error: '必須是數字' })
        .gt(0, '必須大於 0')
        .lt(100, '必須小於 100')
});

type Values = z.infer<typeof validationSchema>;

const defaultValues = {
    username: 'test',
    password: '',
    number: 66
};

const handleSubmit = (values: Values) => console.log(values);

async function wait() {
    return new Promise<Values>((res) => {
        setTimeout(() => res(defaultValues), 1000);
    });
}

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
                    onSuccess={handleSubmit}
                    uiSchema={uiSchema}
                    validationSchema={validationSchema}
                    defaultValues={wait}
                />
            </Box>
        </Paper>
    );
}

export default Login;
