import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './app/components/login/Login';
import Home from './app/components/home/Home';
import Container from '@mui/material/Container';
import { createContext, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { app } from "./firebase"

export const UserContext = createContext('');

const auth = getAuth(app);


function App() {  

  const [role, setRole] = useState('');

  useEffect(() => {
    const listener = auth.onAuthStateChanged(async (authUser: any) => {
        if (authUser) {
            try {
                const result = await authUser.getIdTokenResult();
                console.log(result.claims.role)
                setRole(result.claims.role)
            } catch {
                alert("error")
            }
        }
    });

    return () => listener?.();
}, []);


  return (
    <div className="App">
      <UserContext.Provider value={role}>
      <Container maxWidth="xl" sx={{minHeight: "100vh"}} disableGutters>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
      </Container>

      </UserContext.Provider>
    </div>
  );
}

export default App;
