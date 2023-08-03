import "./styles/main.css";
import "./styles/main.scss";

import createModel from "./model.js";
import createView from "./view.js";
import createController from "./controller";

import favicon from "./assets/favicon.png";

const faviconElement = document.getElementById("faviconElement");
faviconElement.href = favicon;
