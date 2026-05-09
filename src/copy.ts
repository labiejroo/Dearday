export const meta = {
  title: 'Dearday — daily affirmation + 3 reflection questions',
  description:
    'A daily affirmation subscription. Every day at your chosen time, you receive a short affirmation and three reflection questions — straight to SMS or email.',
  og: {
    title: "Dearday — Dear Day, let's start together",
    description:
      'A daily affirmation and 3 reflection questions — SMS or email. Five minutes that change your day.',
  },
};

export const nav = {
  links: [
    { label: 'How it works', href: '#how' },
    { label: 'Examples', href: '#examples' },
    { label: 'Plans', href: '#plans' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: 'Start now',
};

export const hero = {
  badge: '🔔 A new affirmation every day',
  h1: {
    line1: 'Dear Day,',
    accent: "let's start",
    underline: 'together.',
  },
  sub: 'Every day at your chosen time, you receive a short affirmation and three reflection questions — straight to your SMS or email. Five minutes that change the whole day.',
  ctaPrimary: 'Start now',
  ctaGhost: 'See how it works',
  socialProof: 'Over 10,000 people love us already',
  cards: [
    {
      date: 'Monday, May 12',
      aff: '“I walk through this day with ease and curiosity.”',
      qs: [
        'What do I want to feel today?',
        "What small 'yes' do I want to say to myself?",
        'Who can I thank today?',
      ],
    },
    {
      date: 'Tuesday, May 13',
      aff: '“I am ready for everything this day will bring.”',
      qs: [
        'What do I want to achieve today?',
        'What am I grateful for today?',
        'What one thing can I do for myself?',
      ],
    },
    {
      note: 'Just one thing today…',
      noteDetail: 'breath & smile',
      signature: 'x Ada',
    },
  ] as const,
};

export const counters = [
  { target: 10_000, unit: '+', label: 'users & subscribers' },
  { target: 365,    unit: 'sets', label: 'affirmations in a year' },
  { target: 5,      unit: 'min a day', label: 'all it takes to start' },
];

export const affirmations = {
  eyebrow: '— torn from journal pages —',
  h2: 'This is what your day with Dearday looks like',
  p: 'Every morning one affirmation and three questions for self-growth. No pressure, no tasks to tick off — just an invitation to a moment with yourself.',
  dayLabel: '~ day',
  cards: [
    {
      date: 'Mon, May 12',
      icon: { c: 'fa-regular fa-sun', color: 'var(--terracotta-deep)' },
      aff: 'I am ready for everything this day will bring."',
      qs: [
        'What do I want to achieve today — even the smallest thing?',
        'What am I grateful for today?',
        'What one thing can I do for myself?',
      ],
      day: '#128',
    },
    {
      date: 'Tue, May 13',
      icon: { c: 'fa-solid fa-seedling', color: 'var(--ocean-deep)' },
      aff: "I don’t have to be perfect to be enough.\"",
      qs: [
        'Where was I too hard on myself today?',
        'What would I tell myself from a year ago?',
        'What can I let go of today — even for a moment?',
      ],
      day: '#129',
    },
    {
      date: 'Wed, May 14',
      icon: { c: 'fa-regular fa-moon', color: 'var(--dusty-deep)' },
      aff: 'I carry a stillness within me I can always return to."',
      qs: [
        'What tried to take my peace today?',
        'When did I last feel truly present?',
        'What one word do I want to carry into the evening?',
      ],
      day: '#130',
    },
  ],
};

export const howItWorks = {
  eyebrow: '— how it works —',
  h2: 'Three simple steps to a daily practice',
  p: "You don't need an app, accounts, or push notifications. Just you, your favourite cup of tea, and a moment of mindfulness.",
  steps: [
    {
      icon: 'fa-regular fa-envelope-open',
      title: 'Choose your plan and channel',
      text: 'You decide whether affirmations arrive by SMS or email — and at what time you’d like to receive them.',
    },
    {
      icon: 'fa-regular fa-sun',
      title: 'Receive your daily set',
      text: 'At the set time, you receive the day’s affirmation and 3 deepening reflection questions.',
    },
    {
      icon: 'fa-regular fa-pen-to-square',
      title: 'Spend 5 minutes with yourself',
      text: 'Answer in a notebook or in your head. Just a moment is enough to start the day with intention.',
    },
  ],
};

export const delivery = {
  eyebrow: '— how it’s delivered —',
  h2: 'Two channels, one daily ritual.',
  pBefore: 'Every morning — at the time you choose — you receive a',
  pHighlight: 'complete self-growth set',
  pAfter: ': one affirmation and three deepening reflection questions. No app, no login. Right where you already are.',
  switchNote: '~ Switch channel or time whenever you like.',
  channels: [
    {
      variant: undefined as 'email' | undefined,
      icon: 'fa-solid fa-comment-sms',
      h4: 'SMS',
      p: 'A short, warm message — like a text from a friend.',
    },
    {
      variant: 'email' as const,
      icon: 'fa-regular fa-envelope',
      h4: 'E‑mail',
      p: 'A fuller version with space for your own notes.',
    },
  ],
  phone: {
    bubble1: {
      time: '7:30',
      aff: '“I walk through this day with ease.”',
      qs: [
        'What do I want to feel today?',
        "What small 'yes' will I say to myself?",
        'Who do I want to thank today?',
      ],
    },
    bubble2: {
      time: 'tomorrow 7:30',
      aff: '“I carry a stillness within me I can always return to.”',
    },
  },
};

export const plans = {
  eyebrow: '— choose your rhythm —',
  h2: 'Subscription plans',
  p: 'No long-term commitment. Start with a week, and if you fall in love with Dearday — stay longer.',
  items: [
    {
      name: 'Weekly',
      desc: 'Try the practice with no strings attached',
      offerId: 'S650103744_PL',
      price: '€19',
      period: '/ week',
      daily: '~ per day',
      features: [
        '7 daily affirmations',
        '3 reflection questions every day',
        'SMS or email — your choice',
        'Change delivery time anytime',
        'Cancel with one click',
      ],
    },
    {
      featured: true,
      tag: 'Most popular',
      name: 'Monthly',
      desc: 'Long enough to feel the difference',
      offerId: 'S650103744_PL',
      price: '€59',
      period: '/ month',
      daily: '~ per day',
      savings: '~ save 28% ~',
      features: [
        '30 daily affirmations',
        '3 reflection questions every day',
        'SMS or email + switch anytime',
        'Themed weeks (gratitude, boundaries…)',
        'Digital printable journal — free',
        'Cancel any time',
      ],
    },
    {
      tagVariant: 'value' as const,
      tag: 'Best value',
      name: 'Annual',
      desc: '365 days of daily practice',
      offerId: 'S650103744_PL',
      price: '€499',
      period: '/ year',
      daily: '~ per day',
      savings: '~ save up to 49% ~',
      features: [
        '365 daily affirmations',
        '3 reflection questions every day',
        'SMS + email simultaneously',
        'All themed weeks',
        'Printed Dearday journal sent by post',
        '14-day money-back guarantee',
      ],
    },
  ],
};

export const testimonials = {
  eyebrow: '— what they say —',
  h2: '5 daily minutes that change the rhythm of your day',
  items: [
    {
      quote:
        'Dearday is the first thing I read in the morning — before I check my emails. Over three months, it changed the way I talk to myself on hard days.',
      name: 'Ada Wojciechowska',
      meta: 'copywriter, Warsaw',
      initial: 'A',
    },
    {
      quote:
        "I love the questions most. The affirmation is lovely, but it’s the three questions that make me pause. I feel like I’m genuinely doing something for myself.",
      name: 'Marta Kowal',
      meta: 'therapist, Kraków',
      initial: 'M',
    },
    {
      quote:
        "I tried meditation apps — they never stuck. The Dearday SMS works because it’s already where I look first thing in the morning.",
      name: 'Kasia Sienkiewicz',
      meta: 'mum of two, Gdynia',
      initial: 'K',
    },
  ],
};

export const faq = {
  eyebrow: '— frequently asked questions —',
  h2: 'Anything else?',
  items: [
    {
      q: 'Do I need to install an app?',
      a: 'No. Dearday is intentionally not an app — we want your daily practice to happen where you already are: in your SMS inbox or email. No new icon on your screen, no more notifications.',
    },
    {
      q: 'What time do the affirmations arrive?',
      a: 'You choose the time when you sign up — anything between 5:00 and 22:00. Most users choose 7:00–8:30, but Dearday works just as well as an evening ritual. Change your time any time from the email.',
    },
    {
      q: 'Can I cancel my subscription at any time?',
      a: 'Yes — with one click, no questions asked. Cancel from your account or reply STOP to any SMS. The annual plan also comes with a 14-day money-back guarantee.',
    },
    {
      q: 'Are the affirmations generated by AI?',
      a: "All affirmation and question sets are created by our small team — a psychologist, a coach, and a poet. AI helps us organise themed weeks, but every word is read and refined by a human. That’s where the warm, ‘journal-like’ tone comes from.",
    },
    {
      q: 'Do SMS messages work outside Poland?',
      a: 'Yes — we send SMS messages to all EU countries as well as the UK and Norway at no extra charge. Outside this area, we recommend the email plan — it works everywhere, regardless of carrier.',
    },
  ],
};

export const ctaBanner = {
  eyebrow: "— say ‘good morning’ to yourself —",
  h2: 'Your first set will arrive tomorrow morning.',
  p: 'No app. No login. Five minutes that change the whole day.',
  cta: 'Start now',
};

export const footer = {
  brand: 'A daily affirmation and three reflection questions — delivered by SMS or email at the time you choose.',
  product: {
    label: 'Product',
    links: [
      { label: 'How it works', href: '#how' },
      { label: 'Examples', href: '#examples' },
      { label: 'Plans', href: '#plans' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  company: {
    label: 'Company',
    links: [
      { label: 'About us', href: '#' },
      { label: 'Journal blog', href: '#' },
      { label: 'Partnerships', href: '#' },
      { label: 'Gift card', href: '#' },
    ],
  },
  legal: {
    label: 'Contact & legal',
    links: [
      { label: 'Terms of service', href: '#' },
      { label: 'Privacy policy', href: '#' },
      { label: 'hej@dearday.pl', href: 'mailto:hej@dearday.pl' },
      { label: 'Help centre', href: '#' },
    ],
  },
  copyright: '© 2026 Dearday — made with care in Warsaw 🌿',
  tagline: '~ Dear Day, see you tomorrow! ~',
};

export const success = {
  tagline: '~ Dear Day ~',
  h1Before: 'Welcome to',
  h1Accent: 'Dearday.',
  p1: 'Your first set — one affirmation and three reflection questions — will arrive tomorrow morning at your chosen time. Check your inbox and confirm your sign-up.',
  p2: 'You can change the time, channel, or cancel your subscription at any time.',
  back: 'Back to homepage',
};
