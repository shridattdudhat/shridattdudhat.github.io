/* ============================================================
   RENDER.JS — builds the page from content.js
   You should not need to edit this file.
   ============================================================ */
(function () {
  'use strict';

  var C = window.CONTENT || CONTENT;

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  // {gold:x} {cyan:x} {b:x} -> spans. Everything else escaped.
  function fmt(s) {
    return esc(s)
      .replace(/\{gold:(.*?)\}/g, '<span class="g">$1</span>')
      .replace(/\{cyan:(.*?)\}/g, '<span class="c">$1</span>')
      .replace(/\{b:(.*?)\}/g, '<b>$1</b>');
  }
  function el(id) { return document.getElementById(id); }
  function has(sec) { return sec && sec.show !== false; }
  function head(s) {
    var h = '<span class="eyebrow">' + esc(s.eyebrow) + '</span>';
    h += '<h2 class="sec-head">' + esc(s.heading) + '</h2>';
    if (s.note) h += '<p class="sec-note">' + esc(s.note) + '</p>';
    return h;
  }

  var out = [];

  /* ---------- head / meta ---------- */
  document.title = C.meta.tabTitle || C.meta.name;
  var md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', C.meta.description || '');

  /* ---------- nav ---------- */
  var navLinks = [];
  ['focus', 'work', 'experience', 'skills', 'beyond', 'quotes', 'contact'].forEach(function (k) {
    var s = C[k];
    if (has(s) && s.nav) navLinks.push('<li><a href="#' + esc(s.id) + '">' + esc(s.nav) + '</a></li>');
  });
  if (C.meta.resumeUrl) {
    navLinks.push('<li><a class="cv" href="' + esc(C.meta.resumeUrl) + '" target="_blank" rel="noopener">CV</a></li>');
  }
  el('nav-mark').innerHTML = esc(C.meta.name) +
    (C.meta.navSuffix ? ' <i>/</i> ' + esc(C.meta.navSuffix) : '');
  el('nav-links').innerHTML = navLinks.join('');

  /* ---------- hero (text + portrait) ---------- */
  var h = C.hero, P = C.profile || {};
  out.push('<header class="hero wrap" id="top">');
  out.push('<div class="hero-grid">');

  /* -- left: the words -- */
  out.push('<div class="hero-text">');
  out.push('<span class="eyebrow">' + esc(h.eyebrow) + '</span>');
  out.push('<h1>' + h.headline.map(fmt).join('<br>') + '</h1>');
  if (h.lede) out.push('<p class="lede">' + fmt(h.lede) + '</p>');
  if (h.buttons && h.buttons.length) {
    out.push('<div class="hero-cta">');
    h.buttons.forEach(function (b) {
      out.push('<a class="btn' + (b.solid ? ' solid' : '') + '" href="' + esc(b.href) + '">' + esc(b.label) + '</a>');
    });
    out.push('</div>');
  }
  out.push('</div>');

  /* -- right: the portrait -- */
  if (P.show !== false) {
    var shape = P.shape === 'circle' ? ' circle' : '';
    out.push('<div class="hero-portrait"><div class="portrait' + shape + '">');
    out.push('<div class="portrait-frame">' +
      '<img src="' + esc(P.photo) + '" alt="' + esc(P.alt || C.meta.name) + '" ' +
      'onerror="this.parentNode.classList.add(\'noimg\');this.remove();">' +
      '<span class="monogram" aria-hidden="true">' + esc(P.monogram || '') + '</span>' +
      '<span class="marks"></span>' +
      '</div>');
    if (P.plateLeft || P.plateRight) {
      out.push('<div class="portrait-plate"><span>' + esc(P.plateLeft) + '</span>' +
        '<span>' + esc(P.plateRight) + '</span></div>');
    }
    if (P.showSocials !== false && C.socials && C.socials.length) {
      out.push('<ul class="hero-socials">' + C.socials.map(function (sc) {
        return '<li><a href="' + esc(sc.href) + '" target="_blank" rel="noopener" ' +
          'title="' + esc(sc.label) + '" aria-label="' + esc(sc.label) + '">' +
          icon(sc.icon || 'link') + '</a></li>';
      }).join('') + '</ul>');
    }
    out.push('</div></div>');
  }

  out.push('</div>');   /* /hero-grid */

  /* ---------- the scale ---------- */
  if (has(C.scale) && C.scale.nodes.length) {
    var n = C.scale.nodes;
    out.push('<div class="scale">');
    out.push('<div class="scale-cap"><span>' + esc(C.scale.leftCaption) + '</span><span>' + esc(C.scale.rightCaption) + '</span></div>');
    out.push('<ul class="axis" style="grid-template-columns:repeat(' + n.length + ',1fr);list-style:none">');
    n.forEach(function (d, i) {
      out.push('<li class="node" tabindex="0" style="animation-delay:' + (0.6 + i * 0.12).toFixed(2) + 's">' +
        '<span class="val">' + d.value + '</span>' +
        '<span class="lbl">' + esc(d.label) + '</span></li>');
    });
    out.push('</ul></div>');
  }
  out.push('</header>');

  /* ---------- focus ---------- */
  if (has(C.focus)) {
    out.push('<section class="sec wrap" id="' + esc(C.focus.id) + '">' + head(C.focus));
    out.push('<div class="cards reveal">');
    C.focus.items.forEach(function (it) {
      out.push('<div class="card"><span class="tag">' + esc(it.tag) + '</span>' +
        '<h3>' + esc(it.title) + '</h3><p>' + esc(it.body) + '</p></div>');
    });
    out.push('</div></section>');
  }

  /* ---------- work ---------- */
  if (has(C.work)) {
    out.push('<section class="sec wrap" id="' + esc(C.work.id) + '">' + head(C.work));
    out.push('<div class="rows reveal">');
    C.work.items.forEach(function (it) {
      var tags = (it.tags && it.tags.length)
        ? '<span class="rtags">' + it.tags.map(function (t) { return '<span class="rtag">' + esc(t) + '</span>'; }).join('') + '</span>'
        : '';
      out.push('<a class="row" href="' + esc(it.href) + '" target="_blank" rel="noopener">' +
        '<h3>' + esc(it.title) + '</h3>' +
        '<span class="desc">' + esc(it.desc) + tags + '</span>' +
        '<span class="meta">' + esc(it.meta) + ' <span class="arrow">&rarr;</span></span></a>');
    });
    out.push('</div></section>');
  }

  /* ---------- experience (grouped by organisation) ---------- */
  if (has(C.experience)) {
    out.push('<section class="sec wrap" id="' + esc(C.experience.id) + '">' + head(C.experience));
    out.push('<div class="xp reveal">');
    C.experience.items.forEach(function (it) {
      var roles = (it.roles || []).map(function (r) {
        var type = r.type ? '<span class="xp-type">' + esc(r.type) + '</span>' : '';
        return '<div class="xp-role">' +
          '<span class="xp-role-t">' + esc(r.title) + type + '</span>' +
          '<span class="xp-role-w">' + esc(r.when) + '</span></div>';
      }).join('');

      out.push('<div class="xp-item">' +
        '<div class="xp-span">' + esc(it.span) + '</div>' +
        '<div>' +
          '<div class="xp-org">' + esc(it.org) + '</div>' +
          (it.meta ? '<div class="xp-meta">' + esc(it.meta) + '</div>' : '') +
          (it.body ? '<p class="xp-body">' + esc(it.body) + '</p>' : '') +
          (roles ? '<div class="xp-roles">' + roles + '</div>' : '') +
        '</div></div>');
    });
    out.push('</div></section>');
  }

  /* ---------- toolkit ---------- */
  if (has(C.skills)) {
    out.push('<section class="sec wrap" id="' + esc(C.skills.id) + '">' + head(C.skills));
    out.push('<div class="caps reveal">');
    C.skills.groups.forEach(function (g) {
      out.push('<div class="cap-group"><div class="cap-name">' + esc(g.name) + '</div><div class="chips">' +
        g.items.map(function (i) { return '<span class="chip">' + esc(i) + '</span>'; }).join('') +
        '</div></div>');
    });
    out.push('</div></section>');
  }

  /* ---------- beyond ---------- */
  if (has(C.beyond)) {
    out.push('<section class="sec wrap" id="' + esc(C.beyond.id) + '">' + head(C.beyond));
    out.push('<div class="cards reveal">');
    C.beyond.items.forEach(function (it) {
      var link = it.linkHref
        ? '<a class="more" href="' + esc(it.linkHref) + '" target="_blank" rel="noopener">' + esc(it.linkText) + ' &rarr;</a>'
        : '';
      out.push('<div class="card"><span class="tag alt">' + esc(it.tag) + '</span>' +
        '<h3>' + esc(it.title) + '</h3><p>' + esc(it.body) + '</p>' + link + '</div>');
    });
    out.push('</div></section>');
  }

  /* ---------- quotes ---------- */
  if (has(C.quotes)) {
    out.push('<section class="sec wrap" id="' + esc(C.quotes.id) + '">' + head(C.quotes));
    out.push('<div class="quotes reveal">');
    C.quotes.items.forEach(function (q) {
      out.push('<blockquote class="quote"><p>' + esc(q.text) + '</p>' +
        '<cite>' + esc(q.author) + ' &middot; ' + esc(q.role) + '</cite></blockquote>');
    });
    out.push('</div></section>');
  }

  /* ---------- contact ---------- */
  if (has(C.contact)) {
    out.push('<section class="sec wrap contact" id="' + esc(C.contact.id) + '">');
    out.push('<span class="eyebrow">' + esc(C.contact.eyebrow) + '</span>');
    out.push('<h2>' + C.contact.heading.map(esc).join('<br>') + '</h2>');
    out.push('<a class="mailto" href="mailto:' + esc(C.meta.email) + '">' + esc(C.meta.email) + '</a>');
    if (C.socials && C.socials.length) {
      out.push('<ul class="socials">' + C.socials.map(function (s) {
        return '<li><a href="' + esc(s.href) + '" target="_blank" rel="noopener">' + esc(s.label) + '</a></li>';
      }).join('') + '</ul>');
    }
    out.push('</section>');
  }

  /* ---------- footer ---------- */
  out.push('<div class="wrap"><footer>' +
    '<span>' + esc(C.meta.location) + '</span>' +
    '<span>' + esc(C.meta.education) + '</span>' +
    '<span>&copy; ' + new Date().getFullYear() + ' ' + esc(C.meta.name) + '</span>' +
    '</footer></div>');

  el('app').innerHTML = out.join('');

  /* ---------- behaviour ---------- */
  var toggle = el('nav-toggle'), links = el('nav-links');
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? 'Close' : 'Menu';
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Menu';
    }
  });

  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    Array.prototype.forEach.call(reveals, function (r) { io.observe(r); });
  } else {
    Array.prototype.forEach.call(reveals, function (r) { r.classList.add('in'); });
  }

  // highlight the section you're in
  var secs = document.querySelectorAll('section.sec');
  if ('IntersectionObserver' in window && secs.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var id = e.target.id;
        Array.prototype.forEach.call(links.querySelectorAll('a'), function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Array.prototype.forEach.call(secs, function (s) { spy.observe(s); });
  }
})();
