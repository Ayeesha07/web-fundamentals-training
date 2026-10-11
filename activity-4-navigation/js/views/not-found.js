// not-found.js: shown for any URL the router doesn't know.

export function NotFoundView(app) {
  document.title = "Page not found | Cartly";
  app.innerHTML = `
    <section class="state" style="margin-top: 2rem">
      <h1 id="page-title" tabindex="-1">Page not found</h1>
      <p>That page doesn't exist.</p>
      <a href="#/" class="btn">Go to products</a>
    </section>`;
}
