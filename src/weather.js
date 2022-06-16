const weatherData = async (search) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&APPID=7a41083a83816558e112654d2548c359&cnt=5`, {
    mode: 'cors'
  })
  const data = await response.json()

  return data
}

function toFahrenheit (temp) {
  const f = (temp - 273.15) * (9 / 5) + 32
  return Math.round(f)
}

function toCelsius (temp) {
  const c = temp - 273.15
  return Math.round(c)
}
export { weatherData, toFahrenheit, toCelsius }
