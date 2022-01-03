import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

//Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

//Components
import Navbar from "./components/Navbar";

//Auth
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (userCred) => {
      setUser(userCred);
      console.log(userCred);
      setLoading(false);
    });
    return unsub;
  }, [user]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Container>
      <Navbar user={user} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {user && <Navigate to="/dashboard" />}
              {!user && <Login emailRef={emailRef} passwordRef={passwordRef} />}
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              {user && <Navigate to="/dashboard" />}
              {!user && (
                <Register emailRef={emailRef} passwordRef={passwordRef} />
              )}
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              {user && <Dashboard />}
              {!user && <Navigate to="/" />}
            </>
          }
        />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
