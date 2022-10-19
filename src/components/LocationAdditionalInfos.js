import React from 'react'

const LocationAdditionalInfos = ({data}) => {
  return (
    <div id="location-additional-infos">
      <div className="wind-direction item">
        <i className="fa-solid fa-wind"></i>
        <div className="text">
          <span className='title'>Wind Direction</span>
          <span><span id='wind-direction-stat'>{data.winddir}°</span> <i className="fa-solid fa-arrow-right-long" style={{transform: `rotate(${data.winddir}deg)`}}></i></span>
        </div>
      </div>
      <div className="pressure item">
        <i className="fa-solid fa-gauge"></i>
        <div className="text">
          <span className='title'>Pressure</span>
          <span>{data.pressure} hPa</span>
        </div>
      </div>
      <div className="cloudiness item">
        <i className="fa-solid fa-cloud"></i>
        <div className="text">
          <span className='title'>Cloudiness</span>
          <span>{data.cloudcover}%</span>
        </div>
      </div>
      <div className="uvindex item">
        <i className="fa-regular fa-sun"></i>
        <div className="text">
          <span className='title'>UV Index</span>
          <span>{data.uvindex}</span>
        </div>
      </div>
    </div>
  )
}

export default LocationAdditionalInfos
