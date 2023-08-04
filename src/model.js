function createModel() {
  const currentLocationWeather = [];

  function createWeatherDay(
    name,
    date,
    icon,
    weather,
    temperature,
    humidity,
    wind
  ) {
    return {
      name,
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

  async function retreiveData(location = "London") {
    const weatherData = await callApi(location);
    formObjects(weatherData);

    return;
  }

  function formObjects(weatherData) {
    console.log(weatherData.location.name);
    console.log(weatherData.forecast.forecastday[0].date);
    console.log(weatherData.forecast.forecastday[0].day.condition.icon);

    // let name;
    // date, icon, weather, temperature, humidity, wind
    // createWeatherDay(name, date, icon, weather, temperature, humidity, wind);
  }

  // function parseData

  return { retreiveData };
}

export default createModel;
