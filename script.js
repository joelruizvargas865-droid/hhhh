/* ============================================================
   ÉLITE EVENTOS — script.js
   Jessica Vargas Tenorio · Barcelona
   ============================================================ */

/* ============================================================
   i18n — SISTEMA BILINGÜE CA / ES
   ============================================================ */
const translations = {
  ca: {
    'nav.services':'Serveis','nav.team':'Equip','nav.menu':'Carta',
    'nav.packs':'Packs','nav.shop':'Botiga','nav.contact':'Contactar',
    'hero.tag':'Gastronomia Equatoriana · Decoració · Barcelona',
    'hero.em':"una obra d'art.",'hero.subtitle':'Sabors autèntics de l\'Equador i decoració impecable per a esdeveniments inoblidables a Barcelona.',
    'hero.cta1':'Veure Carta','hero.cta2':'Sol·licitar Pressupost',
    'hero.badge':'Esdeveniments<br/>realitzats',
    'stats.events':'Esdeveniments','stats.clients':'Clients satisfets',
    'stats.exp':"D'experiència",'stats.dishes':'Plats tradicionals',
    'srv.tag':'El que oferim','srv.title':'Serveis integrals<br />per al teu esdeveniment',
    'srv.food.cat':'Gastronomia','srv.food.title':'Cuina equatoriana autèntica',
    'srv.food.desc':"Receptes tradicionals de l'Equador preparades amb amor per la Chef Jessica Vargas Tenorio. Des de caldos fins a encocados, cada plat porta l'ànima de la cuina casolana equatoriana.",
    'srv.food.li1':'Caldos i sopes tradicionals','srv.food.li2':'Ceviches i marisc fresc',
    'srv.food.li3':'Encocados i plats de peix','srv.food.li4':'Bollos i tapados',
    'srv.food.btn':'Veure Carta','srv.deco.cat':'Decoració',
    'srv.deco.title':"Espais que conten la teva història",
    'srv.deco.desc':"La directora de decoració Inés dissenya cada espai amb cura extrema: flors fresques, teles nobles, il·luminació ambiental i atrezzo exclusiu.",
    'srv.deco.li1':'Disseny floral & botanical','srv.deco.li2':'Il·luminació escènica',
    'srv.deco.li3':'Arcs, dosers i estructures','srv.deco.li4':'Taules i centres personalitzats',
    'srv.deco.btn':'Saber més',
    'srv.ex1.t':'Coordinació integral','srv.ex1.d':"Un coordinador dedicat des del primer contacte fins al final de l'event.",
    'srv.ex2.t':'Proveïdors de confiança','srv.ex2.d':'Xarxa de fotògrafs, músics i audiovisuals seleccionats.',
    'srv.ex3.t':'Logística i muntatge','srv.ex3.d':'Ens encarreguem de tot: transport, muntatge i desmuntatge.',
    'team.tag':'El nostre equip','team.title':"Les persones darrere<br />de cada event perfecte",
    'team.jessica.badge':'Chef Principal',
    'team.jessica.desc':"Nascuda a l'Equador, la Jessica porta més de 8 anys cuinant i emocionant comensals a Barcelona amb les receptes tradicionals de la seva terra.",
    'team.ines.badge':'Directora de Decoració',
    'team.ines.desc':"Amb un ull innat per la bellesa i el detall, l'Inés transforma qualsevol espai en un escenari de somni. Especialitzada en estil botànic, mediterrani i minimalista de luxe.",
    'team.ines.t1':'Disseny floral','team.ines.t2':'Il·luminació','team.ines.t3':'Coordinació',
    'menu.tag':'La nostra carta','menu.title':"Sabors autèntics<br />de l'Equador",
    'menu.cat.soup':'Sopa','menu.cat.stew':'Guisat','menu.cat.trad':'Tradicional',
    'menu.cat.sea':'Marisc','menu.cat.fish':'Peix',
    'menu.caldoBola':"Bola de verd farcida de carn i arròs en brou intens. El clàssic equatorià per excel·lència.",
    'menu.caldoPata':'Brou de peu de vedella amb mote i cacauet. Potent, nutritiu i ple de sabor.',
    'menu.cazuela':'Guisat de marisc i peix en salsa de maní amb plàtan. Cremós i aromàtic.',
    'menu.bollos':'Pastissos de blat de moro farcits de peix o porc, embolcallats en fulla de plàtan.',
    'menu.ceviches':'Marisc fresc macerat en llima, tomàquet i ceba. Refrescant i lleuger.',
    'menu.caldoSal':'Brou saborós amb salsitxa equatoriana, patata i espècies. Contundent i casolà.',
    'menu.encocado':'Peix fresc en cremosa salsa de llet de coco amb espècies tropicals. Exòtic i deliciós.',
    'menu.sopaM':'Sopa rica amb gambes, musclos i calamar en brou especiat. Sabor de mar.',
    'menu.tapado':'Guisat tropical de plàtan verd, marisc, yuca i coco. Dens i aromàtic.',
    'menu.guyita':'Peix fregit cruixent amb patacones i salsa criolla. Textures que conquisten.',
    'menu.cta':'Fer una comanda especial',
    'port.tag':'El nostre treball','port.title':"Portfolio d'esdeveniments",
    'port.all':'Tots','port.wed':'Noces','port.corp':'Empresa','port.priv':'Privat',
    'packs.tag':'Packs Esdeveniment','packs.title':'Gastronomia + Decoració<br />en un sol paquet',
    'packs.from':'Des de','packs.per':'/persona','packs.popular':'Més popular',
    'packs.cta':'Sol·licitar aquest pack',
    'packs.e.name':'Essencial','packs.e.desc':'Per a celebracions íntimes fins a 30 persones.',
    'packs.e.f1':'Menú de 3 plats equatorians','packs.e.f2':'Decoració bàsica floral',
    'packs.e.f3':"Coordinació el dia de l'event",'packs.e.f4':'Servei de taula',
    'packs.e.f5':'Coordinadora Inés','packs.e.f6':'Fotògraf inclòs',
    'packs.p.name':'Premium','packs.p.desc':'Per a noces i events corporatius de 30–150 persones.',
    'packs.p.f1':'Menú degustació de 5 plats','packs.p.f2':'Decoració floral premium',
    'packs.p.f3':'Coordinació integral','packs.p.f4':'Coordinadora Inés inclosa',
    'packs.p.f5':'Il·luminació ambiental','packs.p.f6':'Fotògraf inclòs',
    'packs.el.name':'Élite','packs.el.desc':'Experiència total per a grans gales i events de màxim prestigi.',
    'packs.el.f1':'Menú omakase de 7 plats','packs.el.f2':'Decoració exclusiva dissenyada',
    'packs.el.f3':'Coordinació total des del dia 1','packs.el.f4':'Coordinadora Inés + equip',
    'packs.el.f5':'Equip audiovisual','packs.el.f6':'Fotògraf professional inclòs',
    'packs.note':'Tots els packs inclouen la Chef Jessica Vargas Tenorio. Pressupost sense compromís.',
    'proc.tag':'Com treballem','proc.title':'El nostre procés,<br />pas a pas',
    'proc.s1.t':'Primera consulta','proc.s1.d':'Escoltem la teva visió, necessitats i pressupost sense cap compromís.',
    'proc.s2.t':'Proposta personalitzada','proc.s2.d':'Elaborem un projecte a mida amb moodboard, proposta gastronòmica i estimació detallada.',
    'proc.s3.t':'Coordinació i execució','proc.s3.d':'Gestionem tots els proveïdors, el muntatge i la logística.',
    'proc.s4.t':'Dia perfecte','proc.s4.d':'Supervisem cada moment en directe per garantir que tot flueixi perfectament.',
    'test.tag':'Clients','test.title':'El que diuen de nosaltres',
    'cont.tag':'Parlem','cont.title':"Comença a crear<br />el teu event ideal",
    'cont.desc':"Cada gran celebració comença amb una conversa. Conta'ns la teva idea i nosaltres la farem realitat.",
    'cont.loc':'Localització',
    'cont.f.name':'Nom i cognoms','cont.f.email':'Correu electrònic',
    'cont.f.type':"Tipus d'event",'cont.f.sel':'Selecciona...',
    'cont.f.date':'Data aproximada','cont.f.msg':"Conte'ns el teu somni",
    'cont.f.send':'Enviar Sol·licitud','cont.f.note':'Et respondrem en menys de 24 hores.',
    'shop.tag':'Botiga Online','shop.title':'Comanda els teus<br />plats favorits',
    'shop.sub':'Recull a Barcelona o entrega a domicili. Mínim 24h d\'antelació.',
    'shop.p1':'Caldo de Bola gran','shop.p1d':'Ració per a 2 persones. Bola de verd farcida en brou intens.',
    'shop.p2':'Cazuela de Marisc','shop.p2d':'Guisat cremós de marisc i peix amb maní i plàtan.',
    'shop.p3':'Ceviches mixtos per a 2','shop.p3d':'Assortiment de ceviches: gambes, musclos i peix blanc.',
    'shop.p4':'Encocado de Pescado','shop.p4d':'Peix fresc en salsa cremosa de coco i espècies tropicals.',
    'shop.p5':'Bollos (6 unitats)','shop.p5d':'Pastissos de blat de moro farcits, embolcallats en fulla de plàtan.',
    'shop.p6':'Tapado ració','shop.p6d':'Guisat tropical de plàtan, marisc i coco. La costa en un bol.',
    'shop.p7':'Sopa Marinera gran','shop.p7d':'Ració generosa amb gambes, musclos i calamar especiats.',
    'shop.p8':'Guyita amb patacones','shop.p8d':'Peix fregit cruixent amb patacones i salsa criolla casolana.',
    'shop.add':'Afegir',
    'cart.title':'La teva comanda','cart.empty':'El carret és buit',
    'cart.total':'Total','cart.order':'Fer pedido per WhatsApp',
    'cart.note':'T\'avisarem per confirmar la comanda',
    'foot.desc':'Gastronomia equatoriana d\'autor i decoració exclusiva per a esdeveniments inoblidables a Barcelona.',
    'foot.srv':'Serveis','foot.catering':'Catering Equatorià','foot.deco':'Decoració & Flors',
    'foot.menu':'Carta de plats','foot.packs':'Packs Evento','foot.shop':'Botiga Online',
    'foot.co':'Empresa','foot.team':'El nostre equip','foot.proc':'Com treballem',
    'foot.cont':'Contacte','foot.rights':'Tots els drets reservats.'
  },
  es: {
    'nav.services':'Servicios','nav.team':'Equipo','nav.menu':'Carta',
    'nav.packs':'Packs','nav.shop':'Tienda','nav.contact':'Contactar',
    'hero.tag':'Gastronomía Ecuatoriana · Decoración · Barcelona',
    'hero.em':'una obra de arte.','hero.subtitle':'Sabores auténticos de Ecuador y decoración impecable para eventos inolvidables en Barcelona.',
    'hero.cta1':'Ver Carta','hero.cta2':'Solicitar Presupuesto',
    'hero.badge':'Eventos<br/>realizados',
    'stats.events':'Eventos','stats.clients':'Clientes satisfechos',
    'stats.exp':'De experiencia','stats.dishes':'Platos tradicionales',
    'srv.tag':'Lo que ofrecemos','srv.title':'Servicios integrales<br />para tu evento',
    'srv.food.cat':'Gastronomía','srv.food.title':'Cocina ecuatoriana auténtica',
    'srv.food.desc':'Recetas tradicionales de Ecuador preparadas con amor por la Chef Jessica Vargas Tenorio. Desde caldos hasta encocados, cada plato lleva el alma de la cocina casera ecuatoriana.',
    'srv.food.li1':'Caldos y sopas tradicionales','srv.food.li2':'Ceviches y marisco fresco',
    'srv.food.li3':'Encocados y platos de pescado','srv.food.li4':'Bollos y tapados',
    'srv.food.btn':'Ver Carta','srv.deco.cat':'Decoración',
    'srv.deco.title':'Espacios que cuentan tu historia',
    'srv.deco.desc':'La directora de decoración Inés diseña cada espacio con extremo cuidado: flores frescas, telas nobles, iluminación ambiental y atrezzo exclusivo.',
    'srv.deco.li1':'Diseño floral & botanical','srv.deco.li2':'Iluminación escénica',
    'srv.deco.li3':'Arcos, doseles y estructuras','srv.deco.li4':'Mesas y centros personalizados',
    'srv.deco.btn':'Saber más',
    'srv.ex1.t':'Coordinación integral','srv.ex1.d':'Un coordinador dedicado desde el primer contacto hasta el final del evento.',
    'srv.ex2.t':'Proveedores de confianza','srv.ex2.d':'Red de fotógrafos, músicos y audiovisuales seleccionados.',
    'srv.ex3.t':'Logística y montaje','srv.ex3.d':'Nos encargamos de todo: transporte, montaje y desmontaje.',
    'team.tag':'Nuestro equipo','team.title':'Las personas detrás<br />de cada evento perfecto',
    'team.jessica.badge':'Chef Principal',
    'team.jessica.desc':'Nacida en Ecuador, Jessica lleva más de 8 años cocinando y emocionando a los comensales de Barcelona con las recetas tradicionales de su tierra.',
    'team.ines.badge':'Directora de Decoración',
    'team.ines.desc':'Con un ojo innato para la belleza y el detalle, Inés transforma cualquier espacio en un escenario de ensueño. Especializada en estilo botánico, mediterráneo y minimalista de lujo.',
    'team.ines.t1':'Diseño floral','team.ines.t2':'Iluminación','team.ines.t3':'Coordinación',
    'menu.tag':'Nuestra carta','menu.title':'Sabores auténticos<br />de Ecuador',
    'menu.cat.soup':'Sopa','menu.cat.stew':'Guiso','menu.cat.trad':'Tradicional',
    'menu.cat.sea':'Marisco','menu.cat.fish':'Pescado',
    'menu.caldoBola':'Bola de verde rellena de carne y arroz en caldo intenso. El clásico ecuatoriano por excelencia.',
    'menu.caldoPata':'Caldo de pie de ternera con mote y cacahuete. Potente, nutritivo y lleno de sabor.',
    'menu.cazuela':'Guiso de marisco y pescado en salsa de maní con plátano. Cremoso y aromático.',
    'menu.bollos':'Pasteles de maíz rellenos de pescado o cerdo, envueltos en hoja de plátano.',
    'menu.ceviches':'Marisco fresco macerado en lima, tomate y cebolla. Refrescante y ligero.',
    'menu.caldoSal':'Caldo sabroso con salchicha ecuatoriana, patata y especias. Contundente y casero.',
    'menu.encocado':'Pescado fresco en cremosa salsa de leche de coco con especias tropicales. Exótico y delicioso.',
    'menu.sopaM':'Sopa rica con gambas, mejillones y calamar en caldo especiado. Sabor a mar.',
    'menu.tapado':'Guiso tropical de plátano verde, marisco, yuca y coco. Denso y aromático.',
    'menu.guyita':'Pescado frito crujiente con patacones y salsa criolla. Texturas que conquistan.',
    'menu.cta':'Hacer un pedido especial',
    'port.tag':'Nuestro trabajo','port.title':'Portfolio de eventos',
    'port.all':'Todos','port.wed':'Bodas','port.corp':'Empresa','port.priv':'Privado',
    'packs.tag':'Packs Evento','packs.title':'Gastronomía + Decoración<br />en un solo paquete',
    'packs.from':'Desde','packs.per':'/persona','packs.popular':'Más popular',
    'packs.cta':'Solicitar este pack',
    'packs.e.name':'Esencial','packs.e.desc':'Para celebraciones íntimas de hasta 30 personas.',
    'packs.e.f1':'Menú de 3 platos ecuatorianos','packs.e.f2':'Decoración básica floral',
    'packs.e.f3':'Coordinación el día del evento','packs.e.f4':'Servicio de mesa',
    'packs.e.f5':'Coordinadora Inés','packs.e.f6':'Fotógrafo incluido',
    'packs.p.name':'Premium','packs.p.desc':'Para bodas y eventos corporativos de 30–150 personas.',
    'packs.p.f1':'Menú degustación de 5 platos','packs.p.f2':'Decoración floral premium',
    'packs.p.f3':'Coordinación integral','packs.p.f4':'Coordinadora Inés incluida',
    'packs.p.f5':'Iluminación ambiental','packs.p.f6':'Fotógrafo incluido',
    'packs.el.name':'Élite','packs.el.desc':'Experiencia total para grandes galas y eventos de máximo prestigio.',
    'packs.el.f1':'Menú omakase de 7 platos','packs.el.f2':'Decoración exclusiva diseñada',
    'packs.el.f3':'Coordinación total desde el día 1','packs.el.f4':'Coordinadora Inés + equipo',
    'packs.el.f5':'Equipo audiovisual','packs.el.f6':'Fotógrafo profesional incluido',
    'packs.note':'Todos los packs incluyen a la Chef Jessica Vargas Tenorio. Presupuesto sin compromiso.',
    'proc.tag':'Cómo trabajamos','proc.title':'Nuestro proceso,<br />paso a paso',
    'proc.s1.t':'Primera consulta','proc.s1.d':'Escuchamos tu visión, necesidades y presupuesto sin ningún compromiso.',
    'proc.s2.t':'Propuesta personalizada','proc.s2.d':'Elaboramos un proyecto a medida con moodboard, propuesta gastronómica y estimación detallada.',
    'proc.s3.t':'Coordinación y ejecución','proc.s3.d':'Gestionamos todos los proveedores, el montaje y la logística.',
    'proc.s4.t':'Día perfecto','proc.s4.d':'Supervisamos cada momento en directo para garantizar que todo fluya perfectamente.',
    'test.tag':'Clientes','test.title':'Lo que dicen de nosotros',
    'cont.tag':'Hablemos','cont.title':'Empieza a crear<br />tu evento ideal',
    'cont.desc':'Cada gran celebración empieza con una conversación. Cuéntanos tu idea y nosotros la haremos realidad.',
    'cont.loc':'Localización',
    'cont.f.name':'Nombre y apellidos','cont.f.email':'Correo electrónico',
    'cont.f.type':'Tipo de evento','cont.f.sel':'Selecciona...',
    'cont.f.date':'Fecha aproximada','cont.f.msg':'Cuéntanos tu sueño',
    'cont.f.send':'Enviar Solicitud','cont.f.note':'Te responderemos en menos de 24 horas.',
    'shop.tag':'Tienda Online','shop.title':'Pide tus<br />platos favoritos',
    'shop.sub':'Recogida en Barcelona o entrega a domicilio. Mínimo 24h de antelación.',
    'shop.p1':'Caldo de Bola grande','shop.p1d':'Ración para 2 personas. Bola de verde rellena en caldo intenso.',
    'shop.p2':'Cazuela de Marisco','shop.p2d':'Guiso cremoso de marisco y pescado con maní y plátano.',
    'shop.p3':'Ceviches mixtos para 2','shop.p3d':'Surtido de ceviches: gambas, mejillones y pescado blanco.',
    'shop.p4':'Encocado de Pescado','shop.p4d':'Pescado fresco en salsa cremosa de coco y especias tropicales.',
    'shop.p5':'Bollos (6 unidades)','shop.p5d':'Pasteles de maíz rellenos, envueltos en hoja de plátano.',
    'shop.p6':'Tapado ración','shop.p6d':'Guiso tropical de plátano, marisco y coco. La costa en un bol.',
    'shop.p7':'Sopa Marinera grande','shop.p7d':'Ración generosa con gambas, mejillones y calamar especiados.',
    'shop.p8':'Guyita con patacones','shop.p8d':'Pescado frito crujiente con patacones y salsa criolla casera.',
    'shop.add':'Añadir',
    'cart.title':'Tu pedido','cart.empty':'El carrito está vacío',
    'cart.total':'Total','cart.order':'Hacer pedido por WhatsApp',
    'cart.note':'Te avisaremos para confirmar el pedido',
    'foot.desc':'Gastronomía ecuatoriana de autor y decoración exclusiva para eventos inolvidables en Barcelona.',
    'foot.srv':'Servicios','foot.catering':'Catering Ecuatoriano','foot.deco':'Decoración & Flores',
    'foot.menu':'Carta de platos','foot.packs':'Packs Evento','foot.shop':'Tienda Online',
    'foot.co':'Empresa','foot.team':'Nuestro equipo','foot.proc':'Cómo trabajamos',
    'foot.cont':'Contacto','foot.rights':'Todos los derechos reservados.'
  }
};

let currentLang = localStorage.getItem('eliteLang') || 'ca';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('eliteLang', lang);
  document.documentElement.lang = lang;
  document.getElementById('langToggle').textContent = lang === 'ca' ? 'ES' : 'CA';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = translations[lang][key];
    if (!val) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else if (val.includes('<')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'ca' ? 'es' : 'ca');
});

/* ============================================================
   NAV — SCROLL + HAMBURGER
   ============================================================ */
const nav       = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 500);
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  const isOpen = navLinks.classList.contains('open');
  spans[0].style.transform = isOpen ? 'rotate(45deg) translate(4px,4px)' : '';
  spans[1].style.opacity   = isOpen ? '0' : '1';
  spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(4px,-4px)' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ============================================================
   SMOOTH SCROLL
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior:'smooth', block:'start' }); }
  });
});

/* ============================================================
   BACK TO TOP
   ============================================================ */
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top:0, behavior:'smooth' });
});

/* ============================================================
   FADE-UP — IntersectionObserver
   ============================================================ */
const fadeEls = document.querySelectorAll(
  '.section-header, .servicio-card, .extra-card, .step, ' +
  '.porto-item, .testi-card, .contacto__info, .contacto__form, ' +
  '.stats__item, .equip-card, .plat-card, .pack-card, .tienda-card'
);
fadeEls.forEach(el => el.classList.add('fade-up'));

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => fadeObserver.observe(el));

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
const counters = document.querySelectorAll('[data-target]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el     = entry.target;
    const target = +el.dataset.target;
    const step   = target / (1600 / 16);
    let current  = 0;
    const tick = () => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current);
      if (current < target) requestAnimationFrame(tick);
    };
    tick();
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

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
      item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      if (show) {
        item.style.display = '';
        setTimeout(() => { item.style.opacity = '1'; item.style.transform = ''; }, 10);
      } else {
        item.style.opacity = '0'; item.style.transform = 'scale(0.95)';
        setTimeout(() => { item.style.display = 'none'; }, 300);
      }
    });
  });
});

/* ============================================================
   LIGHTBOX
   ============================================================ */
const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightboxImg');
const lightboxCap   = document.getElementById('lightboxCaption');
let lbItems = [], lbIndex = 0;

function openLightbox(index, items) {
  lbItems = items; lbIndex = index;
  const item  = lbItems[lbIndex];
  const style = window.getComputedStyle(item.querySelector('.porto-item__img'));
  lightboxImg.style.backgroundImage = style.backgroundImage;
  lightboxCap.textContent = item.querySelector('h4') ? item.querySelector('h4').textContent : '';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
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
   PACK BUTTONS — preselecciona tipo en formulario
   ============================================================ */
document.querySelectorAll('.pack-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const pack = this.dataset.pack;
    const msg  = document.getElementById('mensaje');
    if (msg) msg.value = `M'interessa el Pack ${pack}. `;
    document.querySelector('#contacto').scrollIntoView({ behavior:'smooth' });
  });
});

/* ============================================================
   CART — localStorage + WhatsApp
   ============================================================ */
let cart = JSON.parse(localStorage.getItem('eliteCart') || '[]');

function saveCart()   { localStorage.setItem('eliteCart', JSON.stringify(cart)); }

function cartCount()  { return cart.reduce((s, i) => s + i.qty, 0); }
function cartTotal()  { return cart.reduce((s, i) => s + i.price * i.qty, 0); }

function updateBadge() {
  const count = cartCount();
  const badge = document.getElementById('cartBadge');
  badge.textContent    = count;
  badge.style.display  = count > 0 ? 'flex' : 'none';
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
    setTimeout(() => {
      this.textContent = translations[currentLang]['shop.add'] || 'Afegir';
      this.classList.remove('added');
    }, 1200);
    openCartDrawer();
  });
});

/* ============================================================
   CONTACT FORM
   ============================================================ */
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  const orig = btn.textContent;
  btn.textContent = '✓ Enviat!';
  btn.style.background   = '#4a7c59';
  btn.style.borderColor  = '#4a7c59';
  btn.disabled = true;
  this.reset();
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background  = '';
    btn.style.borderColor = '';
    btn.disabled = false;
  }, 3000);
});

/* ============================================================
   INIT
   ============================================================ */
applyLang(currentLang);
renderCart();
updateBadge();