function createController(model, view) {
  function initializePage() {
    view.renderInitialPage();
    initializeForm();
    return;
  }

  function initializeForm() {
    const form = document.getElementById("menu");
    form.addEventListener("click", (e) => {
      e.preventDefault();
    });

    const searchField = document.getElementById("search_field");
    searchField.value = "Helsinki";
    searchField.addEventListener("click", (e) => {
      e.preventDefault();
    });

    const searchBtn = document.getElementById("search_btn");
    searchBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      await model.retreiveData(searchField.value);
      view.renderCards(model.currentLocationWeather, model.currentLocation);
      searchField.value = "";
    });
  }

  return { initializePage, initializeForm };
}

export default createController;
