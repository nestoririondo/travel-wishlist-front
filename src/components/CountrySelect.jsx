import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import { fetchCountries } from "../api/endpoints";
import "../styles/Select.css";
import Select from "@mui/material/Select";
import { useAuth } from '../context/AuthContext';

export default function CountrySelect({
  country,
  setCountry,
  onCountryChange,
}) {
  const [countries, setCountries] = useState([]);
  const {token} = useAuth();

  const getCountries = async () => {
    const response = await fetchCountries(token);
    setCountries(response.data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleChange = (event) => {
    setCountry(event.target.value);
    if (onCountryChange) {
      onCountryChange(event.target.value.name);
    }
  };

  return (
    <div className="select">
      <Box sx={{ minWidth: 0 }}>
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
