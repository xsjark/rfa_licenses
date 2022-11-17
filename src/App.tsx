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
      <Container maxWidth="xl" sx={{minHeight: "100vh"}} disableGutters>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
      </Container>

      {/* <User /> */}

    </div>
  );
}

export default App;
