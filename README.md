# rashmisingh622/blogs

A personal space for **writing** and **paintings** — two ways of seeing the world.

---

## 📁 Folder Structure

```
blogs/
├── index.html                  ← Homepage (links to both sections)
├── README.md
│
├── assets/
│   ├── css/
│   │   └── styles.css          ← All shared styles & design tokens
│   └── js/
│       └── main.js             ← Shared JS (lazy loading, lightbox, nav)
│
├── blogs/
│   ├── index.html              ← Blog listing page
│   └── posts/
│       ├── _template.html      ← Copy this to create a new post
│       └── my-first-post.html  ← (example)
│
└── paintings/
    ├── index.html              ← Masonry gallery page
    └── images/
        └── *.jpg / *.png       ← Drop painting images here
```

---

## ✍️ Adding a Blog Post

1. Copy `blogs/posts/_template.html` → `blogs/posts/your-post-title.html`
2. Edit the `<title>`, date, tag, `<h1>`, and body content inside the new file
3. Open `blogs/index.html` and add a new `<li class="blog-entry">` block pointing to your new file

---

## 🎨 Adding a Painting

1. Drop your image into `paintings/images/` (JPG or PNG, ideally ≤2MB)
2. Open `paintings/index.html`
3. Uncomment and duplicate the example `<div class="gallery-item">` block
4. Update the `src`, `alt`, and caption text

The gallery uses a masonry layout and includes a click-to-enlarge lightbox automatically.

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--ink` | `#1a1612` | Body text, dark elements |
| `--paper` | `#f5f0e8` | Background |
| `--accent` | `#b84a2e` | Highlights, hover states |
| `--warm-mid` | `#c8b89a` | Borders, decorative strokes |
| `--muted` | `#7a6e61` | Secondary text, metadata |
| `--serif` | Cormorant Garamond | Headlines, body copy |
| `--mono` | DM Mono | Labels, navigation, dates |

All tokens live in `assets/css/styles.css` under `:root { }`.

---

## 🚀 Hosting

This is a plain HTML/CSS/JS site — no build step needed. You can host it on:
- **GitHub Pages**: Settings → Pages → deploy from `main` branch, `/ (root)`
- **Netlify**: drag-and-drop the folder or connect this repo
- **Vercel**: import repo, framework = "Other"

---

*Made with care.*
