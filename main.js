// ============================================
// BRATVA STUDIO — Interações
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Nav: fundo ao rolar ---- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Menu mobile (burger) ---- */
  const burger = document.getElementById('navBurger');
  const navLinks = document.querySelector('.nav__links');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-open');
      navLinks.classList.toggle('is-open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('is-open');
        navLinks.classList.remove('is-open');
      });
    });
  }

  /* ---- Botão flutuante do WhatsApp: aparece após rolar ---- */
  const whatsFloat = document.getElementById('whatsFloat');
  const toggleWhatsFloat = () => {
    if (window.scrollY > 200) {
      whatsFloat.classList.add('is-visible');
    } else {
      whatsFloat.classList.remove('is-visible');
    }
  };
  window.addEventListener('scroll', toggleWhatsFloat, { passive: true });
  toggleWhatsFloat();

});
