document.querySelectorAll('a[href]').forEach((link) => {
  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('http')) return;

  link.addEventListener('click', (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const shell = document.querySelector('.shell');
    if (!shell) return;
    event.preventDefault();
    shell.style.opacity = '0';
    shell.style.transform = 'translateY(10px)';
    shell.style.transition = 'opacity 220ms ease, transform 220ms ease';
    window.setTimeout(() => {
      window.location.href = href;
    }, 180);
  });
});
