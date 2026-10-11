# Activity 4: Stitch the screens together · 25 minutes

One HTML page, several screens. The part of the URL after `#` decides which screen JavaScript renders into `<div id="app">`.

| URL | Screen | Status |
|---|---|---|
| `#/` | Product list with search | ✅ done (`views/list.js`, your Activity 3 code as a view) |
| `#/product/7` | Product detail | **TODO** (`views/detail.js`) |
| `#/about` | About page | ✅ done (`views/about.js`) |
| anything else | Not found | ✅ done (`views/not-found.js`) |

The router (`js/router.js`) is a skeleton: **TODO**.

```
js/
├─ main.js        ← listens for "hashchange" and calls router()
├─ router.js      ← TODO: read location.hash, pick a view
├─ api.js         ← getProducts, searchProducts, getProduct(id)
└─ views/
   ├─ list.js · card.js · about.js · not-found.js
   └─ detail.js   ← TODO
```

## Tasks

- [ ] **router.js:** split `location.hash` into `page` and `param`, then return the right view
- [ ] **detail.js:** fetch `GET https://dummyjson.com/products/:id` with `getProduct(id)`
- [ ] Show image, title, price, description, rating and stock
- [ ] A **← Back to products** link (`href="#/"`)
- [ ] **Loading** and **error** states. Test the error with `#/product/99999`.
- [ ] Update `document.title` for each screen
- [ ] Stretch: highlight the current nav link with `aria-current="page"`
- [ ] Stretch: after the detail loads, move keyboard focus to its `<h1>` (`tabindex="-1"` and `.focus()`)

## Test it

1. Click a product card's title: does the URL change to `#/product/<id>`?
2. Press the browser **Back** button: are you back on the list?
3. On a detail page, press **refresh**: does it still load?
4. Go to `#/product/99999` and `#/whatever`.

## ✅ Checklist (what's evaluated)

| # | Item |
|---|---|
| 1 | URL changes when a product is clicked |
| 2 | Detail screen fetches the product by id |
| 3 | Back link and browser back button both work |
| 4 | Refreshing a detail page still works |
| 5 | Invalid id shows an error; unknown URL shows Not found |
| 6 | Nav links reach every screen |

```bash
git add .
git commit -m "activity-4: routing and detail screen"
git push
```

This is your **final submission**. Make sure it's pushed before the session ends.
