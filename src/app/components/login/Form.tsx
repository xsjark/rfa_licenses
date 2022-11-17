import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, connectAuthEmulator, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';
import { app } from "../../../firebase"
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

// eslint-disable-next-line no-restricted-globals
if (location.hostname === 'localhost') {
    connectAuthEmulator(auth, 'http://localhost:9099/');
    console.log("connected to emulator")
}


function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        const listener = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setLoggedIn(true);
            } else {
                localStorage.removeItem('authUser');
                setLoggedIn(false);
            }
        });

        return () => listener?.();
    }, []);

    const handleLogin = async () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                navigate("/home")
            })
            .catch(err => alert(err))
    };

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result: any) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential?.accessToken;
                // The signed-in user info.
                // const user = result.user;
                navigate("/home")
                // ...
            }).catch((error: any) => {
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                alert("Error logging in with Google")
            });
    }

    const handleAppleLogin = () => {
        signInWithPopup(auth, appleProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // Apple credential
                // const credential = OAuthProvider.credentialFromResult(result);
                // const accessToken = credential?.accessToken;
                // const idToken = credential?.idToken;

                // ...
                navigate("/home")

            })
            .catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The credential that was used.
                // const credential = OAuthProvider.credentialFromError(error);

                // ...
                alert("Error logging in with Apple")

            });
    }

    return (
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1}}>
            {/* <Grid container sx={{ display: 'flex' }}>
                <Grid item xs={6} >
                    <Typography variant="subtitle1" align="left">Sign in</Typography>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: "right" }}>
                    <Typography variant="subtitle2" align="right" display="inline">or </Typography>
                    <Link href="#" underline="none"> &nbsp; create an account</Link>
                </Grid>
            </Grid> */}

            <Grid container sx={{ maxWidth: "522px", margin: "auto" }}>
                <Button variant="outlined" onClick={() => handleGoogleLogin()} fullWidth>Continue with Google</Button>
            </Grid>

            <Grid container sx={{ maxWidth: "522px", margin: "auto" }}>
                <Button variant="outlined" onClick={() => handleAppleLogin()} fullWidth>Sign in with Apple</Button>
            </Grid>

            <Grid container sx={{ maxWidth: "522px", margin: "auto" }}>
                <Typography variant="body1" align="center" sx={{width: "100%"}}>or </Typography>
            </Grid>

            <Grid container sx={{ maxWidth: "522px", margin: "auto"}}>
                <TextField id="outlined-name" label="Email" onChange={(e) => setEmail(e.target.value)} value={email}  fullWidth/>
            </Grid>

            <Grid container sx={{ maxWidth: "522px", margin: "auto"}}>
                <TextField id="outlined-name" label="Password" onChange={(e) => setPassword(e.target.value)} value={password} fullWidth />
            </Grid>

            <Grid container sx={{maxWidth: "522px", margin: "auto" }}>

                <Grid item xs={6} >
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                    </FormGroup>
                </Grid>
                <Grid item xs={6} >
                    <Button variant="outlined" onClick={() => handleLogin()} fullWidth>Entrar</Button>
                </Grid>
            </Grid>

        </Box>
    )
}

export default Form