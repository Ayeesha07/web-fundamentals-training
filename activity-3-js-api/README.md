# Activity 3: Live data with JavaScript · 25 minutes

The page is styled, but the product list is now **empty**. Your job is to fill it with live products from the **DummyJSON** REST API, and handle every state the user might see.

Open with **Live Server**. This activity uses ES modules, which don't work from `file://`.

## Project structure

The code is split by job:

```
activity-3-js-api/
├─ index.html          ← loads js/main.js as a module
├─ styles.css          ← includes .status, .state and .skeleton styles
└─ js/
   ├─ api.js           ← ALL fetch calls live here          (TODO 1–3)
   ├─ main.js          ← starts the app, handles UI states  (TODO 4–5)
   └─ views/
      └─ card.js       ← one product → one card's HTML     (TODO in file)
```

## The API

| What | Request |
|---|---|
| First 12 products | `GET https://dummyjson.com/products?limit=12` |
| Search | `GET https://dummyjson.com/products/search?q=red` |

Paste them into the browser first and look at the JSON. What's inside `products[0]`?

## Tasks

- [ ] **api.js:** write `getJSON(path)`. It fetches, **checks `response.ok`**, then returns `response.json()`.
- [ ] **api.js:** `getProducts()` and `searchProducts(query)`. Use `encodeURIComponent`.
- [ ] **card.js:** return a card's HTML from a product object. Image with alt, width, height and `loading="lazy"`; title, price, rating; use `??` for a missing `brand`.
- [ ] **main.js:** `load(query)` shows the four UI states:
  - **Loading:** a "Loading products…" message (skeleton cards are a bonus)
  - **Success:** cards rendered from `data.products.map(Card).join("")`
  - **Empty:** "No products found" when the search matches nothing
  - **Error:** a message and a **Try again** button
- [ ] **main.js:** the search form calls `load()` on submit, using `event.preventDefault()`
- [ ] Stretch: debounce the `input` event (run the search 400ms after typing stops)

## Test every state

| State | How to trigger it |
|---|---|
| Loading | DevTools → Network → throttle to **Slow 4G**, then reload |
| Success | Normal load |
| Empty | Search for `zzzz` |
| Error | Temporarily change `BASE_URL` to `https://dummyjson.com/nope` |

Also search for `<b>hi</b>`. It should appear as **text**, not bold. User input goes in with `textContent`, never `innerHTML`.

## ✅ Checklist (what's evaluated)

| # | Item |
|---|---|
| 1 | Products load from the API (no hardcoded cards) |
| 2 | `response.ok` is checked; errors are caught |
| 3 | Loading, empty and error states all visible |
| 4 | Search works through the API |
| 5 | Code split across `api.js`, `views/card.js`, `main.js` |
| 6 | No errors in the console on a normal load |

```bash
git add .
git commit -m "activity-3: live products from api"
git push
```
