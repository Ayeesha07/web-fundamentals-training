// about.js: screen 3, a static page (no API call).

export function AboutView(app) {
  document.title = "About | Cartly";
  app.innerHTML = `
    <section class="prose" aria-labelledby="page-title">
      <h1 id="page-title" tabindex="-1">About Cartly</h1>
      <p>Cartly is a practice store built during the Web Fundamentals session.
         Product data comes from <a href="https://dummyjson.com/docs/products">DummyJSON</a>,
         a free public API for learning.</p>
      <p>Every screen is rendered by JavaScript inside one HTML page. The part of the
         URL after <code>#</code> decides which screen you see.</p>
      <a href="#/" class="btn btn-primary">Browse products</a>
    </section>`;
}
