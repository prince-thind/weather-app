import './style.css';

const weatherModule = (function () {
  const submitButton = document.querySelector('#submit-button');
  const userInput = document.querySelector('#input-city');
  const cardContainer = document.querySelector('#card-container');
  submitButton.addEventListener('click', main);

  function main() {
    const userCity = userInput.value.toLowerCase();
    const APIkey = 'f2efb62c94d05d02a245c576e66225ef';
    const fetchURL = `http://api.openweathermap.org/data/2.5/weather?q=${userCity}&APPID=${APIkey}`;

    fetch(fetchURL, { mode: 'cors' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        updateDisplay(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function updateDisplay(data) {
    function toCelsius(K) {
      const k = 273.15;
      return (K - 273.15).toFixed(1)+"C";
    }

    const city = data.name;
    const summary = data.weather[0].main;
    const present = toCelsius(data.main.temp);
    const max = toCelsius(data.main.temp_max);
    const min = toCelsius(data.main.temp_min);
    const humidity = data.main.humidity;
    const feelsLike = toCelsius(data.main.feels_like);

    cardContainer.innerHTML = `<div class="card">
    <div class="city-name">${city}</div>
    <div class="summary">${summary}</div>
    <div class="present">Weather Now: ${present}</div>
    <div class="min-max">
      <div class="min">Max:${min}</div>
      <div class="max">Min:${max}</div>
    </div>
    <div class="humidity">Humidity:${humidity}</div>
    <div class="feels-like">Feels Like:${feelsLike}</div>
  </div>`;
  }
})();
