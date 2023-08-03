import favicon from "./assets/favicon.png";

function createView() {
  function renderInitialPage() {
    const faviconElement = document.getElementById("faviconElement");
    faviconElement.href = favicon;
  }
  return { renderInitialPage };
}

export default createView;
