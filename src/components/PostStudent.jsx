import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import { SERVER } from "../constants/server";
import Button from "@mui/material/Button";
import "../styles/Post.css";
import CountrySelect from "./CountrySelect";

export default function PostStudent() {
  const [input, setInput] = useState({});
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");

  const handleChange = (key, value) => {
    setInput({ ...input, [key]: value });
    console.log(input);
  };
  const handleCountryChange = (country) => {
    setInput((prevInput) => ({ ...prevInput, country }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${SERVER}/students`, input);
      console.log(response.data);
      if (response.data) {
        setMessage("Student added successfully.");
        setInput({});
      }
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
    }
  };

  return (
    <form className="post" onSubmit={handleSubmit}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { ml: 2, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          id="outlined-basic"
          name="first_name"
          label="First Name"
          variant="outlined"
          required
        />
        <TextField
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          id="outlined-basic"
          name="last_name"
          label="Last Name"
          variant="outlined"
          required
        />
        <TextField
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          id="outlined-basic"
          name="email"
          label="E-Mail"
          variant="outlined"
          required
        />
      </Box>
      <CountrySelect
        country={country}
        setCountry={setCountry}
        onCountryChange={handleCountryChange}
      />
      {message && <h2>{message}</h2>}

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
