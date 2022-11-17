import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { useEffect, useState } from 'react';



const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID 
  }

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false)

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
            alert("signed in")
          })
      .catch(err => alert(err))
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1}}>
            <Grid container sx={{ display: 'flex' }}>
                <Grid item xs={6} >
                    <Typography variant="subtitle1" align="left">Sign in</Typography>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: "right" }}>
                    <Typography variant="subtitle2" align="right" display="inline">or </Typography>
                    <Link href="#" underline="none"> &nbsp; create an account</Link>
                </Grid>
            </Grid>

            <Grid container sx={{ display: 'flex' }}>
                <Button variant="outlined" fullWidth>Continue with Google</Button>
            </Grid>

            <Grid container sx={{ display: 'flex' }}>
                <Button variant="outlined" fullWidth>Sign in with Apple</Button>
            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                or
            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField id="outlined-name" label="Email" onChange={(e) => setEmail(e.target.value)} value={email} fullWidth />
            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField id="outlined-name" label="Password" onChange={(e) => setPassword(e.target.value)} value={password} fullWidth />
            </Grid>

            <Grid container sx={{  display: 'flex', justifyContent: 'center' }}>
                
                <Grid item xs={6} >
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                    </FormGroup>
                </Grid>
                <Grid item xs={6} >
                    <Button variant="outlined" onClick={() => handleLogin()} fullWidth>Sign in</Button>
                </Grid>
            </Grid>

        </Box>
    )
}

export default Form