import { Grid } from '@mui/material';
import Form from './Form';
import Logo from './Logo';

function Login() {
    return (
            <Grid container spacing={2} sx={{ display: 'flex' }} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Logo />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Form />
                </Grid>
            </Grid>
    )
}

export default Login