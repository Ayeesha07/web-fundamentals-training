# Activity 1: Fix the HTML · 15 minutes

`index.html` shows the Cartly home page. It *looks* like it works, but it's built from `<div>`s, has no proper `<head>`, and fails basic accessibility and SEO checks. It even has a JavaScript bug: the year in the footer is missing.

**Your job: rewrite it with correct HTML.** No CSS yet; that's Activity 2. An unstyled page is expected.

Open it with **Live Server**, and keep DevTools open (F12).

## Tasks

### 1. The `<head>`
- [ ] Add `<!DOCTYPE html>` and `<html lang="en">`
- [ ] Add `<meta charset="UTF-8">` and the **viewport** meta tag
- [ ] Give the page a real `<title>` and a `<meta name="description">`
- [ ] Add the favicon: `images/favicon.svg`
- [ ] Fix the script so the footer year appears. (Why is it empty? Look at where the `<script>` is and what it's missing.)
- [ ] Stretch: Open Graph tags (`og:title`, `og:description`, `og:image`)

### 2. Structure
- [ ] Use landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- [ ] Exactly **one** `<h1>`, then `<h2>` and `<h3>` in order. No skipped levels.
- [ ] Each product is an `<article>` inside a list (`<ul>` / `<li>`)
- [ ] Text uses `<p>`, not `<div>`

### 3. Buttons, links and forms
- [ ] Goes somewhere → `<a href>`. Does something → `<button>`. No clickable `<div>`s.
- [ ] Replace every "Click here" with descriptive link text
- [ ] Every input has a `<label>`; use the right `type` (`search`, `email`)
- [ ] Search and newsletter are real `<form>`s with submit buttons

### 4. Images
- [ ] Every image has `alt` text. Decorative images get `alt=""`.
- [ ] Every image has `width` and `height`
- [ ] Product images (below the fold) use `loading="lazy"`. The hero image does not.

## Check your work

1. **Keyboard test:** click in the address bar, then press Tab repeatedly. Can you reach every link, button and input?
2. **Lighthouse:** DevTools → Lighthouse → tick **Accessibility** and **SEO** → Analyze page load.

## ✅ Checklist (what's evaluated)

| # | Item |
|---|---|
| 1 | Complete `<head>`: doctype, lang, charset, viewport, title, description |
| 2 | Footer year shows (script fixed with `defer`) |
| 3 | Semantic landmarks and one `<h1>` with correct heading order |
| 4 | Real buttons, links and labelled form fields |
| 5 | Alt text, dimensions, lazy loading on product images |
| 6 | Lighthouse **Accessibility ≥ 90** and **SEO ≥ 90** |

When the timer ends:

```bash
git add .
git commit -m "activity-1: semantic html"
git push
```
