import { useState, useEffect } from 'react'
import '../styles/Location.css'
import giveIcon from '../functions/giveIcon';

const LocationInfos = ({locationData, color}) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const { coord, weather, base, main, visibility, wind, clouds, dt, sys, timezone, id, name, cod } = locationData;
  const [locationDate, setLocationDate] = useState(new Date());
  const country = new Intl.DisplayNames(['en'], { type: 'region' }).of(sys.country)

  useEffect(() => {
    setLocationDate(new Date(new Date(dt * 1000).getTime() + new Date(dt * 1000).getTimezoneOffset() * 60000 + 1000*timezone))
  }, [dt, timezone])

  return (
    <div id="location-card" style={{backgroundColor:color}}>
      <div className="location-weather">
        {giveIcon(weather[0].icon)}
        <span id="weather">Weather</span>
      </div>
      <div className="location-temperature">
        <div className="date">
          {days[locationDate.getDay()]}, {locationDate.getDate()} {months[locationDate.getMonth()]}
        </div>
        <div className="temperature">{Math.round(main.temp)}°C</div>
        <span className='weather-text'>{weather[0].main}</span>
      </div>
      <div className="location-infos">
        <div className="location-wind card">
          <div className="card-title">
            Wind
          </div>
          <div className="wind-stat">
            {wind.speed} km/h
          </div>
        </div>
        <div className="location-humidity card">
          <div className="card-title">
            Humidity
          </div>
          <div className="humidity-stat">
            {main.humidity}%
          </div>
        </div>
        <div className="location-feel card">
          <div className="card-title">
            Feels like
          </div>
          <div className="feel-stat">
            {Math.round(main.feels_like)}°C
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationInfos
