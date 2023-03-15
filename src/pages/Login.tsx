import * as yup from 'yup';

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

const validationSchema = yup.object({
    username: yup
        .string()
        .max(20, '帳號長度不可超過 20 字')
        .required('請輸入帳號'),
    password: yup
        .string()
        .max(20, '密碼長度不可超過 20 字')
        .required('請輸入密碼'),
    number: yup
        .string()
        .matches(/^[0-9]*\.?[0-9]*$/, '必須是數字')
        .test(
            'is-number-in-range',
            '數字必須介於 0 和 100 之間',
            (v) => v === '' || (Number(v) >= 0 && Number(v) <= 100)
        )
});

type Values = yup.InferType<typeof validationSchema>;

const defaultValues = {
    username: 'test',
    password: '',
    number: '66'
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
