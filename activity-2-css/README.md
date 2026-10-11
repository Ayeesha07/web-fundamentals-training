# Activity 2: Style it with CSS · 20 minutes

`index.html` is a finished Activity 1 page: semantic, accessible, and completely unstyled. `styles.css` is already linked and has a TODO for each section.

**Your job: make it look like the mockups**, on phones and desktops.

| Desktop | Mobile |
|---|---|
| `mockups/desktop.png` | `mockups/mobile.png` |

You don't need a pixel-perfect copy. Layout, spacing and responsiveness matter more than exact colours.

> Want to keep your own Activity 1 HTML? Copy your `index.html` here instead. Make sure it links `styles.css`.

## Tasks

- [ ] **Variables:** colours, spacing and radius as CSS variables on `:root`
- [ ] **Reset:** `box-sizing: border-box`; images `max-width: 100%`
- [ ] **Header:** Flexbox row; `position: sticky; top: 0`
- [ ] **Hero:** one column on mobile, two columns from 768px
- [ ] **Product grid:** `repeat(auto-fit, minmax(220px, 1fr))`; images use `aspect-ratio` and `object-fit: cover`
- [ ] **Buttons:** `.btn` and `.btn-primary` with `:hover` styles
- [ ] **Focus:** a visible `:focus-visible` outline
- [ ] **Responsive:** mobile-first, with `@media (min-width: 768px)`
- [ ] Stretch: hide the search label visually on desktop but keep it for screen readers; add a card hover effect with `transition`

## Check your work

- DevTools device toolbar (**Ctrl + Shift + M**): check **375px** and **1280px**. There should be no horizontal scrollbar.
- Tab through the page: is the focus ring always visible?
- Lighthouse → Accessibility: still ≥ 90? (Colour contrast counts.)

## ✅ Checklist (what's evaluated)

| # | Item |
|---|---|
| 1 | CSS variables used for colours and spacing |
| 2 | Flexbox header, sticky while scrolling |
| 3 | Responsive Grid product cards; images don't stretch |
| 4 | Works at 375px and 1280px with no horizontal scroll |
| 5 | Visible focus styles and hover states |
| 6 | Lighthouse Accessibility ≥ 90 |

```bash
git add .
git commit -m "activity-2: css layout and responsive"
git push
```
