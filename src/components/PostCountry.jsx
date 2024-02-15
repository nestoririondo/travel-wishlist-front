import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import "../styles/Post.css";
import { postCountry } from "../api/endpoints.js";
import { useAuth } from '../context/AuthContext.jsx'

export default function PostCountry() {
  const [input, setInput] = useState({});
  const [message, setMessage] = useState("");
  const { token } = useAuth();

  const handleChange = (key, value) => {
    setInput({ ...input, [key]: value });
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postCountry(input, token, setMessage, setInput);
  };

  return (
    <form className="post" onSubmit={handleSubmit}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          id="outlined-basic"
          name="name"
          label="Name"
          variant="outlined"
          required
        />
        <TextField
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          id="outlined-basic"
          name="alpha2Code"
          label="Alpha2Code"
          variant="outlined"
          required
        />
        <TextField
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          id="outlined-basic"
          name="alpha3Code"
          label="Alpha3Code"
          variant="outlined"
          required
        />
        {message && <h2>{message}</h2>}
      </Box>
      <Button
        style={{ backgroundColor: "#8CB9BD" }}
        type="submit"
        variant="contained"
      >
        Submit
      </Button>
    </form>
  );
}
