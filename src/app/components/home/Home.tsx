import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { app } from "../../../firebase"
import { Box } from '@mui/material';

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
        <Box sx={{border: 1}}>
            {loggedIn ? "Logged in" : "Logged out"}
        </Box>
    )
}

export default Home