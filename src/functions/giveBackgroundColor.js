import React from 'react'

const giveBackgroundColor = (weather, locationDate) => {

  if (locationDate.getHours() <= 9 || locationDate.getHours() >= 19) {
    return "#712B75"
  } else {
    switch (weather[0].main) {
      case 'Thunderstorm':
        return "#003d5e";
      case 'Drizzle':
        return "#295e7a";
      case 'Rain':
        return "#295e7a";
      case 'Snow':
        return "#6BA7CC";
      case 'Clear':
        return "#42C2FF";
      default:
        return "#A8AAC4";
    }
  }
}

export default giveBackgroundColor;
