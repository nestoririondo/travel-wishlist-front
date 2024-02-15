import { useState, useEffect } from "react";
import { fetchCountries, fetchStudents } from "../api/endpoints";
import Card from "../components/Card";
import { useAuth } from "../context/AuthContext";
import "../styles/Grid.css";

const Grid = ({ itemType }) => {
  const [items, setItems] = useState([]);
  const { token } = useAuth();

  const getCountries = async () => {
    const response = await fetchCountries(token);
    setItems(response.data);
  };

  const getStudents = async () => {
    const response = await fetchStudents(token);
    setItems(response.data);
  };

  useEffect(() => {
    itemType === "countries" ? getCountries() : getStudents();
  }, [itemType]);

  return (
    <div className="grid">
      {items.length > 0 ? (
        items.map((item) => <Card setItems={setItems} item={item} />)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Grid;
