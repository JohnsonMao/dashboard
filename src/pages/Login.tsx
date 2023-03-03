import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import TextField from '@/components/Form/TextField';

function Login() {
    return (
        <Paper sx={{ display: 'inline-block' }}>
            <Box sx={{ p: 1, textAlign: 'center', background: 'lightgray', borderRadius: '4px 4px 0 0' }}>
                <Typography>登入</Typography>
            </Box>
            <Box sx={{ px: 2, pb: 1 }}>
                <TextField label="帳號" />
                <Box />
                <TextField label="密碼" type="password" />
                <Box />
                <TextField label="數字" type="number" />
            </Box>
        </Paper>
    );
}

export default Login;
