// Portfolio V4 — intentionally lightweight.
// Future updates can add a project filter, lab journal search, and project detail pages.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
  });
});
