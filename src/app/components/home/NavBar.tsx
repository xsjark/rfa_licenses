import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import DrawerNavigate from './DrawerNavigate';
import { connectAuthEmulator, getAuth, signOut} from 'firebase/auth';
import { app } from "../../../firebase"

const auth = getAuth(app);

// eslint-disable-next-line no-restricted-globals
if (location.hostname === 'localhost') {
    connectAuthEmulator(auth, 'http://localhost:9099/');
    console.log("connected to emulator")
}
export default function NavBar() {
    const handleLogOut = () => {
        signOut(auth).then(() => {
            alert("Successfully logged out")
          }).catch((error) => {
            alert("Error logging out")
          });
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar sx={{display: "flex", justifyContent: "space-between"}} >
                    <DrawerNavigate />
                    <Button color="inherit" onClick={() => handleLogOut()} sx={{right: 0}}>Salir</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
