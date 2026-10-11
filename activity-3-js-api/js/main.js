// main.js: starts the app and connects the UI to the API.
import { getProducts, searchProducts } from "./api.js";
import { Card } from "./views/card.js";

const list = document.querySelector("#product-list");
const status = document.querySelector("#status");
const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");

// TODO 4: write load(query)
//   1. show a LOADING state  (status.textContent = "Loading products…")
//   2. try: await getProducts() or searchProducts(query)
//   3. SUCCESS: list.innerHTML = data.products.map(Card).join("")
//   4. EMPTY:   no products? show a "No products found" message
//   5. ERROR:   catch the error, show a message and a "Try again" button
async function load(query = "") {
  // your code here
}

// TODO 5: on form submit, stop the page reload and call load(input.value.trim())

// Stretch: debounce the "input" event so search runs when typing pauses

document.querySelector("#year").textContent = new Date().getFullYear();
load();
