import React from 'react'

const getHourlyForecast = (currentTimeEpoch, forecastData) => {
  let hourlyForecast = []

  forecastData.days[0].hours.map((hour) => {
    if(hour.datetimeEpoch > currentTimeEpoch) {
      return hourlyForecast.push(hour)
    } else {
      return null
    }
  })

  if (hourlyForecast.length < 24) {
    forecastData.days[1].hours.map((hour) => {
      if (hour.datetimeEpoch > currentTimeEpoch && hourlyForecast.length < 24) {
        return hourlyForecast.push(hour)
      } else {
        return null
      }
    })
  }

  return (
    hourlyForecast
  )
}

export default getHourlyForecast;
