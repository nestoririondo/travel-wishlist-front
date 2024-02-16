import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import { postCountry } from "../api/endpoints.js";
import { useAuth } from "../context/AuthContext.jsx";

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
        sx={{ mt: 2, mb: 2, width: "100%", gap: 2, display: "flex" }}
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
      </Box>{" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={{ backgroundColor: "#8CB9BD", marginTop: "1rem" }}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
