import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import { fetchCountries } from "../api/countries";
import "../styles/Select.css"

export default function BasicSelect({ country, setCountry }) {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const response = await fetchCountries();
    setCountries(response.data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="select">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="Country"
            onChange={handleChange}
          >
            {countries.map((country) => (
              <MenuItem value={country}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
