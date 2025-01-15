import "./WeatherForecast.css";

const WeatherForecasts = (props) => {
  return (
    <div className="weather">
      <h2>{props.weather.day}</h2>
      <img src={props.weather.img} alt="" />
      <p>
        <span>conditions: {props.weather.conditions}</span>
      </p>
      <p>
        <span>time: {props.weather.time} </span>
      </p>
    </div>
  );
};

export default WeatherForecasts