import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { app } from "../../../firebase"
import { Box } from '@mui/material';
import NavBar from './NavBar';
import LoginPrompt from '../loginPrompt/LoginPrompt';


function Home() {
    const [loggedIn, setLoggedIn] = useState(false)

    const auth = getAuth(app);
    
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
    return(
        <Box>
        {
            loggedIn ? (
                <NavBar />
            ) : (
                <LoginPrompt />
            )
        }
        </Box>
        
    )
}

export default Home