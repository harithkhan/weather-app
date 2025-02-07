import "./style.css";
import { attachFormSubmitEventListener } from "./display/search-form";
import { attachArrowButtonEventListeners } from "./display/display-hourly-weather";
import { attachToggleEventListener } from "./display/toggle-temp-button";

attachFormSubmitEventListener();
attachArrowButtonEventListeners();
attachToggleEventListener();
