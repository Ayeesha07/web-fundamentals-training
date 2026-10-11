// card.js: a "component": data in, HTML string out.

export function Card(product) {
  // Real API data can have missing fields, so give safe defaults
  const brand = product.brand ?? "Cartly";
  const rating = product.rating?.toFixed(1) ?? "No rating";

  return `
    <li>
      <article class="card">
        <img src="${product.thumbnail}" alt="${product.title}"
             width="300" height="300" loading="lazy">
        <p class="card-category">${product.category} · ${brand}</p>
        <h3 class="card-title"><a href="#/product/${product.id}">${product.title}</a></h3>
        <p class="card-price">$${product.price.toFixed(2)}</p>
        <p class="card-rating">Rated ${rating} out of 5</p>
      </article>
    </li>`;
}
