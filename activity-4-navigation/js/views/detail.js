// detail.js: screen 2, one product, fetched by the id in the URL (#/product/7).
import { getProduct } from "../api.js";

export async function DetailView(app, id) {
  // TODO 1: LOADING state. Show a back link and "Loading product…"

  try {
    // TODO 2: const product = await getProduct(id);

    // TODO 3: SUCCESS. Render image, title, price, description, rating, stock
    //         and a "← Back to products" link (href="#/")
    //         Update document.title too.
  } catch (error) {
    // TODO 4: ERROR. Try #/product/99999 to test it.
    //         Show "Product not found" and a link back to #/
  }
}
