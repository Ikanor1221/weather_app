function createModel() {
  // const apiKey =
  //   "http://api.weatherapi.com/v1/forecast.json?key=dd718f92e0a245e2932214841232007&q=London&days=3&aqi=no&alerts=no";

  // method below requires error catching and dynamic key

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

  function formObjects(weatherData) {
    console.log(weatherData.forecast.forecastday[0]);
  }

  async function retreiveData(location = "London") {
    const weatherData = await callApi(location);
    formObjects(weatherData);

    return;
  }

  // function parseData

  return { retreiveData };
}

export default createModel;
