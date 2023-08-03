function createController(model, view) {
  function initializePage() {
    view.renderInitialPage();
  }

  return { initializePage };
}

export default createController;
