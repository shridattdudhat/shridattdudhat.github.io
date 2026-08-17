/* ============================================================
   CONTENT.JS  —  THIS IS THE ONLY FILE YOU NEED TO EDIT
   ============================================================

   Everything on the site is generated from the object below.
   Edit the text, save, refresh. No build step, no framework.

   RULES
   -----
   1. Keep the quotes and the commas. Every item ends with a comma.
   2. To hide a whole section, set its `show` to false.
   3. To add an item, copy an existing { ... } block and edit it.
   4. Fields marked  //html  accept HTML tags (e.g. <sup>2</sup>).
      Everything else is plain text and is escaped automatically.
   5. Apostrophes inside single-quoted text need a backslash:
      'India\'s first'   — or just use double quotes: "India's first"

   COLOURS & FONTS live in  assets/css/style.css  (top of the file).
   ============================================================ */

const CONTENT = {

  /* ---------- 1. WHO YOU ARE (used in nav, tab title, SEO) ---------- */
  meta: {
    name:        'Shridatt Dudhat',
    navSuffix:   'R&D',                        // shown after your name in the nav
    tabTitle:    'Shridatt Dudhat — Electronics Engineer & R&D Lead',
    description: 'Electronics engineer and R&D lead. Environmental sensing hardware, analog front-ends, embedded firmware — from transducer to shipped product.',
    url:         'https://shridattdudhat.github.io/',
    email:       'electroShri@gmail.com',
    location:    'Ahmedabad, India',
    education:   'B.E. Power Electronics · VGEC Chandkheda',
    resumeUrl:   '',                           // e.g. 'assets/Shridatt-Dudhat-CV.pdf' — leave '' to hide the button
  },


  /* ---------- 2. HERO ---------- */
  hero: {
    eyebrow: 'Electrical & Electronics Engineer · R&D Lead',
    // Each array item is one line. Wrap words in {gold:...} or {cyan:...} to accent them.
    headline: [
      'From {gold:microvolts}',
      'to {cyan:light-years}.',
    ],
    // {b:...} makes text bright/bold
    lede: 'Electrical and electronics engineer building {b:air quality and environmental sensor technology}. Product innovation and development, from first prototype to certified hardware — with an incurable hobbyist streak and one eye permanently on the sky.',
    buttons: [
      { label: 'See the work',   href: '#work',    solid: true  },
      { label: 'Get in touch',   href: '#contact', solid: false },
    ],
  },


  /* ---------- 2b. PORTRAIT ----------
     Put your photo at  assets/img/shridatt.jpg  (or change the path).
     Portrait orientation works best — it is cropped to 4:5.
     If the file is missing, a monogram is shown instead, so the
     page never looks broken.

     shape:  'frame'  = squared photo with crop marks  (default)
             'circle' = round avatar, like the old site
     ---------------------------------------------------------- */
  profile: {
    show: true,
    photo: 'assets/img/shridatt.png',
    alt: 'Shridatt Dudhat',
    shape: 'frame',
    monogram: 'SD',                 // fallback if the photo is missing
    plateLeft: 'Shridatt Dudhat',   // small label under the photo
    plateRight: 'Ahmedabad, IN',
    showSocials: true,              // social buttons under the photo
  },


  /* ---------- 3. THE SCALE (the signature graphic under the hero) ----------
     Nodes are evenly spaced left→right on desktop, top→bottom on mobile.
     `value` accepts HTML so you can use <sup> for exponents.
     Add or remove nodes freely — the axis adapts.                          */
  scale: {
    show: true,
    leftCaption:  'Working scale',
    rightCaption: 'Signal → sky',
    nodes: [
      { value: '10<sup>−6</sup> V',  label: 'Ion-selective electrodes and thermocouple-level signals' },   //html
      { value: '10<sup>−3</sup> m',  label: 'MEMS transducers, delta-sigma ADCs, analog front-ends' },
      { value: '10<sup>−1</sup> m',  label: 'Boards, firmware, enclosures, certification' },
      { value: '10<sup>1</sup> m',   label: 'Deployed nodes, field calibration, live networks' },
      { value: '10<sup>4</sup> m',   label: 'Air quality across a city, measured continuously' },
      { value: '10<sup>16</sup> m',  label: 'A homemade telescope and a clear night. Not the day job.' },
    ],
  },


  /* ---------- 4. FOCUS ---------- */
  focus: {
    show: true,
    id: 'focus',
    nav: 'Focus',
    eyebrow: 'What I actually do',
    heading: 'Measurement, end to end',
    note: 'A sensor is only as good as everything around it. Most of my work sits in the unglamorous layers between the transducer and the number on someone\'s dashboard.',
    items: [
      {
        tag: 'Analog',
        title: 'Front-end design',
        body: 'High-impedance buffering, low-noise amplification, precision references, and ADC selection for signals that live near the noise floor.',
      },
      {
        tag: 'Firmware',
        title: 'Embedded systems',
        body: 'Low-power firmware on ESP32 and STM32 class parts. Sensor drivers, I²C/Modbus/SDI-12, OTA, and the timing discipline that keeps readings honest.',
      },
      {
        tag: 'Sensing',
        title: 'Core sensor development',
        body: 'Building transducers rather than buying them — electrochemical, acoustic, optical and dielectric — and characterising them against reference instruments.',
      },
      {
        tag: 'Product',
        title: 'R&D leadership',
        body: 'Taking hardware from bench prototype to a certified, manufacturable product: design reviews, test plans, CE/FCC/EMC readiness, and the team that gets it there.',
      },
    ],
  },


  /* ---------- 5. SELECTED WORK ----------
     `meta`  = small label on the right (e.g. 'Open source')
     `tags`  = optional small chips under the description
     `href`  = where the row links to                                       */
  work: {
    show: true,
    id: 'work',
    nav: 'Work',
    eyebrow: 'Selected work',
    heading: 'Open hardware & side builds',
    note: 'Projects I can show. Design files, firmware and bills of materials are public where the licence allows.',
    items: [
      {
        title: 'AirOwl',
        desc: 'Open-source ESP32 air quality monitor — schematics, firmware and enclosure for a low-cost community sensing node.',
        meta: 'Open source',
        tags: ['ESP32', 'PM sensing', 'KiCad'],
        href: 'https://github.com/oizom-iot/airowl',
      },
      {
        title: 'OxiKit Brainboard',
        desc: 'Control board for OxiKit, an open-source oxygen concentrator. Released with full design files, BOM and Gerbers during the oxygen shortage.',
        meta: 'Open source',
        tags: ['Medical', 'Control', 'Open hardware'],
        href: 'https://github.com/shridattdudhat/Oxikit-Brainboard',
      },
      {
        title: 'ADS124S08 Module',
        desc: 'Breakout and driver for TI\'s 24-bit, 12-channel delta-sigma ADC with integrated PGA and reference — a general-purpose precision measurement front-end.',
        meta: 'Hardware · Driver',
        tags: ['24-bit ADC', 'Analog', 'SPI'],
        href: 'https://github.com/shridattdudhat/ADS124S08',
      },
      {
        title: 'μDrone',
        desc: 'A low-cost Arduino-based drone built to teach the fundamentals — flight control, sensor fusion and power budgeting — without a hobby-grade price tag.',
        meta: 'Learning kit',
        tags: ['Arduino', 'IMU', 'Teaching'],
        href: 'https://shridattdudhat.github.io/uDrone',
      },
      {
        title: 'getPosition',
        desc: 'GPS-enabled motorcycle theft-protection board. Tracking, geofencing and alerting on a compact, low-power design.',
        meta: 'Hardware',
        tags: ['GPS', 'GSM', 'Low power'],
        href: 'https://shridattdudhat.github.io/getPosition',
      },
      {
        title: 'Phase Angle Control',
        desc: 'Thyristor phase-fired control for AC power limiting — zero-cross detection, firing-angle modulation and a safe switching reference design.',
        meta: 'Power electronics',
        tags: ['Triac', 'Mains', 'Control'],
        href: 'https://github.com/shridattdudhat/PhaseAngleControl',
      },
      {
        title: 'Everything else',
        desc: 'STM8 development boards, a CM4 footprint library, water-level controllers and assorted bench experiments.',
        meta: 'GitHub',
        tags: [],
        href: 'https://github.com/shridattdudhat',
      },
    ],
  },


  /* ---------- 6. EXPERIENCE ----------
     Grouped by organisation. Each organisation holds one or more roles.
     `span`  = the whole time at that organisation (shown in the left column)
     `roles` = newest first. `type` is optional (Part-time, Mentor, ...)     */
  experience: {
    show: true,
    id: 'experience',
    nav: 'Experience',
    eyebrow: 'Experience',
    heading: 'Twelve years at the bench',
    note: 'Grouped by organisation, newest first. Roles overlap where I stayed on in an advisory capacity.',
    items: [

      {
        org:  'Oizom',
        meta: 'Environmental Monitoring · Ahmedabad',
        span: '2017 — Present',
        body: 'Environmental monitoring hardware and software. I lead R&D across industrial design, design engineering, embedded hardware and firmware — responsible for the core sensing technology behind air quality, noise, vibration and gas monitoring products, and for the certification and IP work that gets them to market.',
        roles: [
          { when: 'Jun 2023 — Present',  title: 'Head of Research & Development' },
          { when: 'May 2018 — Dec 2023', title: 'Electronics Team Lead' },
          { when: 'Mar 2021 — Mar 2022', title: 'R&D Consultant & Guide', type: 'Part-time' },
          { when: 'Mar 2017 — Apr 2018', title: 'Research & Development Engineer' },
        ],
      },

      {
        org:  'AirOwl',
        meta: 'Open-source air quality monitor',
        span: '2024 — Present',
        body: 'An open-source ESP32 air quality monitor anyone can build. I mentor the project — architecture, sensor selection, and the documentation that makes it reproducible outside our own bench.',
        roles: [
          { when: 'Mar 2024 — Present', title: 'Mentor' },
        ],
      },

      {
        org:  'CricHeroes',
        meta: 'Sports technology · Ahmedabad',
        span: '2024 — Present',
        body: 'Hardware product mentoring — guiding electronics and product decisions from concept through to a design that can actually be manufactured.',
        roles: [
          { when: 'May 2024 — Present', title: 'Impact Player · Hardware Product Mentor' },
        ],
      },

      {
        org:  'Urban Naps',
        meta: 'Wellness Pod · Sanand',
        span: '2019 — Present',
        body: "India's first smart napping pods. I built the electronics and IoT stack — access control, comfort sensing, connectivity and remote management — and now advise the team on technology direction.",
        roles: [
          { when: 'Apr 2022 — Present',  title: 'Technology Mentor' },
          { when: 'Mar 2021 — Mar 2022', title: 'Electronics & IoT Lead' },
          { when: 'Apr 2019 — Apr 2021', title: 'Electronics & IoT Consultant', type: 'Part-time' },
        ],
      },

      {
        org:  'On2Cook India',
        meta: 'Cooking appliance R&D · Ahmedabad',
        span: '2022 — 2023',
        body: 'Led R&D for a next-generation cooking appliance — electronics, control systems and the product engineering needed to take a novel heating concept toward production.',
        roles: [
          { when: 'Nov 2022 — Jun 2023', title: 'Research & Development Lead' },
        ],
      },

      {
        org:  'Inventindia Innovations',
        meta: 'Product design consultancy · Ahmedabad',
        span: '2022 — 2023',
        body: 'Lead electronics designer across client hardware programmes — schematic and PCB design, firmware, and design-for-manufacture reviews for products spanning several industries.',
        roles: [
          { when: 'Mar 2022 — Jun 2023', title: 'Lead Electronics Designer' },
        ],
      },

      {
        org:  'SLTL Group',
        meta: 'Sahajanand Laser Technology · Gandhinagar',
        span: '2021',
        body: 'Power electronics design for industrial laser systems inside SLTL\u2019s in-house R&D group.',
        roles: [
          { when: 'Jan 2021 — Mar 2021', title: 'Designer · Power Electronics' },
        ],
      },

      {
        org:  'Saurer Group',
        meta: 'Textile machinery · Ahmedabad',
        span: '2014 — 2017',
        body: 'Machine electronics, controls and field service for fibre and yarn processing equipment. Where I learned how industrial hardware actually fails, which turned out to be the most useful thing I know.',
        roles: [
          { when: 'May 2016 — Apr 2017', title: 'Technical Service Engineer' },
          { when: 'Aug 2014 — Apr 2016', title: 'Junior Engineer' },
        ],
      },

    ],
  },


  /* ---------- 7. TOOLKIT ---------- */
  skills: {
    show: true,
    id: 'toolkit',
    nav: 'Toolkit',
    eyebrow: 'Toolkit',
    heading: 'What I work in',
    note: '',
    groups: [
      { name: 'Languages',    items: ['C', 'C++', 'Python', 'JavaScript'] },
      { name: 'Embedded',     items: ['ESP-IDF', 'FreeRTOS', 'STM32', 'STM8', 'PlatformIO', 'Raspberry Pi'] },
      { name: 'Hardware',     items: ['KiCad', 'Altium', 'LTspice', 'Fusion 360', 'FreeCAD', 'DFM / DFT'] },
      { name: 'Protocols',    items: ['I²C / SPI / UART', 'Modbus RTU', 'SDI-12', 'MQTT', 'LoRa', 'BLE'] },
      { name: 'Data & infra', items: ['Docker', 'InfluxDB', 'Grafana', 'Node-RED', 'AWS', 'Git'] },
      { name: 'Compliance',   items: ['CE', 'FCC', 'EMC / EMI', 'IP ratings', 'ISO 9001'] },
    ],
  },


  /* ---------- 8. OFF THE CLOCK ---------- */
  beyond: {
    show: true,
    id: 'beyond',
    nav: 'Beyond',
    eyebrow: 'Off the clock',
    heading: 'Still the kid who took the radio apart',
    note: 'The title changed. The curiosity didn\'t. Two things have followed me since long before any of this was a job.',
    items: [
      {
        tag: 'Astronomy',
        title: 'Homemade optics, dark skies',
        body: 'I built my own telescope and use it for what it was made for — planets, lunar and solar eclipses, comets, meteor showers. Astrophysics is the one field where I get to be purely an amateur, and that\'s the point.',
        linkText: '',
        linkHref: '',
      },
      {
        tag: 'Making',
        title: 'Electronix Hobbyist',
        body: 'Breadboards, scope traces and weekend builds, filmed and shared. Teaching a circuit is the fastest way to find out whether you actually understand it.',
        linkText: 'Watch on YouTube',
        linkHref: 'https://www.youtube.com/ElectronixHobbyist',
      },
    ],
  },


  /* ---------- 9. TESTIMONIALS ---------- */
  quotes: {
    show: true,
    id: 'references',
    nav: '',                                   // '' = don't put it in the nav
    eyebrow: 'References',
    heading: 'In other words',
    note: '',
    items: [
      {
        text:   'Shridatt is an excellent hardware engineer and he is passionate about what he does. You can totally count on him to deliver your projects.',
        author: 'Vinay Reddy',
        role:   'Sickle Innovation',
      },
      {
        text:   'He did an incredible job in a short time. Easy to work with, great ideas, and a good listener. I highly recommend him to anyone looking for an electronics engineer.',
        author: 'Viraj Gandhi',
        role:   'Rectagon Design Studio',
      },
      {
        text:   'Shridattbhai is not only an engineer, he is an electronics imagineer. I love his enthusiasm for electronics — he always encourages me to go and build something.',
        author: 'Shyamal Vyas',
        role:   'Power Electronics Engineer, Hitachi',
      },
    ],
  },


  /* ---------- 10. CONTACT ---------- */
  contact: {
    show: true,
    id: 'contact',
    nav: 'Contact',
    eyebrow: 'Contact',
    heading: ['Got something', 'worth measuring?'],   // one array item per line
  },


  /* ---------- 11. SOCIAL LINKS ---------- */
  /* `icon` names live in assets/js/icons.js:
     linkedin  github  youtube  x  instagram  facebook  mail  link   */
  socials: [
    { icon: 'linkedin',  label: 'LinkedIn',    href: 'https://www.linkedin.com/in/shridattdudhat' },
    { icon: 'github',    label: 'GitHub',      href: 'https://github.com/shridattdudhat' },
    { icon: 'youtube',   label: 'YouTube',     href: 'https://www.youtube.com/ElectronixHobbyist' },
    { icon: 'x',         label: 'X / Twitter', href: 'https://twitter.com/shridattdudhat' },
    { icon: 'instagram', label: 'Instagram',   href: 'https://www.instagram.com/shridattdudhat' },
    { icon: 'facebook',  label: 'Facebook',    href: 'https://www.facebook.com/shridattdudhat' },
  ],

};
