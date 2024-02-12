import "../styles/Card.css";

const Card = ({ item }) => {
  return (
    <>
      {item && item.alpha2Code && (
        <div className="card" key={item.alpha2Code}>
          <h2>{item.name}</h2>
          <p>{item.alpha2Code}</p>
          <p>{item.alpha3Code}</p>
        </div>
      )}
      {item && item.first_name && (
        <div className="card" key={item._id}>
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
