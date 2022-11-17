import { Grid } from '@mui/material';
import Form from './Form';
import Logo from './Logo';


function Login() {
    return (
            <Grid container sx={{ display: 'flex', height: "100vh"}} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={6} px={10} >
                    <Logo />
                </Grid>
                <Grid item xs={12} md={6} px={10}>
                    <Form />
                </Grid>
            </Grid>
    )
}

export default Login