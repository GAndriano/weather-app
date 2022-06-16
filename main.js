/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gifs.js":
/*!*********************!*\
  !*** ./src/gifs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getGif (weather, day) {
  if (weather === 'Thunderstorm') {
    day.classList.remove('cloudy')
    day.classList.remove('rain')
    day.classList.remove('drizzle')
    day.classList.remove('snow')
    day.classList.remove('fog')
    day.classList.remove('ash')
    day.classList.remove('tornado')
    day.classList.remove('dust')
    day.classList.remove('clear')
    day.classList.add('thunder')
  } else if (weather === 'Drizzle') {
    day.classList.add('drizzle')
  } else if (weather === 'Rain') {
    day.classList.remove('cloudy')
    day.classList.remove('thunder')
    day.classList.remove('drizzle')
    day.classList.remove('snow')
    day.classList.remove('fog')
    day.classList.remove('ash')
    day.classList.remove('tornado')
    day.classList.remove('dust')
    day.classList.remove('clear')
    day.classList.add('rain')
  } else if (weather === 'Snow') {
    day.classList.remove('cloudy')
    day.classList.remove('thunder')
    day.classList.remove('drizzle')
    day.classList.remove('rain')
    day.classList.remove('fog')
    day.classList.remove('ash')
    day.classList.remove('tornado')
    day.classList.remove('dust')
    day.classList.remove('clear')
    day.classList.add('snow')
  } else if (weather === 'Fog' || weather === 'Haze' || weather === 'Smoke' || weather === 'Mist') {
    day.classList.remove('cloudy')
    day.classList.remove('thunder')
    day.classList.remove('drizzle')
    day.classList.remove('rain')
    day.classList.remove('snow')
    day.classList.remove('ash')
    day.classList.remove('tornado')
    day.classList.remove('dust')
    day.classList.remove('clear')
    day.classList.add('fog')
  } else if (weather === 'Tornado' || weather === 'Squall') {
    day.classList.add('tornado')
  } else if (weather === 'Ash') {
    day.classList.remove('cloudy')
    day.classList.remove('thunder')
    day.classList.remove('drizzle')
    day.classList.remove('rain')
    day.classList.remove('snow')
    day.classList.remove('fog')
    day.classList.remove('tornado')
    day.classList.remove('dust')
    day.classList.remove('clear')
    day.classList.add('ash')
  } else if (weather === 'Dust' || weather === 'Sand') {
    day.classList.remove('cloudy')
    day.classList.remove('thunder')
    day.classList.remove('drizzle')
    day.classList.remove('rain')
    day.classList.remove('snow')
    day.classList.remove('fog')
    day.classList.remove('tornado')
    day.classList.remove('ash')
    day.classList.remove('clear')
    day.classList.add('dust')
  } else if (weather === 'Clear') {
    day.classList.remove('cloudy')
    day.classList.remove('thunder')
    day.classList.remove('drizzle')
    day.classList.remove('rain')
    day.classList.remove('snow')
    day.classList.remove('fog')
    day.classList.remove('tornado')
    day.classList.remove('ash')
    day.classList.remove('dust')
    day.classList.add('clear')
  } else if (weather === 'Clouds') {
    day.classList.remove('clear')
    day.classList.remove('thunder')
    day.classList.remove('drizzle')
    day.classList.remove('rain')
    day.classList.remove('snow')
    day.classList.remove('fog')
    day.classList.remove('tornado')
    day.classList.remove('ash')
    day.classList.remove('dust')
    day.classList.add('cloudy')
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGif);


/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toCelsius": () => (/* binding */ toCelsius),
/* harmony export */   "toFahrenheit": () => (/* binding */ toFahrenheit),
/* harmony export */   "weatherData": () => (/* binding */ weatherData)
/* harmony export */ });
const weatherData = async (search) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&APPID=7a41083a83816558e112654d2548c359`, {
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _gifs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gifs */ "./src/gifs.js");



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
    const searchValue = cityName.textContent
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
      const data = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.weatherData)(searchValue)
      errorText.style.opacity = '0'
      cityName.textContent = searchValue.toLowerCase()

      const fTemp1 = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.toFahrenheit)(data.list[0].main.temp_max)
      f1.textContent = `${fTemp1}°F`
      const cTemp1 = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.toCelsius)(data.list[0].main.temp_max)
      c1.textContent = `${cTemp1}°C`
      ;(0,_gifs__WEBPACK_IMPORTED_MODULE_1__["default"])(data.list[0].weather[0].main, day1)

      const fTemp2 = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.toFahrenheit)(data.list[7].main.temp_max)
      f2.textContent = `${fTemp2}°F`
      const cTemp2 = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.toCelsius)(data.list[7].main.temp_max)
      c2.textContent = `${cTemp2}°C`
      ;(0,_gifs__WEBPACK_IMPORTED_MODULE_1__["default"])(data.list[7].weather[0].main, day2)

      const fTemp3 = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.toFahrenheit)(data.list[9].main.temp_max)
      f3.textContent = `${fTemp3}°F`
      const cTemp3 = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.toCelsius)(data.list[9].main.temp_max)
      c3.textContent = `${cTemp3}°C`
      ;(0,_gifs__WEBPACK_IMPORTED_MODULE_1__["default"])(data.list[9].weather[0].main, day3)

      const fTemp4 = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.toFahrenheit)(data.list[24].main.temp_max)
      f4.textContent = `${fTemp4}°F`
      const cTemp4 = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.toCelsius)(data.list[24].main.temp_max)
      c4.textContent = `${cTemp4}°C`
      ;(0,_gifs__WEBPACK_IMPORTED_MODULE_1__["default"])(data.list[24].weather[0].main, day4)

      const fTemp5 = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.toFahrenheit)(data.list[32].main.temp_max)
      f5.textContent = `${fTemp5}°F`
      const cTemp5 = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.toCelsius)(data.list[32].main.temp_max)
      c5.textContent = `${cTemp5}°C`
      ;(0,_gifs__WEBPACK_IMPORTED_MODULE_1__["default"])(data.list[32].weather[0].main, day5)
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2lmcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0R2lmICh3ZWF0aGVyLCBkYXkpIHtcbiAgaWYgKHdlYXRoZXIgPT09ICdUaHVuZGVyc3Rvcm0nKSB7XG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3VkeScpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3JhaW4nKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCdkcml6emxlJylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgnc25vdycpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZvZycpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FzaCcpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Rvcm5hZG8nKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCdkdXN0JylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgnY2xlYXInKVxuICAgIGRheS5jbGFzc0xpc3QuYWRkKCd0aHVuZGVyJylcbiAgfSBlbHNlIGlmICh3ZWF0aGVyID09PSAnRHJpenpsZScpIHtcbiAgICBkYXkuY2xhc3NMaXN0LmFkZCgnZHJpenpsZScpXG4gIH0gZWxzZSBpZiAod2VhdGhlciA9PT0gJ1JhaW4nKSB7XG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3VkeScpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3RodW5kZXInKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCdkcml6emxlJylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgnc25vdycpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZvZycpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FzaCcpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Rvcm5hZG8nKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCdkdXN0JylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgnY2xlYXInKVxuICAgIGRheS5jbGFzc0xpc3QuYWRkKCdyYWluJylcbiAgfSBlbHNlIGlmICh3ZWF0aGVyID09PSAnU25vdycpIHtcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgnY2xvdWR5JylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgndGh1bmRlcicpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2RyaXp6bGUnKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCdyYWluJylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgnZm9nJylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgnYXNoJylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgndG9ybmFkbycpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2R1c3QnKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCdjbGVhcicpXG4gICAgZGF5LmNsYXNzTGlzdC5hZGQoJ3Nub3cnKVxuICB9IGVsc2UgaWYgKHdlYXRoZXIgPT09ICdGb2cnIHx8IHdlYXRoZXIgPT09ICdIYXplJyB8fCB3ZWF0aGVyID09PSAnU21va2UnIHx8IHdlYXRoZXIgPT09ICdNaXN0Jykge1xuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCdjbG91ZHknKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCd0aHVuZGVyJylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgnZHJpenpsZScpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3JhaW4nKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCdzbm93JylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgnYXNoJylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgndG9ybmFkbycpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2R1c3QnKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCdjbGVhcicpXG4gICAgZGF5LmNsYXNzTGlzdC5hZGQoJ2ZvZycpXG4gIH0gZWxzZSBpZiAod2VhdGhlciA9PT0gJ1Rvcm5hZG8nIHx8IHdlYXRoZXIgPT09ICdTcXVhbGwnKSB7XG4gICAgZGF5LmNsYXNzTGlzdC5hZGQoJ3Rvcm5hZG8nKVxuICB9IGVsc2UgaWYgKHdlYXRoZXIgPT09ICdBc2gnKSB7XG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3VkeScpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3RodW5kZXInKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCdkcml6emxlJylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgncmFpbicpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Nub3cnKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCdmb2cnKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCd0b3JuYWRvJylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgnZHVzdCcpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2NsZWFyJylcbiAgICBkYXkuY2xhc3NMaXN0LmFkZCgnYXNoJylcbiAgfSBlbHNlIGlmICh3ZWF0aGVyID09PSAnRHVzdCcgfHwgd2VhdGhlciA9PT0gJ1NhbmQnKSB7XG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3VkeScpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3RodW5kZXInKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCdkcml6emxlJylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgncmFpbicpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Nub3cnKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCdmb2cnKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCd0b3JuYWRvJylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgnYXNoJylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgnY2xlYXInKVxuICAgIGRheS5jbGFzc0xpc3QuYWRkKCdkdXN0JylcbiAgfSBlbHNlIGlmICh3ZWF0aGVyID09PSAnQ2xlYXInKSB7XG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3VkeScpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3RodW5kZXInKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCdkcml6emxlJylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgncmFpbicpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Nub3cnKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCdmb2cnKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCd0b3JuYWRvJylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgnYXNoJylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgnZHVzdCcpXG4gICAgZGF5LmNsYXNzTGlzdC5hZGQoJ2NsZWFyJylcbiAgfSBlbHNlIGlmICh3ZWF0aGVyID09PSAnQ2xvdWRzJykge1xuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCdjbGVhcicpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3RodW5kZXInKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCdkcml6emxlJylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgncmFpbicpXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Nub3cnKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCdmb2cnKVxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKCd0b3JuYWRvJylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgnYXNoJylcbiAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZSgnZHVzdCcpXG4gICAgZGF5LmNsYXNzTGlzdC5hZGQoJ2Nsb3VkeScpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0R2lmXG4iLCJjb25zdCB3ZWF0aGVyRGF0YSA9IGFzeW5jIChzZWFyY2gpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtzZWFyY2h9JkFQUElEPTdhNDEwODNhODM4MTY1NThlMTEyNjU0ZDI1NDhjMzU5YCwge1xuICAgIG1vZGU6ICdjb3JzJ1xuICB9KVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgcmV0dXJuIGRhdGFcbn1cblxuZnVuY3Rpb24gdG9GYWhyZW5oZWl0ICh0ZW1wKSB7XG4gIGNvbnN0IGYgPSAodGVtcCAtIDI3My4xNSkgKiAoOSAvIDUpICsgMzJcbiAgcmV0dXJuIE1hdGgucm91bmQoZilcbn1cblxuZnVuY3Rpb24gdG9DZWxzaXVzICh0ZW1wKSB7XG4gIGNvbnN0IGMgPSB0ZW1wIC0gMjczLjE1XG4gIHJldHVybiBNYXRoLnJvdW5kKGMpXG59XG5leHBvcnQgeyB3ZWF0aGVyRGF0YSwgdG9GYWhyZW5oZWl0LCB0b0NlbHNpdXMgfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB3ZWF0aGVyRGF0YSwgdG9GYWhyZW5oZWl0LCB0b0NlbHNpdXMgfSBmcm9tICcuL3dlYXRoZXInXG5pbXBvcnQgZ2V0R2lmIGZyb20gJy4vZ2lmcydcblxuY29uc3QgbG9hZFNpdGUgPSAoKCkgPT4ge1xuICBjb25zdCBkYXkxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTEnKVxuICBjb25zdCBib3gxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheWJveDEnKVxuICBjb25zdCBmMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mMScpXG4gIGNvbnN0IGMxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmMxJylcblxuICBjb25zdCBkYXkyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTInKVxuICBjb25zdCBib3gyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheWJveDInKVxuICBjb25zdCBmMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mMicpXG4gIGNvbnN0IGMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmMyJylcblxuICBjb25zdCBkYXkzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTMnKVxuICBjb25zdCBib3gzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheWJveDMnKVxuICBjb25zdCBmMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mMycpXG4gIGNvbnN0IGMzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmMzJylcblxuICBjb25zdCBkYXk0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTQnKVxuICBjb25zdCBib3g0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheWJveDQnKVxuICBjb25zdCBmNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mNCcpXG4gIGNvbnN0IGM0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmM0JylcblxuICBjb25zdCBkYXk1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTUnKVxuICBjb25zdCBib3g1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheWJveDUnKVxuICBjb25zdCBmNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mNScpXG4gIGNvbnN0IGM1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmM1JylcblxuICBjb25zdCBlcnJvclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKVxuXG4gIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHluYW1lJylcblxuICBjb25zdCBuZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3MnKVxuICBuZXdzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gY2l0eU5hbWUudGV4dENvbnRlbnRcbiAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly9uZXdzLmdvb2dsZS5jb20vc2VhcmNoP3E9JHtzZWFyY2hWYWx1ZX1gLCAnX2JsYW5rJylcbiAgfSlcblxuICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoYmFyJylcbiAgc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgY29uc3Qgc2VhcmNoVmFsdWUgPSBzZWFyY2hCYXIudmFsdWVcbiAgICAgIGFzc2lnbkRhdGEoc2VhcmNoVmFsdWUpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcmNoJylcbiAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gc2VhcmNoQmFyLnZhbHVlXG4gICAgYXNzaWduRGF0YShzZWFyY2hWYWx1ZSlcbiAgfSlcblxuICBhc3luYyBmdW5jdGlvbiBhc3NpZ25EYXRhIChzZWFyY2hWYWx1ZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlckRhdGEoc2VhcmNoVmFsdWUpXG4gICAgICBlcnJvclRleHQuc3R5bGUub3BhY2l0eSA9ICcwJ1xuICAgICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpXG5cbiAgICAgIGNvbnN0IGZUZW1wMSA9IHRvRmFocmVuaGVpdChkYXRhLmxpc3RbMF0ubWFpbi50ZW1wX21heClcbiAgICAgIGYxLnRleHRDb250ZW50ID0gYCR7ZlRlbXAxfcKwRmBcbiAgICAgIGNvbnN0IGNUZW1wMSA9IHRvQ2Vsc2l1cyhkYXRhLmxpc3RbMF0ubWFpbi50ZW1wX21heClcbiAgICAgIGMxLnRleHRDb250ZW50ID0gYCR7Y1RlbXAxfcKwQ2BcbiAgICAgIGdldEdpZihkYXRhLmxpc3RbMF0ud2VhdGhlclswXS5tYWluLCBkYXkxKVxuXG4gICAgICBjb25zdCBmVGVtcDIgPSB0b0ZhaHJlbmhlaXQoZGF0YS5saXN0WzddLm1haW4udGVtcF9tYXgpXG4gICAgICBmMi50ZXh0Q29udGVudCA9IGAke2ZUZW1wMn3CsEZgXG4gICAgICBjb25zdCBjVGVtcDIgPSB0b0NlbHNpdXMoZGF0YS5saXN0WzddLm1haW4udGVtcF9tYXgpXG4gICAgICBjMi50ZXh0Q29udGVudCA9IGAke2NUZW1wMn3CsENgXG4gICAgICBnZXRHaWYoZGF0YS5saXN0WzddLndlYXRoZXJbMF0ubWFpbiwgZGF5MilcblxuICAgICAgY29uc3QgZlRlbXAzID0gdG9GYWhyZW5oZWl0KGRhdGEubGlzdFs5XS5tYWluLnRlbXBfbWF4KVxuICAgICAgZjMudGV4dENvbnRlbnQgPSBgJHtmVGVtcDN9wrBGYFxuICAgICAgY29uc3QgY1RlbXAzID0gdG9DZWxzaXVzKGRhdGEubGlzdFs5XS5tYWluLnRlbXBfbWF4KVxuICAgICAgYzMudGV4dENvbnRlbnQgPSBgJHtjVGVtcDN9wrBDYFxuICAgICAgZ2V0R2lmKGRhdGEubGlzdFs5XS53ZWF0aGVyWzBdLm1haW4sIGRheTMpXG5cbiAgICAgIGNvbnN0IGZUZW1wNCA9IHRvRmFocmVuaGVpdChkYXRhLmxpc3RbMjRdLm1haW4udGVtcF9tYXgpXG4gICAgICBmNC50ZXh0Q29udGVudCA9IGAke2ZUZW1wNH3CsEZgXG4gICAgICBjb25zdCBjVGVtcDQgPSB0b0NlbHNpdXMoZGF0YS5saXN0WzI0XS5tYWluLnRlbXBfbWF4KVxuICAgICAgYzQudGV4dENvbnRlbnQgPSBgJHtjVGVtcDR9wrBDYFxuICAgICAgZ2V0R2lmKGRhdGEubGlzdFsyNF0ud2VhdGhlclswXS5tYWluLCBkYXk0KVxuXG4gICAgICBjb25zdCBmVGVtcDUgPSB0b0ZhaHJlbmhlaXQoZGF0YS5saXN0WzMyXS5tYWluLnRlbXBfbWF4KVxuICAgICAgZjUudGV4dENvbnRlbnQgPSBgJHtmVGVtcDV9wrBGYFxuICAgICAgY29uc3QgY1RlbXA1ID0gdG9DZWxzaXVzKGRhdGEubGlzdFszMl0ubWFpbi50ZW1wX21heClcbiAgICAgIGM1LnRleHRDb250ZW50ID0gYCR7Y1RlbXA1fcKwQ2BcbiAgICAgIGdldEdpZihkYXRhLmxpc3RbMzJdLndlYXRoZXJbMF0ubWFpbiwgZGF5NSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZXJyb3JUZXh0LnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gJydcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhc3NpZ25EYXlzICgpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICBpZiAodG9kYXkuZ2V0RGF5KCkgPT09IDApIHtcbiAgICAgIGJveDEudGV4dENvbnRlbnQgPSAnU3VuZGF5J1xuICAgICAgYm94Mi50ZXh0Q29udGVudCA9ICdNb25kYXknXG4gICAgICBib3gzLnRleHRDb250ZW50ID0gJ1R1ZXNkYXknXG4gICAgICBib3g0LnRleHRDb250ZW50ID0gJ1dlZG5lc2RheSdcbiAgICAgIGJveDUudGV4dENvbnRlbnQgPSAnVGh1cnNkYXknXG4gICAgfSBlbHNlIGlmICh0b2RheS5nZXREYXkoKSA9PT0gMSkge1xuICAgICAgYm94MS50ZXh0Q29udGVudCA9ICdNb25kYXknXG4gICAgICBib3gyLnRleHRDb250ZW50ID0gJ1R1ZXNkYXknXG4gICAgICBib3gzLnRleHRDb250ZW50ID0gJ1dlZG5lc2RheSdcbiAgICAgIGJveDQudGV4dENvbnRlbnQgPSAnVGh1cnNkYXknXG4gICAgICBib3g1LnRleHRDb250ZW50ID0gJ0ZyaWRheSdcbiAgICB9IGVsc2UgaWYgKHRvZGF5LmdldERheSgpID09PSAyKSB7XG4gICAgICBib3gxLnRleHRDb250ZW50ID0gJ1R1ZXNkYXknXG4gICAgICBib3gyLnRleHRDb250ZW50ID0gJ1dlZG5lc2RheSdcbiAgICAgIGJveDMudGV4dENvbnRlbnQgPSAnVGh1cnNkYXknXG4gICAgICBib3g0LnRleHRDb250ZW50ID0gJ0ZyaWRheSdcbiAgICAgIGJveDUudGV4dENvbnRlbnQgPSAnU2F0dXJkYXknXG4gICAgfSBlbHNlIGlmICh0b2RheS5nZXREYXkoKSA9PT0gMykge1xuICAgICAgYm94MS50ZXh0Q29udGVudCA9ICdXZWRuZXNkYXknXG4gICAgICBib3gyLnRleHRDb250ZW50ID0gJ1RodXJzZGF5J1xuICAgICAgYm94My50ZXh0Q29udGVudCA9ICdGcmlkYXknXG4gICAgICBib3g0LnRleHRDb250ZW50ID0gJ1NhdHVyZGF5J1xuICAgICAgYm94NS50ZXh0Q29udGVudCA9ICdTdW5kYXknXG4gICAgfSBlbHNlIGlmICh0b2RheS5nZXREYXkoKSA9PT0gNCkge1xuICAgICAgYm94MS50ZXh0Q29udGVudCA9ICdUaHVyc2RheSdcbiAgICAgIGJveDIudGV4dENvbnRlbnQgPSAnRnJpZGF5J1xuICAgICAgYm94My50ZXh0Q29udGVudCA9ICdTYXR1cmRheSdcbiAgICAgIGJveDQudGV4dENvbnRlbnQgPSAnU3VuZGF5J1xuICAgICAgYm94NS50ZXh0Q29udGVudCA9ICdNb25kYXknXG4gICAgfSBlbHNlIGlmICh0b2RheS5nZXREYXkoKSA9PT0gNSkge1xuICAgICAgYm94MS50ZXh0Q29udGVudCA9ICdGcmlkYXknXG4gICAgICBib3gyLnRleHRDb250ZW50ID0gJ1NhdHVyZGF5J1xuICAgICAgYm94My50ZXh0Q29udGVudCA9ICdTdW5kYXknXG4gICAgICBib3g0LnRleHRDb250ZW50ID0gJ01vbmRheSdcbiAgICAgIGJveDUudGV4dENvbnRlbnQgPSAnVHVlc2RheSdcbiAgICB9IGVsc2UgaWYgKHRvZGF5LmdldERheSgpID09PSA2KSB7XG4gICAgICBib3gxLnRleHRDb250ZW50ID0gJ1NhdHVyZGF5J1xuICAgICAgYm94Mi50ZXh0Q29udGVudCA9ICdTdW5kYXknXG4gICAgICBib3gzLnRleHRDb250ZW50ID0gJ01vbmRheSdcbiAgICAgIGJveDQudGV4dENvbnRlbnQgPSAnVHVlc2RheSdcbiAgICAgIGJveDUudGV4dENvbnRlbnQgPSAnV2VkbmVzZGF5J1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGFzc2lnbkRhdGEsIGFzc2lnbkRheXMgfVxufSkoKVxuXG5sb2FkU2l0ZS5hc3NpZ25EYXlzKClcbmxvYWRTaXRlLmFzc2lnbkRhdGEoJ25ldyB5b3JrJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==