import { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import NavBar from './NavBar';
import LoginPrompt from '../loginPrompt/LoginPrompt';
import { UserContext } from '../../../App';


function Home() {
    const role = useContext(UserContext);

    return (
        <Box>
            {(() => {
                switch (role) {
                    case 'user':
                        return <NavBar />
                    case 'distributor':
                        return <NavBar />
                    default:
                        return <LoginPrompt />
                }
            })()}
            {role}
        </Box>

    )
}

export default Home