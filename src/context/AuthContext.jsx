import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER } from "../constants/server";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("jwt") || null);
  const [user, setUser] = useState(null);

  const login = async (userData, setMessage) => {
    try {
      const response = await axios.post(`${SERVER}/users/login`, userData);
      setMessage(`Welcome ${response.data.user.username}`);
      const { token, user } = response.data;
      localStorage.setItem("jwt", token);
      setToken(token);
      setUser(user);
      navigate("/")
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("jwt");
    setToken(null);
    setUser(null);
    navigate("/login");
  };

  const fetchUser = async () => {
    if (token) {
      try {
        const response = await axios.get(`${SERVER}/users/user`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("user response", response);
        setUser(response.data);
      } catch (e) {
        console.log(e);
        // logout();
      }
    }
  };

  useEffect(async () => {
    fetchUser();
  }, []);

  const value = { user, token, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
