# Web Fundamentals: Build to Learn

Hands-on starter repo for the **HTML, CSS, JavaScript and REST API** session.
Over four activities you'll grow one small store, **Cartly**, from a messy page into a multi-screen app powered by a real API. Everything is built and evaluated during the session: there is no homework.

| Activity | Focus | You'll build | Time |
|---|---|---|---|
| 1 · `activity-1-html` | HTML | Rewrite a messy page as semantic, accessible, SEO-ready HTML | 15 min |
| 2 · `activity-2-css` | CSS | Style it: layout, responsive, accessible | 20 min |
| 3 · `activity-3-js-api` | JavaScript + REST | Load live products from an API, with search and UI states | 25 min |
| 4 · `activity-4-navigation` | Routing | Stitch list, detail and about screens together | 25 min |

All four activity folders are here. Work on **one at a time**, only when the trainer starts it. Each later folder's starter already contains a finished version of the activity before it, so everyone starts level. You may continue from your own code instead: copy your files into the next folder first.

---

## 1. Before the session (10 minutes)

Install:

- [VS Code](https://code.visualstudio.com/) with the **Live Server** extension (by Ritwick Dey)
- [Git](https://git-scm.com/downloads), plus a GitHub account
- Chrome or Edge (for DevTools and Lighthouse)

Set your Git identity once:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## 2. Get your own copy

1. On [the course repo](https://github.com/Ram095/web-fundamentals-training), click **Fork** → **Create fork**. You now have your own copy under your account.
2. Clone **your fork** (not the original):

```bash
git clone https://github.com/<your-username>/web-fundamentals-training.git
cd web-fundamentals-training
code .
```

3. In VS Code, open `activity-1-html/index.html`, right-click → **Open with Live Server**.
   Always use Live Server (`http://127.0.0.1:5500/...`). Opening files by double-clicking (`file://...`) breaks JavaScript modules in Activity 3.

4. Test that you can push:

```bash
git add .
git commit -m "setup: hello from <your-name>"
git push
```

5. Post your fork's URL in the session chat. That's how your work is evaluated.

## 3. How you're evaluated

| Part | What's checked | Weight |
|---|---|---|
| Activity checklists | 6 items per activity, from what you push before the timer ends | 60% |
| Code quality | Your final code across all four activities, scored with a rubric (a scoring guide shown in the session) | 30% |
| Stretch goals | One per activity | 10% |

Your last push in Activity 4 is your final submission. Want to keep practising afterwards? Use a new branch.

## 4. During each activity

- Read the activity's `README.md`: task, checklist and time limit.
- **Commit early, commit often.** Small commits with clear messages count towards your score.
- When the timer ends: **commit and push.** Whatever is pushed at that point is what's evaluated for the activity.

```bash
git add .
git commit -m "activity-1: semantic header and nav"
git push
```

## The API

Activities 3 and 4 use **[DummyJSON](https://dummyjson.com/docs/products)**, a free public API. It needs no sign-up and no key, and it works straight from the browser.

| What | Request |
|---|---|
| List products | `GET https://dummyjson.com/products?limit=12` |
| Search | `GET https://dummyjson.com/products/search?q=phone` |
| One product | `GET https://dummyjson.com/products/7` |
| Categories | `GET https://dummyjson.com/products/categories` |

Paste a GET URL into your browser to see the JSON.

## Rules

- Vanilla HTML, CSS and JavaScript only: no frameworks, no libraries.
- **AI assistants off during activities**, including GitHub Copilot in VS Code. Today is about what *you* can do.
- Ask the trainers in the chat, and use MDN and DevTools as much as you like.
- A trainer may ask you to share your screen and explain a line of your code.

## References

[MDN Web Docs](https://developer.mozilla.org/) · [web.dev](https://web.dev/learn) · [javascript.info](https://javascript.info/)
