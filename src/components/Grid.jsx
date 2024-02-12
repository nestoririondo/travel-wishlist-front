import { useState, useEffect } from "react";
import { fetchCountries } from "../api/countries";
import Card from '../components/Card'

import '../styles/Grid.css'


const Grid = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const response = await fetchCountries();
    setCountries(response.data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="grid">
      {countries.length > 0 ? (
        countries.map((country) => <Card country={country} />)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Grid;
