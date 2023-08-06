function createController(model, view) {
  //Page initialization at start
  function initializePage() {
    view.renderInitialPage();
    initializeForm();
    return;
  }

  //Form initialization at start
  function initializeForm() {
    const form = document.getElementById("menu");
    form.addEventListener("click", (e) => {
      e.preventDefault();
    });

    const searchField = document.getElementById("search_field");
    searchField.value = "Helsinki";

    const searchBtn = document.getElementById("search_btn");
    searchBtn.addEventListener("click", async (e) => {
      await model.retreiveData(searchField.value);
      view.renderCards(model.currentLocationWeather, model.currentLocation);
      searchField.value = "";
    });
  }

  return { initializePage, initializeForm };
}

export default createController;
