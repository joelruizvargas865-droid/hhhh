}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

/* ─── 6. SERVICIO CARDS — reveal escalonat ─── */
gsap.utils.toArray('.servicio-card').forEach((card, i) => {
  const tl = gsap.timeline({
    scrollTrigger: { trigger: card, start: 'top 80%', once: true }
  });
  const img  = card.querySelector('.servicio-card__img');
  const body = card.querySelector('.servicio-card__body');
  const isReverse = card.classList.contains('servicio-card--reverse');

  tl.from(img,  { x: isReverse ? 60 : -60, autoAlpha: 0, duration: 1.1, ease: 'power3.out' })
    .from(body, { x: isReverse ? -40 : 40, autoAlpha: 0, duration: 0.9, ease: 'power2.out' }, '-=0.7')
    .from(body.querySelectorAll('.servicio-card__list li'),
      { x: 20, autoAlpha: 0, stagger: 0.08, duration: 0.5 }, '-=0.4');
});

/* ─── 7. EXTRA CARDS ─── */
ScrollTrigger.batch('.extra-card', {
  start: 'top 85%',
  once: true,
  onEnter: batch => gsap.from(batch, {
    y: 40, autoAlpha: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out'
  })
});

/* ─── 8. EQUIP CARDS ─── */
ScrollTrigger.batch('.equip-card', {
  start: 'top 80%',
  once: true,
  onEnter: batch => gsap.from(batch, {
    y: 60, scale: 0.96, autoAlpha: 0, stagger: 0.2, duration: 1, ease: 'power3.out'
  })
});

/* ─── 9. PLAT CARDS — stagger elegant ─── */
ScrollTrigger.batch('.plat-card', {
  start: 'top 85%',
  once: true,
  interval: 0.05,
  batchMax: 5,
  onEnter: batch => gsap.from(batch, {
    y: 45, autoAlpha: 0, scale: 0.97, stagger: 0.07, duration: 0.75, ease: 'power2.out'
  })
});

/* ─── 10. PORTFOLIO ITEMS ─── */
ScrollTrigger.batch('.porto-item', {
  start: 'top 85%',
  once: true,
  onEnter: batch => gsap.from(batch, {
    y: 40, autoAlpha: 0, stagger: 0.1, duration: 0.8, ease: 'power2.out'
  })
});

/* ─── 11. TYPEWRITER en el títol del Portfolio ─── */
ScrollTrigger.create({
  trigger: '#portfolioTypewriter',
  start: 'top 80%',
  once: true,
  onEnter: () => {
    const el   = document.getElementById('portfolioTypewriter');
    const text = el.textContent;
    el.textContent = '';
    gsap.to(el, {
      duration: text.length * 0.045,
      text: { value: text, delimiter: '' },
      ease: 'none'
    });
  }
});

/* ─── 12. PACK CARDS ─── */
ScrollTrigger.batch('.pack-card', {
  start: 'top 80%',
  once: true,
  onEnter: batch => gsap.from(batch, {
    y: 50, autoAlpha: 0, scale: 0.96, stagger: 0.18, duration: 0.9, ease: 'back.out(1.3)'
  })
});

/* ─── 13. PROCESO STEPS ─── */
gsap.utils.toArray('.step').forEach((step, i) => {
  gsap.from(step, {
    y: 35, autoAlpha: 0, duration: 0.75,
    scrollTrigger: { trigger: step, start: 'top 85%', once: true },
    delay: i * 0.15
  });
});

/* ─── 14. TESTIMONIOS ─── */
ScrollTrigger.batch('.testi-card', {
  start: 'top 85%',
  once: true,
  onEnter: batch => gsap.from(batch, {
    x: -35, autoAlpha: 0, stagger: 0.18, duration: 0.85, ease: 'power2.out'
  })
});

/* ─── 15. TIENDA CARDS ─── */
ScrollTrigger.batch('.tienda-card', {
  start: 'top 85%',
  once: true,
  interval: 0.05,
  batchMax: 4,
  onEnter: batch => gsap.from(batch, {
    y: 40, autoAlpha: 0, stagger: 0.08, duration: 0.7, ease: 'power2.out'
  })
});

/* ─── 16. CONTACTE halves — reveal des dels costats ─── */
const jessicaHalf = document.querySelector('.contacto__half--jessica');
const inesHalf    = document.querySelector('.contacto__half--ines');
if (jessicaHalf) {
  gsap.from(jessicaHalf, {
    x: -60, autoAlpha: 0, duration: 1.1, ease: 'power3.out',
    scrollTrigger: { trigger: '.contacto__split', start: 'top 80%', once: true }
  });
}
if (inesHalf) {
  gsap.from(inesHalf, {
    x: 60, autoAlpha: 0, duration: 1.1, ease: 'power3.out',
    scrollTrigger: { trigger: '.contacto__split', start: 'top 80%', once: true }
  });
}

/* ─── 17. FOOTER reveal ─── */
gsap.from('.footer__brand, .footer__links', {
  y: 30, autoAlpha: 0, stagger: 0.12, duration: 0.8, ease: 'power2.out',
  scrollTrigger: { trigger: '.footer', start: 'top 90%', once: true }
});

/* ─── 18. STATS section fons reveal ─── */
gsap.from('.stats__item', {
  y: 30, autoAlpha: 0, stagger: 0.12, duration: 0.8, ease: 'power2.out',
  scrollTrigger: { trigger: '.stats', start: 'top 85%', once: true }
});

/* ============================================================
   PORTFOLIO FILTER
   ============================================================ */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-btn--active'));
    btn.classList.add('filter-btn--active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.porto-item').forEach(item => {
      const show = filter === 'all' || item.dataset.cat === filter;
      if (show) {
        item.style.display = '';
        gsap.fromTo(item, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' });
      } else {
        gsap.to(item, {
          autoAlpha: 0, scale: 0.95, duration: 0.3,
          onComplete: () => { item.style.display = 'none'; }
        });
      }
    });
  });
});

/* ============================================================
   LIGHTBOX
   ============================================================ */
const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCap = document.getElementById('lightboxCaption');
let lbItems = [], lbIndex = 0;

function openLightbox(index, items) {
  lbItems = items; lbIndex = index;
  const item  = lbItems[lbIndex];
  const style = window.getComputedStyle(item.querySelector('.porto-item__img'));
  lightboxImg.style.backgroundImage = style.backgroundImage;
  lightboxCap.textContent = item.querySelector('h4') ? item.querySelector('h4').textContent : '';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  gsap.from(lightboxImg, { scale: 0.9, autoAlpha: 0, duration: 0.4, ease: 'power3.out' });
}
function closeLightbox() {
  gsap.to(lightboxImg, {
    scale: 0.9, autoAlpha: 0, duration: 0.3,
    onComplete: () => { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
  });
}

document.querySelectorAll('.porto-item').forEach(item => {
  item.addEventListener('click', () => {
    const visible = [...document.querySelectorAll('.porto-item')].filter(el => el.style.display !== 'none');
    openLightbox(visible.indexOf(item), visible);
  });
});

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.getElementById('lightboxPrev').addEventListener('click', () => {
  lbIndex = (lbIndex - 1 + lbItems.length) % lbItems.length;
  openLightbox(lbIndex, lbItems);
});
document.getElementById('lightboxNext').addEventListener('click', () => {
  lbIndex = (lbIndex + 1) % lbItems.length;
  openLightbox(lbIndex, lbItems);
});
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  document.getElementById('lightboxPrev').click();
  if (e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
});

/* ============================================================
   PACK BUTTONS
   ============================================================ */
document.querySelectorAll('.pack-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const pack = this.dataset.pack;
    const msg  = document.getElementById('mensaje');
    if (msg) msg.value = `M'interessa el Pack ${pack}. `;
    document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
  });
});

/* ============================================================
   CART
   ============================================================ */
let cart = JSON.parse(localStorage.getItem('eliteCart') || '[]');

function saveCart()  { localStorage.setItem('eliteCart', JSON.stringify(cart)); }
function cartCount() { return cart.reduce((s, i) => s + i.qty, 0); }
function cartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }

function updateBadge() {
  const count = cartCount();
  const badge = document.getElementById('cartBadge');
  badge.textContent   = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
  if (count > 0) gsap.from(badge, { scale: 1.5, duration: 0.3, ease: 'back.out(2)' });
}

function buildWALink() {
  const lines = cart.map(i => `- ${i.name} x${i.qty} = ${i.price * i.qty}€`).join('\n');
  const total = cartTotal();
  const lang  = currentLang === 'ca'
    ? `Hola Jessica! Vull fer una comanda:\n\n${lines}\n\nTotal: ${total}€\n\nGràcies!`
    : `Hola Jessica! Quiero hacer un pedido:\n\n${lines}\n\nTotal: ${total}€\n\n¡Gracias!`;
  document.getElementById('cartWA').href =
    `https://wa.me/34643929972?text=${encodeURIComponent(lang)}`;
}

function renderCart() {
  const wrap = document.getElementById('cartItems');
  const t    = translations[currentLang];
  if (cart.length === 0) {
    wrap.innerHTML = `<p class="cart-empty">${t['cart.empty']}</p>`;
    document.getElementById('cartTotal').textContent = '0€';
    document.getElementById('cartWA').href = '#';
    return;
  }
  wrap.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <span class="cart-item__name">${item.name}</span>
      <div class="cart-item__qty">
        <button onclick="changeQty(${i},-1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeQty(${i},1)">+</button>
      </div>
      <span class="cart-item__price">${item.price * item.qty}€</span>
    </div>
  `).join('');
  document.getElementById('cartTotal').textContent = cartTotal() + '€';
  buildWALink();
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCart(); renderCart(); updateBadge();
}

function openCartDrawer() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCartDrawer() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('cartToggle').addEventListener('click', openCartDrawer);
document.getElementById('cartClose').addEventListener('click', closeCartDrawer);
document.getElementById('cartOverlay').addEventListener('click', closeCartDrawer);

document.querySelectorAll('.btn-add').forEach(btn => {
  btn.addEventListener('click', function() {
    const card  = this.closest('.tienda-card');
    const name  = card.dataset.product;
    const price = parseInt(card.dataset.price);
    const found = cart.find(i => i.name === name);
    found ? found.qty++ : cart.push({ name, price, qty: 1 });
    saveCart(); renderCart(); updateBadge();
    this.textContent = '✓';
    this.classList.add('added');
    gsap.from(this, { scale: 1.3, duration: 0.3, ease: 'back.out(2)' });
    setTimeout(() => {
      this.textContent = translations[currentLang]['shop.add'] || 'Afegir';
      this.classList.remove('added');
    }, 1200);
    openCartDrawer();
  });
});

/* ============================================================
   RESPONSIVE — prefers-reduced-motion
   ============================================================ */
const mm = gsap.matchMedia();
mm.add('(prefers-reduced-motion: reduce)', () => {
  gsap.globalTimeline.timeScale(20);
});

/* ============================================================
   INIT
   ============================================================ */
applyLang(currentLang);
renderCart();
updateBadge();
