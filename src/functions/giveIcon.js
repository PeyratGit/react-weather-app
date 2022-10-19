import React from 'react'

const giveIcon = (iconName) => {
  switch (iconName) {
    case "clear-day":
    case "01d":
      return (<img src={require('../assets/SunClear.svg').default} alt="sun-clear"/>)
    case "clear-night":
    case "01n":
      return (<img src={require('../assets/MoonClear.svg').default} alt="moon-clear"/>)
    case "partly-cloudy-day":
    case "02d":
      return (<img src={require('../assets/SunClouds.svg').default} alt="sun-clouds" />)
    case "partly-cloudy-night":
    case "02n":
      return (<img src={require('../assets/MoonClouds.svg').default} alt="moon-clouds" />)
    case 'cloudy':
    case 'fog':
    case '03n':
    case '04d':
    case '04n':
    case '50d':
    case '50n':
    case "03d":
      return (<img src={require('../assets/Clouds.svg').default} alt="clouds" />)
    case 'rain':
    case '09n':
    case '10d':
    case '10n':
    case "09d":
      return (<img src={require('../assets/Rain.svg').default} alt="rain" />)
    case '11n':
    case "11d":
      return (<img src={require('../assets/Thunder.svg').default} alt="thunder" />)
    case "snow":
    case "13n":
    case "13d":
      return (<img src={require('../assets/Snow.svg').default} alt="snow" />)
    default:
      <img src={require('../assets/SunClear.svg').default} alt="sun-clear" />
      break;
  }
}

export default giveIcon;
