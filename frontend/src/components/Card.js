const Card = ({ bikejourney }) => {
    return (
      <div className="card">
        <p className="card__body">{bikejourney.departure}</p>
        <p className="card__author">{bikejourney.return}</p>
        <p className="card__author">{bikejourney.departureStationId}</p>
        <p className="card__title">{bikejourney.departureStationName}</p>
        <p className="ccard__author">{bikejourney.returnStationId}</p>
        <p className="ard__title">{bikejourney.returnStationName}</p>
        <p className="card__body">{bikejourney.distance}</p>
        <p className="card__body">{bikejourney.duration}</p> 
      </div>
    );
  };
  
  export default Card;

  
 
 