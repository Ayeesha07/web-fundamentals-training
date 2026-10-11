// list.js: screen 1, the product list with search (your Activity 3 code, as a view).
import { getProducts, searchProducts } from "../api.js";
import { Card } from "./card.js";

export function ListView(app) {
  document.title = "Products | Cartly";
  app.innerHTML = `
    <section aria-labelledby="page-title">
      <div class="toolbar">
        <div>
          <h1 id="page-title" tabindex="-1">Products</h1>
          <p class="section-sub">Live from the DummyJSON API</p>
        </div>
        <form class="search" role="search" id="search-form">
          <label for="search-input">Search products</label>
          <input id="search-input" type="search" name="q">
          <button type="submit" class="btn">Search</button>
        </form>
      </div>
      <p id="status" class="status" role="status" aria-live="polite"></p>
      <ul id="product-list" class="products"></ul>
    </section>`;

  const list = app.querySelector("#product-list");
  const status = app.querySelector("#status");
  const form = app.querySelector("#search-form");
  const input = app.querySelector("#search-input");

  function showLoading() {
    status.classList.remove("is-error");
    status.textContent = "Loading products…";
    list.setAttribute("aria-busy", "true");
    list.innerHTML = `<li class="skeleton"></li>`.repeat(4);
  }

  function showProducts(products, query) {
    list.removeAttribute("aria-busy");
    if (products.length === 0) {
      status.textContent = "";
      list.innerHTML = `<li class="state"><h3>No products found</h3>
        <p>Nothing matches <strong class="query"></strong>. Try another word.</p></li>`;
      list.querySelector(".query").textContent = `"${query}"`;
      return;
    }
    status.textContent = query
      ? `${products.length} result(s) for "${query}"`
      : `Showing ${products.length} products`;
    list.innerHTML = products.map(Card).join("");
  }

  function showError(retry) {
    list.removeAttribute("aria-busy");
    status.classList.add("is-error");
    status.textContent = "Something went wrong.";
    list.innerHTML = `<li class="state"><h3>Couldn't load products</h3>
      <p>Check your connection and try again.</p>
      <button type="button" class="btn" id="retry">Try again</button></li>`;
    list.querySelector("#retry").addEventListener("click", retry);
  }

  async function load(query = "") {
    showLoading();
    try {
      const data = query ? await searchProducts(query) : await getProducts();
      if (!app.contains(list)) return; // user already navigated away
      showProducts(data.products, query);
    } catch (error) {
      console.error(error);
      if (app.contains(list)) showError(() => load(query));
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    load(input.value.trim());
  });

  load();
}
