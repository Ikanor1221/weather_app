function createModel() {
  let currentLocation = "";
  const currentLocationWeather = [];

  function WeatherDay(date, icon, weather, temperature, humidity, wind) {
    this.date = date;
    this.icon = icon;
    this.weather = weather;
    this.temperature = temperature;
    this.humidity = humidity;
    this.wind = wind;
  }

  async function callApi(location) {
    //Receive and return API data
    const response = await fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=dd718f92e0a245e2932214841232007&q=" +
        location +
        "&days=3&aqi=no&alerts=no",
      { mode: "cors" }
    );
    // If wrong input then throw error
    if (!response.ok) throw new Error("Wrong location!");
    const weatherData = await response.json();
    return weatherData;
  }

  async function retreiveData(location = "Helsinki") {
    // Retrieve data from API with possible error handled and script stopped
    try {
      const weatherData = await callApi(location);
      formObjects(weatherData);
      return;
    } catch (e) {
      alert(e);
      return;
    }
  }

  function formObjects(weatherData) {
    //Form weather day objects and update current location
    currentLocation = weatherData.location.name;

    //Only use forcast and avag values for current day as well
    for (let n = 0; n <= 2; n++) {
      let date = weatherData.forecast.forecastday[n].date;
      let icon =
        "https:" + weatherData.forecast.forecastday[n].day.condition.icon;
      let weather = weatherData.forecast.forecastday[n].day.condition.text;
      let temperature = weatherData.forecast.forecastday[n].day.avgtemp_c;
      let humidity = weatherData.forecast.forecastday[n].day.avghumidity;
      let wind = weatherData.forecast.forecastday[n].day.maxwind_kph;

      let weatherDay = new WeatherDay(
        date,
        icon,
        weather,
        temperature,
        humidity,
        wind
      );
      currentLocationWeather[n] = weatherDay;
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
