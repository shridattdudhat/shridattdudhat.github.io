# Portfolio — Photo variant

A single-page portfolio. No build step, no framework, no dependencies.
Everything is generated from one content file.

## Files

```
index.html                  the shell — you never edit this
assets/css/style.css        colours + fonts at the top, layout below
assets/js/icons.js          social glyphs only
assets/js/content.js        >>> ALL YOUR CONTENT LIVES HERE <<<
assets/js/render.js         builds the page — you never edit this
assets/img/                 put images and your CV here
```

## How to update

Open **`assets/js/content.js`**, change the text, save, refresh the browser.
That's the whole workflow.

### Add a project

Find the `work:` block and copy one of the existing entries:

```js
{
  title: 'Sensor Node v2',
  desc:  'One or two sentences on what it is and why it matters.',
  meta:  'Open source',                    // small label on the right
  tags:  ['ESP32-C6', 'SDI-12', 'KiCad'],  // optional, use [] for none
  href:  'https://github.com/you/repo',
},
```

Order in the file = order on the page. Move blocks around to re-rank.

### Add a job

Experience is **grouped by organisation**. Each organisation holds one
or more roles, newest first:

```js
{
  org:  'Company Name',
  meta: 'What they do · City',
  span: '2024 — Present',            // left column
  body: 'What you were responsible for.',
  roles: [
    { when: 'Jun 2025 — Present',  title: 'Senior Title' },
    { when: 'Jan 2024 — Jun 2025', title: 'Earlier Title', type: 'Part-time' },
  ],
},
```

`type` is optional — leave it out for full-time roles. The first role
in the list gets the gold marker, so keep them newest first.

One role at an organisation still uses a `roles` array — just with a
single entry.

### Change the scale graphic

That's the axis under the headline. Edit `scale.nodes`. Add or remove
nodes freely — the spacing adjusts itself. `value` accepts HTML so you
can write `10<sup>−6</sup> V`.

To remove the graphic entirely, set `scale.show = false`.

### Hide a whole section

Set its `show` to `false`:

```js
quotes: { show: false, ... }
```

### Your photo

Save it as **`assets/img/shridatt.jpg`**. Portrait orientation is best
— it gets cropped to 4:5. Around 800×1000 px is plenty.

Your existing photo is at
`https://shridattdudhat.github.io/assets/images/shridatt.png` —
right-click, save, drop it in.

Settings live in the `profile` block of `content.js`:

```js
profile: {
  show: true,
  photo: 'assets/img/shridatt.jpg',
  shape: 'frame',              // 'frame' or 'circle'
  monogram: 'SD',              // shown if the photo is missing
  plateLeft: 'Shridatt Dudhat',
  plateRight: 'Ahmedabad, IN',
  showSocials: true,
},
```

If the file isn't there yet the page shows an **SD** monogram instead
of a broken image, so nothing looks wrong while you sort the photo out.

`shape: 'circle'` gives you the round avatar from the old site.
`shape: 'frame'` is the squared photo with corner crop marks.

If the crop cuts your face awkwardly, adjust this line in
`assets/css/style.css`:

```css
object-position:center 22%;   /* lower % moves the crop up */
```

### Add your CV

Drop the PDF in `assets/`, then set:

```js
resumeUrl: 'assets/Shridatt-Dudhat-CV.pdf',
```

A **CV** link appears in the nav automatically.

### Change colours or fonts

Top of `assets/css/style.css`, in the `:root` block. Change the hex
values and everything updates — the accents are used consistently.

Fonts come from Google Fonts. If you swap a family, update both the
`--display` / `--body` / `--mono` variables **and** the `<link>` in
`index.html`.

## Gotchas

- Every item in `content.js` ends with a **comma**. Miss one and the
  page goes blank.
- Apostrophes inside `'single quotes'` need escaping: `'India\'s'` —
  or just use `"double quotes"` instead.
- If the page renders blank, open the browser console (F12). A syntax
  error in `content.js` will be the first line.

## Deploying

Push to the `shridattdudhat.github.io` repo. GitHub Pages serves it
from the root automatically — usually live within a minute.

To preview locally, just double-click `index.html`. Everything is
plain files, so it works straight off the filesystem.
