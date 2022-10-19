import '../styles/WeatherCard.css'
import giveIcon from '../functions/giveIcon';

const WeatherCardForecast = ({ forecastData, color, hourly }) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const forecastDate = new Date(forecastData.datetimeEpoch*1000)

  if(hourly) {
    return (
      <div className='forecast-card' style={{ backgroundColor: color }}>
        <div className="forecast-date">
          <div className="day">
            {`${forecastDate.getHours() < 10 ? "0" + forecastDate.getHours() : forecastDate.getHours() }:${forecastDate.getMinutes()+"0"}`}
          </div>
        </div>
        <div className="forecast-weather">
          {giveIcon(forecastData.icon)}
        </div>
        <div className="forecast-temperature">
          {forecastData.temp}°C
        </div>
      </div>
    )
  } else {
    return (
      <div className='forecast-card' style={{ backgroundColor: color }}>
        <div className="forecast-date">
          <div className="day">
            {days[forecastDate.getDay()].slice(0, 3)}
          </div>
          <div className="date">
            {forecastDate.getDate()} {months[forecastDate.getMonth()].slice(0, 3)}
          </div>
        </div>
        <div className="forecast-weather">
          {giveIcon(forecastData.icon)}
        </div>
        <div className="forecast-temperature">
          {forecastData.temp}°C
        </div>
      </div>
    )
  }
}

export default WeatherCardForecast
