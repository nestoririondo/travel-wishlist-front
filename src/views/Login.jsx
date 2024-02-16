import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/Login.css";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null)
  
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userData, setMessage);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={userData.email}
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="email"
          required
        />
        <input
          value={userData.password}
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
