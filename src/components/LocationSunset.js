import React from 'react'

const LocationSunset = ({data}) => {
  const {type, id, country, sunrise, sunset} = data.sys;
  const sunriseTime = new Date(new Date(sunrise * 1000).getTime() + new Date(sunrise * 1000).getTimezoneOffset() * 60000 + 1000 * data.timezone)
  const sunsetTime = new Date(new Date(sunset * 1000).getTime() + new Date(sunset * 1000).getTimezoneOffset() * 60000 + 1000 * data.timezone)

  return (
    <div id="location-sunset-card">
      <div className="sunrise">
        <img src={require('../assets/SunClear.svg').default} alt="sun-clear" width={50} height={50} />
        {`${sunriseTime.getHours() < 10 ? "0" + sunriseTime.getHours() : sunriseTime.getHours()}:${sunriseTime.getMinutes() < 10 ? "0" + sunriseTime.getMinutes() : sunriseTime.getMinutes() }`}
      </div>
      <div className="sunset">
        <img src={require('../assets/MoonClear.svg').default} alt="moon-clear" width={50} height={50} />
        {`${sunsetTime.getHours() < 10 ? "0" + sunsetTime.getHours() : sunsetTime.getHours()}:${sunsetTime.getMinutes() < 10 ? "0" + sunsetTime.getMinutes() : sunsetTime.getMinutes()}`}
      </div>
    </div>
  )
}

export default LocationSunset
