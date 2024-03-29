import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/NavBar.css";

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      {user ? (
        <>
          <NavLink to='/' style={{fontWeight: "bold"}}>Welcome, {user.username}!</NavLink>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
          <NavLink to="/signup">
            <button>Sign Up</button>
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default NavBar;
