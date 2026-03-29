const en = {
  nav: {
    home: 'Home',
    about: 'About us',
    sermons: 'Sermons',
    blog: 'Blog',
    language: 'Language',
    brandTagline: 'Ministry',
  },
  footer: {
    brand: 'Flames of Power',
    headline: 'Faith that moves hearts',
    blurb:
      'A community committed to Christ, His Word, and one another. We would love to meet you.',
    rights: 'All rights reserved.',
    quickLinks: 'Quick links',
    fellowship: 'Fellowship',
    connect: 'Connect',
    socialSoon: 'soon',
  },
  hero: {
    welcome: 'Welcome to Flames of Power',
    title: 'Become part of a community that believes, worships, and serves together',
    subtitle:
      'Gather with us as we pursue God, grow in His Word, and carry His love into everyday life.',
    learnMore: 'Learn more',
    contactUs: 'Contact us',
    callUs: 'Call us',
    whatsapp: 'WhatsApp',
  },
  visit: {
    kicker: 'Plan your visit',
    title: 'Service times & location',
    subtitle: 'Everyone is welcome. Come as you are.',
    timesTitle: 'Sunday gathering',
    timesBody: 'Main service · 9:00 AM · 12, Milo Close',
    midweekTitle: 'Midweek Bible study',
    midweekBody: 'Wednesdays · 6:30 PM · Same venue',
    mapCta: 'Open in Google Maps',
    expectTitle: 'First time here?',
    expect1: 'Friendly greeters at the door — we will help you find a seat.',
    expect2: 'Service runs about 90 minutes with worship and teaching.',
    expect3: 'Dress comfortably; modest casual is perfect.',
  },
  newsletter: {
    kicker: 'Stay connected',
    title: 'Updates & prayer',
    desc: 'Leave your email for announcements. We respect your inbox — no spam.',
    emailLabel: 'Email address',
    emailPlaceholder: 'you@example.com',
    submit: 'Subscribe',
    success: 'Thanks! We will be in touch soon.',
    error: 'Something went wrong. Try again or email us directly.',
  },
  aboutIntro: {
    kicker: 'Who we are',
    title: 'Rooted in faith, built for people',
    body:
      'Flames of Power is a welcoming community where believers grow together through the Word, heartfelt worship, and practical love. Whether you are exploring faith or looking for a home to serve, there is a place for you here.',
    readMore: 'Read our full story',
  },
  fellowship: {
    kicker: 'Get involved',
    title: 'Fellowship with us',
    subtitle:
      'Three ways to plug in — discover who we are, study the Word, and encounter God in worship.',
    aboutTitle: 'About us',
    aboutText:
      'We are a community grounded in faith, love, and service — living out the gospel with humility and joy.',
    bibleTitle: 'Bible study',
    bibleText:
      'Interactive sessions that open Scripture, answer questions, and equip you to walk in truth.',
    worshipTitle: 'Worship',
    worshipText: 'Passionate praise that lifts Jesus high and draws hearts into His presence.',
  },
  resources: {
    kicker: 'Grow with us',
    title: 'Sermons & stories',
    subtitle: 'Teaching and reflections to strengthen your walk — new content is on the way.',
    sermonsTitle: 'Sermons',
    sermonsText:
      'Messages from our services will be available here soon — subscribe at the bottom so you do not miss the launch.',
    blogTitle: 'Blog',
    blogText:
      'Devotionals, updates, and community highlights — we are preparing a space to share encouragement weekly.',
    soon: 'Coming soon',
    openSermons: 'Sermons page',
    openBlog: 'Blog page',
  },
  aboutPage: {
    title: 'About Flames of Power',
    meta: 'Our story, beliefs, and the people who serve.',
    storyTitle: 'Our story',
    storyP1:
      'We began as a small group hungry for authentic worship and the Word. Today we are a growing family committed to lifting Jesus high and serving our city.',
    storyP2:
      'We believe the local church is a hospital for the hurting and a training ground for disciples — not a museum for perfect people.',
    beliefsTitle: 'What we believe',
    belief1: 'The Bible is God’s Word and our final authority for faith and life.',
    belief2: 'Salvation is by grace through faith in Jesus Christ alone.',
    belief3: 'The Holy Spirit empowers us to live holy, compassionate, and missional lives.',
    leadersTitle: 'Leadership',
    leadRole: 'Lead pastor',
    associateRole: 'Associate pastor',
    leaderBio: 'Bio and photo coming soon — reach out if you would like to connect.',
  },
  sermonsPage: {
    title: 'Sermons',
    meta: 'Watch recent messages and series from Flames of Power.',
    intro:
      'Replace the sample video IDs below with your church’s YouTube uploads or playlist. Edit `src/pages/SermonsPage.jsx`.',
    sampleBadge: 'Sample embed',
  },
  blogPage: {
    title: 'Blog',
    meta: 'Articles, devotionals, and church news.',
    intro: 'New posts will appear here. For now, enjoy these placeholders.',
    readMore: 'Read more',
  },
  notFound: {
    title: 'Page not found',
    body: 'The page you are looking for does not exist or has moved.',
    home: 'Back home',
  },
}

const pcm = {
  ...en,
  nav: {
    home: 'Home',
    about: 'About us',
    sermons: 'Sermon dem',
    blog: 'Blog',
    language: 'Langwej',
    brandTagline: 'Ministry',
  },
  hero: {
    ...en.hero,
    subtitle:
      'Make we pursue God together, grow for inside Him Word, carry Him love enter everyday life.',
    learnMore: 'Read more',
    contactUs: 'Contact us',
  },
  visit: {
    ...en.visit,
    subtitle: 'Everybody dey welcome. Come as you dey.',
    expectTitle: 'Na your first time?',
    expect1: 'People go greet you for door — we go help you find seat.',
    expect2: 'Service na like 90 minutes with worship and teaching.',
    expect3: 'Wear wetin you comfortable with; casual dey okay.',
  },
  newsletter: {
    ...en.newsletter,
    desc: 'Drop your email make we send announcement. We no go spam you.',
    success: 'Thank you! We go reach you soon.',
  },
}

export const translations = { en, pcm }

export function resolvePath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj)
}
