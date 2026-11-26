// Language switch (EN/VI) and table of contents for the legal pages.
(function () {
  var root = document.documentElement;
  var KEY = 'legal-lang';

  function pick() {
    var h = location.hash.toLowerCase();
    if (h === '#vi' || h === '#en') return h.slice(1);
    try { var s = localStorage.getItem(KEY); if (s === 'en' || s === 'vi') return s; } catch (e) {}
    return (navigator.language || '').toLowerCase().indexOf('vi') === 0 ? 'vi' : 'en';
  }

  function buildToc(lang) {
    var toc = document.getElementById('toc');
    if (!toc) return;
    var block = document.querySelector('.lang-block[lang="' + lang + '"]');
    if (!block) return;
    var heads = block.querySelectorAll('h2');
    var ol = document.createElement('ol');
    heads.forEach(function (h, i) {
      if (!h.id) h.id = lang + '-' + (i + 1);
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent.replace(/^\s*\d+\.\s*/, '');
      var li = document.createElement('li');
      li.appendChild(a);
      ol.appendChild(li);
    });
    toc.innerHTML = '';
    var p = document.createElement('p');
    p.textContent = lang === 'vi' ? 'Nội dung' : 'On this page';
    toc.appendChild(p);
    toc.appendChild(ol);
    var links = ol.querySelectorAll('a');
    if (!('IntersectionObserver' in window)) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id); });
      });
    }, { rootMargin: '-80px 0px -70% 0px' });
    heads.forEach(function (h) { obs.observe(h); });
  }

  function apply(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang);
    document.querySelectorAll('[data-en][data-vi]').forEach(function (el) {
      el.innerHTML = el.getAttribute('data-' + lang);
    });
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-set') === lang ? 'true' : 'false');
    });
    buildToc(lang);
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.lang-switch button');
    if (!b) return;
    var lang = b.getAttribute('data-set');
    try { localStorage.setItem(KEY, lang); } catch (err) {}
    if (location.hash === '#en' || location.hash === '#vi') history.replaceState(null, '', location.pathname);
    apply(lang);
  });
  window.addEventListener('hashchange', function () {
    var h = location.hash.toLowerCase();
    if (h === '#vi' || h === '#en') apply(h.slice(1));
  });
  apply(pick());
})();
