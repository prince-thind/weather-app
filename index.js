import './style.css';

(() => {
  const form = document.querySelector('#user-input');
  const mainDiv = document.querySelector('#main');
  form.addEventListener('submit', main);

  function main(e) {
    e.preventDefault();
    const userCity = form.city.value.toLowerCase();
    const APIkey = 'f2efb62c94d05d02a245c576e66225ef';
    const fetchURL = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&APPID=${APIkey}`;

    fetch(fetchURL, { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => {
        updateDisplay(data);
      })
      .catch((err) => {
        console.log(err);
        updateDisplay(null);
      });
  }

  function updateDisplay(data) {
    let city = '-';
    let summary = '-';
    let present = '-';
    let max = '-';
    let min = '-';
    let humidity = '-';
    let feelsLike = '-';
    if (data) {
      city = data.name;
      summary = data.weather[0].main;
      present = toCelsius(data.main.temp);
      max = toCelsius(data.main.temp_max);
      min = toCelsius(data.main.temp_min);
      humidity = data.main.humidity;
      feelsLike = toCelsius(data.main.feels_like);
    }

    mainDiv.innerHTML = `  <div class="city-name">${city}</div>
    <div class="summary">${summary}</div>
    <div class="weather-info">
        <div class="present">Weather Now: ${present}</div>
        <div class="min-max">
            <div class="min">Max: ${max}</div>
            <div class="max">Min: ${min}</div>
        </div>
        <div class="humidity">Humidity: ${humidity}%</div>
        <div class="feels-like">Feels Like: ${feelsLike}</div>
    </div>`;
  }

  function toCelsius(K) {
    const kelvinConstant = 273.15;
    return `${(K - kelvinConstant).toFixed(1)}&deg;C`;
  }
})();
