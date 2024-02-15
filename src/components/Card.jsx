import "../styles/Card.css";
import { delCountry, delStudent } from "../api/endpoints";
import { useAuth } from "../context/AuthContext";

const Card = ({ item }) => {
  const { token } = useAuth();
  const deleteCountry = async (code) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this country?"
    );
    if (userConfirmed) {
      await delCountry(token, code);
    }
  };

  const deleteStudent = async (code) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (userConfirmed) {
      await delStudent(token, code);
    }
  };
  return (
    <>
      {item && item.alpha2Code && (
        <div
          style={{ cursor: "pointer" }}
          onClick={(e) => deleteCountry(item.alpha2Code)}
          className="card"
          key={item.alpha2Code}
        >
          <h2>{item.name}</h2>
          <p>{item.alpha2Code}</p>
          <p>{item.alpha3Code}</p>
          <p>{item.visited ? "✔️ Visited" : "❌ Not visited yet"}</p>
        </div>
      )}
      {item && item.first_name && (
        <div
          style={{ cursor: "pointer" }}
          onClick={(e) => deleteStudent(item._id)}
          className="card"
          key={item._id}
        >
          <h2>
            {item.first_name} {item.last_name}
          </h2>
          <p>{item.email}</p>
          <p>{item.country}</p>
        </div>
      )}
    </>
  );
};

export default Card;
