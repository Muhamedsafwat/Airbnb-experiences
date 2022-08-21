import "../styles/card.css";

const Card = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="padge">{badgeText}</div>}

      <img src={`./assets/${props.coverImg}`} alt="katie" />
      <p>
        <img src="./assets/star.svg" alt="star icon" /> {""}
        <span>{props.stats.rating} </span> ({props.stats.reviewCount}
        ).
        {props.location}
      </p>
      <p>{props.title}</p>
      <p>
        <span className="price"> From ${props.price} </span> / person
      </p>
    </div>
  );
};

export default Card;
