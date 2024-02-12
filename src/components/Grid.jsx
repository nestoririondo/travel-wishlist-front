import { useState, useEffect } from "react";
import { fetchCountries, fetchStudents } from "../api/endpoints";
import Card from "../components/Card";

import "../styles/Grid.css";

const Grid = ({ itemType }) => {
  const [items, setItems] = useState([]);

  const getCountries = async () => {
    const response = await fetchCountries();
    setItems(response.data);
  };

  const getStudents = async () => {
    const response = await fetchStudents();
    setItems(response.data);
  };

  useEffect(() => {
    itemType === "countries" ? getCountries() : getStudents();
  }, [itemType]);

  return (
    <div className="grid">
      {items.length > 0 ? (
        items.map((item) => <Card item={item} />)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Grid;
