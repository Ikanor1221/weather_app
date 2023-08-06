import favicon from "./assets/favicon.ico";

function createView() {
  function renderInitialPage() {
    //Render icon only
    const faviconElement = document.getElementById("favicon_element");
    faviconElement.href = favicon;
  }

  function returnCardHtml(weatherObject, location) {
    return `<div class="card">
    <p>${location}</p>
    <p>${weatherObject.date}</p>
    <img src="${weatherObject.icon}"</p/>
    <p>${weatherObject.weather}</p>
    <p>${weatherObject.temperature}°C</p>
    <p>Humidity: ${weatherObject.humidity}%</p>
    <p>Wind: ${weatherObject.wind}km/h</p>
  </div>`;
  }

  function returnEmptyCardHtml() {
    return `<div class="card">
    <p class="placeholder">Unavailable due to free API limitations</p>
  </div>`;
  }

  function renderCards(weatherObjects, location) {
    //Render weather cards according to inputs
    const displayElement = document.getElementById("display");
    displayElement.innerHTML = "";

    for (let n = 0; n <= 6; n++) {
      if (!weatherObjects[n]) {
        displayElement.innerHTML += returnEmptyCardHtml();
        continue;
      }
      displayElement.innerHTML += returnCardHtml(weatherObjects[n], location);
    }
  }

  return { renderInitialPage, renderCards };
}

export default createView;
