// main.js — lightweight utilities for the blog/paintings site

// Smooth header shrink on scroll
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.backdropFilter = window.scrollY > 40 ? 'blur(12px)' : 'none';
    header.style.background = window.scrollY > 40 ? 'rgba(245,240,232,0.85)' : 'transparent';
  }, { passive: true });
}

// Highlight active nav link
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = 'var(--ink)';
    link.style.borderBottom = '1px solid var(--accent)';
  }
});

// Lazy-load images with fade in
const imgs = document.querySelectorAll('img[data-src]');
if (imgs.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const img = e.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.addEventListener('load', () => img.style.opacity = '1');
        io.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });
  imgs.forEach(img => { img.style.opacity = '0'; img.style.transition = 'opacity 0.5s'; io.observe(img); });
}

// Simple lightbox for painting gallery
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-caption-text');
    if (!img) return;

    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;inset:0;z-index:1000;
      background:rgba(26,22,18,0.92);
      display:flex;flex-direction:column;
      align-items:center;justify-content:center;
      cursor:zoom-out;padding:2rem;
    `;
    const big = document.createElement('img');
    big.src = img.src;
    big.style.cssText = 'max-height:80vh;max-width:90vw;object-fit:contain;border-radius:4px;';
    overlay.appendChild(big);

    if (caption) {
      const cap = document.createElement('p');
      cap.textContent = caption.textContent;
      cap.style.cssText = `
        margin-top:1.25rem;color:#f5f0e8;
        font-family:'Cormorant Garamond',serif;
        font-style:italic;font-size:1rem;opacity:0.8;
      `;
      overlay.appendChild(cap);
    }

    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});
