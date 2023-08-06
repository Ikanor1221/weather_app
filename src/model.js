function createModel() {
  let currentLocation = "";
  const currentLocationWeather = [];

  function createWeatherDay(date, icon, weather, temperature, humidity, wind) {
    return {
      date,
      icon,
      weather,
      temperature,
      humidity,
      wind,
    };
  }

  async function callApi(location) {
    //Receive and return API data
    const response = await fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=dd718f92e0a245e2932214841232007&q=" +
        location +
        "&days=3&aqi=no&alerts=no",
      { mode: "cors" }
    );

    const weatherData = await response.json();
    return weatherData;
  }

  async function retreiveData(location = "Helsinki") {
    const weatherData = await callApi(location);
    formObjects(weatherData);
    return;
  }

  function formObjects(weatherData) {
    currentLocation = weatherData.location.name;

    for (let n = 0; n <= 2; n++) {
      let date = weatherData.forecast.forecastday[n].date;
      let icon = weatherData.forecast.forecastday[n].day.condition.icon;
      let weather = weatherData.forecast.forecastday[n].day.condition.text;
      let temperature = weatherData.forecast.forecastday[n].day.avgtemp_c;
      let humidity = weatherData.forecast.forecastday[n].day.avghumidity;
      let wind = weatherData.forecast.forecastday[n].day.maxwind_kph;

      let weatherDay = createWeatherDay(
        date,
        icon,
        weather,
        temperature,
        humidity,
        wind
      );

      currentLocationWeather.push(weatherDay);
    }
  }

  return {
    retreiveData,

    get currentLocation() {
      return currentLocation;
    },

    get currentLocationWeather() {
      return currentLocationWeather;
    },
  };
}

export default createModel;
