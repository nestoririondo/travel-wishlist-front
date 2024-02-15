import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Countries from "./views/Countries";
import Students from "./views/Students";
import NavBar from "./components/NavBar";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import { useAuth } from "./context/AuthContext";

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
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;

// return (
//   <>
//     <Navbar/>
//     <Routes>
//       {publicRoutes.map(({path, element}) => (
//         <Route key={path} path={path} element={!token ? element : <Navigate to="/" />}/>
//       ))}

//       {privateRoutes.map(({path, element}) => (
//         <Route key={path} path={path} element={token ? element : <Navigate to="/login" />}/>
//       ))}
//       {/* Explicit route for the NotFound page */}
//       <Route path="/not-found" element={<NotFound/>}/>

//       {/* Catch-all routes for 404 Found page */}
//       <Route path="*" element={<Navigate to="/not-found" replace/>}/>
//     </Routes>
//   </>
