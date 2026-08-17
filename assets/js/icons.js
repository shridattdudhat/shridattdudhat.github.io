/* ============================================================
   ICONS.JS — social marks only
   ============================================================
   Just the six social glyphs used beside the portrait. Inline
   SVG, so nothing loads from a CDN and nothing can 404.

   To add one: paste the INNER shapes of a 24×24 stroke SVG
   below (no <svg> wrapper — that gets added for you), then
   reference the name from `socials` in content.js.
   ============================================================ */

const ICONS = {
  linkedin:  '<rect x="2.5" y="2.5" width="19" height="19" rx="2"/><path d="M7.4 10.2v7M7.4 6.9v.02M11.6 17.2v-4.1a2.6 2.6 0 0 1 5.2 0v4.1"/>',
  github:    '<path d="M9 19.2c-4.8 1.4-4.8-2.4-6.7-2.9m13.4 5.7v-3.7c0-1.1-.3-1.9-.9-2.5 2.9-.3 5.9-1.4 5.9-6.4a5 5 0 0 0-1.3-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.6 1.3a12.8 12.8 0 0 0-6.7 0C6.5 2.1 5.4 2.4 5.4 2.4a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 4 9.4c0 5 3 6.1 5.9 6.4-.6.6-.9 1.4-.9 2.5V22"/>',
  youtube:   '<rect x="1.8" y="4.8" width="20.4" height="14.4" rx="4"/><path d="m10 8.8 5.6 3.2L10 15.2z"/>',
  x:         '<path d="M3 3.5 20.5 20.5M20.5 3.5 3 20.5"/>',
  instagram: '<rect x="2.8" y="2.8" width="18.4" height="18.4" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.2" cy="6.8" r=".9"/>',
  facebook:  '<path d="M14.5 8.5H17V4.8h-2.9c-2.4 0-3.9 1.6-3.9 4v2.2H7.5v3.7h2.7V22h3.8v-7.3h2.8l.5-3.7h-3.3V9.4c0-.6.2-.9.5-.9Z"/>',
  mail:      '<rect x="2" y="4.5" width="20" height="15" rx="1.5"/><path d="m2.6 6 9.4 6.3L21.4 6"/>',
  link:      '<path d="M10 13.5a4.5 4.5 0 0 0 6.8.5l2.7-2.7a4.5 4.5 0 0 0-6.4-6.4L11.6 6.4"/><path d="M14 10.5a4.5 4.5 0 0 0-6.8-.5l-2.7 2.7a4.5 4.5 0 0 0 6.4 6.4l1.5-1.5"/>',
};

function icon(name) {
  var body = ICONS[name] || ICONS.link;
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
    body + '</svg>';
}
