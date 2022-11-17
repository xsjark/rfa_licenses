import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './app/components/login/Login';
import Home from './app/components/home/Home';
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
    </div>
  );
}

export default App;
