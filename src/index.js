import { weatherData, toFahrenheit, toCelsius } from './weather'
import getGif from './gifs'

const loadSite = (() => {
  const day1 = document.querySelector('.day1')
  const box1 = document.querySelector('.daybox1')
  const f1 = document.querySelector('.f1')
  const c1 = document.querySelector('.c1')

  const day2 = document.querySelector('.day2')
  const box2 = document.querySelector('.daybox2')
  const f2 = document.querySelector('.f2')
  const c2 = document.querySelector('.c2')

  const day3 = document.querySelector('.day3')
  const box3 = document.querySelector('.daybox3')
  const f3 = document.querySelector('.f3')
  const c3 = document.querySelector('.c3')

  const day4 = document.querySelector('.day4')
  const box4 = document.querySelector('.daybox4')
  const f4 = document.querySelector('.f4')
  const c4 = document.querySelector('.c4')

  const day5 = document.querySelector('.day5')
  const box5 = document.querySelector('.daybox5')
  const f5 = document.querySelector('.f5')
  const c5 = document.querySelector('.c5')

  const errorText = document.querySelector('.error')

  const cityName = document.querySelector('.cityname')

  const news = document.querySelector('.news')
  news.addEventListener('click', () => {
    const searchValue = searchBar.value
    window.open(`https://news.google.com/search?q=${searchValue}`, '_blank')
  })

  const searchBar = document.getElementById('searchbar')
  searchBar.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      const searchValue = searchBar.value
      assignData(searchValue)
    }
  })

  const searchButton = document.querySelector('.srch')
  searchButton.addEventListener('click', () => {
    const searchValue = searchBar.value
    assignData(searchValue)
  })

  async function assignData (searchValue) {
    try {
      const data = await weatherData(searchValue)
      errorText.style.opacity = '0'
      cityName.textContent = searchValue.toLowerCase()

      const fTemp1 = toFahrenheit(data.list[0].main.temp_max)
      f1.textContent = `${fTemp1}°F`
      const cTemp1 = toCelsius(data.list[0].main.temp_max)
      c1.textContent = `${cTemp1}°C`
      getGif(data.list[0].weather[0].main, day1)

      const fTemp2 = toFahrenheit(data.list[1].main.temp_max)
      f2.textContent = `${fTemp2}°F`
      const cTemp2 = toCelsius(data.list[1].main.temp_max)
      c2.textContent = `${cTemp2}°C`
      getGif(data.list[1].weather[0].main, day2)

      const fTemp3 = toFahrenheit(data.list[2].main.temp_max)
      f3.textContent = `${fTemp3}°F`
      const cTemp3 = toCelsius(data.list[2].main.temp_max)
      c3.textContent = `${cTemp3}°C`
      getGif(data.list[2].weather[0].main, day3)

      const fTemp4 = toFahrenheit(data.list[3].main.temp_max)
      f4.textContent = `${fTemp4}°F`
      const cTemp4 = toCelsius(data.list[3].main.temp_max)
      c4.textContent = `${cTemp4}°C`
      getGif(data.list[3].weather[0].main, day4)

      const fTemp5 = toFahrenheit(data.list[4].main.temp_max)
      f5.textContent = `${fTemp5}°F`
      const cTemp5 = toCelsius(data.list[4].main.temp_max)
      c5.textContent = `${cTemp5}°C`
      getGif(data.list[4].weather[0].main, day5)

      console.log(data)
    } catch (error) {
      errorText.style.opacity = '1'
      cityName.textContent = ''
    }
  }

  function assignDays () {
    const today = new Date()
    if (today.getDay() === 0) {
      box1.textContent = 'Sunday'
      box2.textContent = 'Monday'
      box3.textContent = 'Tuesday'
      box4.textContent = 'Wednesday'
      box5.textContent = 'Thursday'
    } else if (today.getDay() === 1) {
      box1.textContent = 'Monday'
      box2.textContent = 'Tuesday'
      box3.textContent = 'Wednesday'
      box4.textContent = 'Thursday'
      box5.textContent = 'Friday'
    } else if (today.getDay() === 2) {
      box1.textContent = 'Tuesday'
      box2.textContent = 'Wednesday'
      box3.textContent = 'Thursday'
      box4.textContent = 'Friday'
      box5.textContent = 'Saturday'
    } else if (today.getDay() === 3) {
      box1.textContent = 'Wednesday'
      box2.textContent = 'Thursday'
      box3.textContent = 'Friday'
      box4.textContent = 'Saturday'
      box5.textContent = 'Sunday'
    } else if (today.getDay() === 4) {
      box1.textContent = 'Thursday'
      box2.textContent = 'Friday'
      box3.textContent = 'Saturday'
      box4.textContent = 'Sunday'
      box5.textContent = 'Monday'
    } else if (today.getDay() === 5) {
      box1.textContent = 'Friday'
      box2.textContent = 'Saturday'
      box3.textContent = 'Sunday'
      box4.textContent = 'Monday'
      box5.textContent = 'Tuesday'
    } else if (today.getDay() === 6) {
      box1.textContent = 'Saturday'
      box2.textContent = 'Sunday'
      box3.textContent = 'Monday'
      box4.textContent = 'Tuesday'
      box5.textContent = 'Wednesday'
    }
  }

  return { assignData, assignDays }
})()

loadSite.assignDays()
loadSite.assignData('new york')
