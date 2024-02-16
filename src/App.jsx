import { useAuth } from "./context/AuthContext";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";
import Countries from "./views/Countries";
import Students from "./views/Students";
import NavBar from "./components/NavBar";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import "./App.css";

function App() {
  const { token } = useAuth();

  return (
    <>
      <NavBar />
      <Routes>
        {token ? (
          <>
            <Route path="/" element={<Home />}>
              <Route path="/countries" element={<Countries />} />
              <Route path="/students" element={<Students />} />
            </Route>
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </>
  );
}

export default App;
