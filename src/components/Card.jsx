import "../styles/Card.css";

const Card = ({ country }) => {
  return (
    <>
      {country && (
        <div className="card" key={country.alpha2Code}>
          <h2>{country.name}</h2>
          <p>{country.alpha2Code}</p>
          <p>{country.alpha3Code}</p>
        </div>
      )}
    </>
  );
};

export default Card;
