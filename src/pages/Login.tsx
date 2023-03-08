import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Form from '@/components/Form/Form';

const initialValues = {
    username: 'test',
    password: '1234',
    number: 666
};
const onSubmit = (values) => console.log(values);

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
                <Form initialValues={initialValues} onSubmit={onSubmit} />
            </Box>
        </Paper>
    );
}

export default Login;
