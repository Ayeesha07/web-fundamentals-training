// card.js: a "component": takes one product object, returns an HTML string.
//
// A product from the API looks like:
// { id: 1, title: "Essence Mascara Lash Princess", price: 9.99,
//   rating: 2.56, category: "beauty", brand: "Essence",
//   thumbnail: "https://cdn.dummyjson.com/..." }

export function Card(product) {
  // TODO: return the markup for one card.
  // Reuse the card HTML from Activity 2, but fill it with ${product.title} etc.
  // Remember: alt text, width/height, loading="lazy".
  // Some products have no brand. Use ?? to give a default.
  return `<li>TODO: ${product.title}</li>`;
}
