import { useState } from "react";
import { createUser } from '../api/endpoints';

const SignUp = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(userData, setMessage);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={userData.username}
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="username"
          required
        />
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
        <button type="submit">Sign up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUp;
