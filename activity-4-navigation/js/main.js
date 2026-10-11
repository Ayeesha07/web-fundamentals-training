// main.js: starts the app.
import { router } from "./router.js";

window.addEventListener("hashchange", router); // every link click that changes #...
router();                                      // the first load, and refresh

document.querySelector("#year").textContent = new Date().getFullYear();
