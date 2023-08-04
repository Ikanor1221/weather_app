import favicon from "./assets/favicon.ico";

function createView() {
  function renderInitialPage() {
    const faviconElement = document.getElementById("favicon_element");
    faviconElement.href = favicon;
  }
  return { renderInitialPage };
}

export default createView;
