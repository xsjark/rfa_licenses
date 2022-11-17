import './App.css';
import { User } from './features/user/User';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Login from './app/components/login/Login';
import Home from './app/components/home/Home';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </Box>
      </Container>

      {/* <User /> */}

    </div>
  );
}

export default App;
