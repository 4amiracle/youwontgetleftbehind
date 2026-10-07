(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      toggle.textContent = open ? 'close' : 'menu';
    });
  }

  // Nav background once you scroll past the hero sky
  var nav = document.querySelector('.nav');
  var onScroll = function () {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Local clock + a note about the sky right now
  var notes = {
    dawn: 'The sun is coming up. Good time for a walk.',
    day: 'It is light out. Step outside for five minutes.',
    dusk: 'The sun is going down. Go watch it.',
    night: 'The stars are out. Go look up.'
  };
  function tick() {
    var now = new Date();
    var time = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    document.querySelectorAll('[data-clock]').forEach(function (el) { el.textContent = time; });
    var sky = document.documentElement.getAttribute('data-sky');
    document.querySelectorAll('[data-daynote]').forEach(function (el) { el.textContent = notes[sky] || notes.day; });
  }
  tick();
  setInterval(tick, 30000);

  // Terminal typing
  var typer = document.querySelector('[data-typer]');
  if (typer) {
    var full = typer.textContent;
    var caret = '<span class="caret">&nbsp;</span>';
    if (reduceMotion) {
      typer.innerHTML = escapeHtml(full) + caret;
    } else {
      var i = 0;
      typer.innerHTML = caret;
      var type = function () {
        i++;
        typer.innerHTML = escapeHtml(full.slice(0, i)) + caret;
        if (i < full.length) {
          var ch = full.charAt(i - 1);
          setTimeout(type, ch === '\n' ? 520 : 38 + Math.random() * 50);
        }
      };
      setTimeout(type, 600);
    }
  }
  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Gentle reveal on scroll
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('.section-head, .path-card, .feature-rows li, .card, .offer, .post-list li, .honest blockquote, .planet-grid > *, .join-grid > *');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }
})();
