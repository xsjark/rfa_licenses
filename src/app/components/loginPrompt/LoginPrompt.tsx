import { Box, Typography, Link } from '@mui/material';


function LoginPrompt() {
    return(
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <Typography variant="body1" align="right" display="inline">Please &nbsp;</Typography>
            <Link href="/login">log in</Link>
        </Box>
    )
}

export default LoginPrompt