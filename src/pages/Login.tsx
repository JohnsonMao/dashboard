import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Form from '@/components/Form/Form';

function Login() {
    return (
        <Paper sx={{ display: 'inline-block' }}>
            <Box sx={{ p: 1, textAlign: 'center', background: 'lightgray', borderRadius: '4px 4px 0 0' }}>
                <Typography>登入</Typography>
            </Box>
            <Box sx={{ px: 2, pb: 1 }}>
                <Form />
            </Box>
        </Paper>
    );
}

export default Login;
