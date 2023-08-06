import "./styles/main.css";
import "./styles/main.scss";

import createModel from "./model.js";
import createView from "./view.js";
import createController from "./controller.js";

const model = createModel();
const view = createView();
const controller = createController(model, view);

controller.initializePage();
