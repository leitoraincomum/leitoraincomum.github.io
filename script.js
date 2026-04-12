/* ═══════════════════════════════════════════
   leitoraincomum.com.br — script.js
   Fernanda Souza | @leitoraincomum
═══════════════════════════════════════════ */

/* ── CUSTOM CURSOR ── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
})();

document.querySelectorAll('a, button, .pill, .tech-tag').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(2.5)';
    ring.style.opacity = '0';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    ring.style.opacity = '0.5';
  });
});

/* ── NAV SCROLL ── */
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', scrollY > 60);
});

/* ── HAMBURGER MENU ── */
function toggleMenu() {
  const btn     = document.getElementById('hamburger');
  const overlay = document.getElementById('navOverlay');
  const isOpen  = btn.classList.toggle('open');
  overlay.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('navOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── EVENTO TABS ── */
function showTab(year, btn) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + year).classList.add('active');
  btn.classList.add('active');
}

/* ── SCROLL REVEAL ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
