export const event = {
  title: 'Padel for a Purpose',
  subtitle: 'Pro-Am Padel Tournament & Pool Party',
  date: 'August 2, 2026',
  dateShort: '08.02.26',
  time: '12:00 PM',
  location: 'Private Residence, Bridgehampton',
  intro:
    'The Brady Hunter Foundation presents its annual Hamptons charity fundraiser',
  edition: 'Third edition · Second Hamptons event',
  heroKicker: 'The Brady Hunter Foundation Presents',
  heroHeading: 'Padel for a Purpose',
  heroDescriptionLine1: 'August 2, 2026 · Private Residence, Bridgehampton',
  heroDescriptionLine2: 'Pro-Am Padel Tournament & Pool Party — a day of sport, sun, and purpose.',
}

export const heroGallery = [
  { src: '/images/hero-1.jpg', alt: 'Guests and a dog at Padel for a Purpose', w: 682, h: 1024 },
  { src: '/images/hero-2.jpg', alt: 'Friends gathered at the Padel for a Purpose pool party', w: 1280, h: 1229 },
  { src: '/images/hero-3.jpg', alt: 'Padel court action at golden hour', w: 919, h: 611 },
  { src: '/images/hero-4.jpg', alt: 'Guests celebrating at the charity event', w: 1537, h: 1023 },
  { src: '/images/hero-5.jpg', alt: 'A dog with guests at the foundation event', w: 1254, h: 1254 },
  { src: '/images/hero-6.jpg', alt: 'Evening padel match under the lights', w: 1672, h: 941 },
  { src: '/images/hero-7.jpg', alt: 'Guests and a dog at Padel for a Purpose', w: 682, h: 1024 },
  { src: '/images/hero-8.jpg', alt: 'Friends gathered at the Padel for a Purpose pool party', w: 1280, h: 1229 },
  { src: '/images/hero-9.jpg', alt: 'Padel court action at golden hour', w: 919, h: 611 },
]

export const stats = [
  { value: '200+', label: 'Guests at our first Hamptons fundraiser' },
  { value: '600+', label: 'Guests at Miami' },
  { value: '40+', label: 'Sponsors' },
  { value: '15+', label: 'Raffle items' },
]

export const mission = {
  heading: 'Our Mission',
  pillars: [
    {
      src: '/images/mission-3.jpg',
      alt: 'Veterinary care for animals in need',
    },
    {
      src: '/images/mission-2.jpg',
      alt: 'Fresh produce distributed through food rescue programs',
    },
    {
      src: '/images/mission-1.jpg',
      alt: 'Children supported by foundation programs',
    },
  ],
  lines: [
    'Sport brings people together. But purpose is why we play.',
    'The Brady Hunter Foundation protects animals, empowers children, combats food insecurity, and conserves our planet — founded by Josh Fox in memory of Brady and Hunter, and built on compassion every single day.',
    'Padel for a Purpose returns to the Hamptons for a third year — bringing people together through sport to champion the voiceless and drive lasting impact.',
    'This year, our focus is a one-of-a-kind animal sanctuary in South Florida — a forever home for farm animals and harder-to-adopt dogs who deserve the care and safety they have been denied.',
  ],
  closingLine: 'Welcome to the circle.',
  paragraphs: [
    'The Brady Hunter Foundation is dedicated to protecting animals, supporting and empowering children, combating food insecurity in underserved communities, and conserving our planet and its natural resources. Founded by Josh Fox in memory of his two beloved dogs, Brady and Hunter, the Foundation honors their legacy through compassion, action, and a commitment to inspiring others to become changemakers every single day.',
    'Our signature fundraising event, Padel for a Purpose, returns for the third time and marks our second event in the Hamptons. This event brings people together through sport to champion the voiceless and drive meaningful, lasting impact.',
    'This year, our focus is on building a one-of-a-kind animal sanctuary in South Florida. This sanctuary will provide a forever home for both farm animals and harder-to-adopt dogs who have been overlooked in shelters, giving them the care, safety, and life they deserve.',
  ],
}

export const venue = {
  heading: 'Private Residence, Bridgehampton',
  description:
    'Set against the stunning backdrop of a private Bridgehampton estate, guests will enjoy an unforgettable day featuring a resort-style pool, professional padel court, and beautifully curated outdoor spaces. This exceptional property provides the perfect setting to connect, celebrate, and support The Brady Hunter Foundation\'s mission to create lasting impact for animals and children in need.',
  image: { src: '/images/venue-estate.svg', alt: 'Luxury Bridgehampton estate with pool and outdoor lounge' },
  scrollSteps: [
    {
      titleLines: ['Private Residence,', 'Bridgehampton'],
      start: 0.02,
      end: 0.34,
    },
    {
      body: 'Set against the stunning backdrop of a private Bridgehampton estate, guests will enjoy an unforgettable day featuring a resort-style pool, professional padel court, and beautifully curated outdoor spaces.',
      start: 0.3,
      end: 0.62,
    },
    {
      body: 'Connect. Celebrate. Support the',
      highlight: 'MISSION.',
      start: 0.58,
      end: 0.98,
    },
  ],
  galleryCaption: 'More views of the property',
}

export const venueGallery = [
  { src: '/images/prop-5.jpg', alt: 'Bright bedroom with vaulted ceilings and meadow views' },
  { src: '/images/prop-6.jpg', alt: 'Sun-drenched living room with white sofas' },
  { src: '/images/prop-1.webp', alt: 'Exterior of the Bridgehampton estate with manicured lawn' },
  { src: '/images/prop-2.webp', alt: 'Tennis court at the private residence' },
  { src: '/images/prop-3.webp', alt: 'Aerial view of the estate and surrounding grounds' },
  { src: '/images/prop-4.webp', alt: 'Resort-style pool on the lawn' },
  { src: '/images/prop-7.webp', alt: 'Modern kitchen and dining area with exposed beams' },
]

export const program = {
  heading: 'Program',
  schedule: [
    { time: '12:30 PM', event: 'Team check-in', icon: 'checkin' },
    { time: '1:00 PM', event: 'Tournament & Pool Party Begin', icon: 'party' },
    { time: '4:30 PM', event: 'Finals Begin', icon: 'finals' },
    { time: '5:15 PM', event: 'Award Ceremony', icon: 'award' },
  ],
}

export const ticketsSection = {
  label: 'Registration',
  heading: 'Reserve Your Place',
  subtitle: 'Two ways to join — spectate or play — on a private Bridgehampton estate.',
  note: '100% of your purchase supports The Brady Hunter Foundation — processed securely through Zeffy.',
}

export const tickets = [
  {
    id: 'player',
    name: 'Player/Party Ticket',
    price: '$2,000',
    highlight: true,
    image: '/images/ticket-2.jpg',
    includes: [
      'Participation in competitive padel matches',
      'Open bar',
      'Pool party access',
      'Delicious chef-curated food',
      'Live DJ and entertainment',
      'Access to off-court activities and networking opportunities',
      'And surprises throughout the day',
    ],
  },
  {
    id: 'attendee',
    name: 'Event Attendee Ticket',
    price: '$150',
    highlight: false,
    image: '/images/ticket-1.jpg',
    includes: [
      'Open bar',
      'Delicious chef-curated food',
      'Live DJ and entertainment',
      'Access to watch top pros compete',
      'Great networking opportunities',
      'Pool party access',
      'And more surprises throughout the day.',
    ],
  },
]

export const sponsorshipTiers = [
  {
    name: 'Diamond Dog',
    price: '$100,000',
    featured: true,
    badge: 'Presenting Sponsor',
    benefits: [
      'Exclusive Presenting Sponsor recognition ("Padel for a Purpose 2026 presented by")',
      '2 minutes on the mic at event',
      'Year-round sponsor recognition for one signature event',
      'Logo on padel court and balls',
      'Premium logo placement on signage, apparel, and press',
      'Step & repeat inclusion',
      'Primary feature in marketing collateral and press releases',
      'Dedicated social media spotlight (12.6k IG followers)',
      'Pre and post-event newsletter spotlight (5k+ subscribers)',
      'Exclusive dinner with BHF Team',
      'VIP section at event with bottle service',
      'Option to place branded items on-site',
      'Custom content shoot',
      '20 complimentary pool party tickets',
      '2 complimentary player tickets',
    ],
  },
  {
    name: 'Champion For Change',
    price: '$50,000',
    benefits: [
      'Primary event sponsorship recognition',
      'Naming rights to one of our signature events',
      'Logo on padel court',
      'Logo placement on signage, apparel, and press',
      'Step & repeat inclusion',
      'Logo on tournament T-shirts',
      'Feature in marketing collateral and press releases',
      'Dedicated social media spotlight (12.2k IG followers)',
      'Pre and post-event newsletter spotlight (5k+ subscribers)',
      'Option to place branded items on-site',
      'Exclusive dining experience with BHF Team',
      '15 complimentary pool party tickets',
    ],
  },
  {
    name: 'Platinum Paw',
    price: '$25,000',
    benefits: [
      'Logo placement on welcome signage',
      'Logo placement on signage, apparel, and press',
      'Step & repeat inclusion',
      'Logo on DJ booth or Bar (pending availability)',
      'Mention in press release and newsletter (5k+ subscribers)',
      'Logo on tournament T-shirts',
      'Option to place branded items on-site',
      'Pre-event brunch before the event',
      'Social media spotlight (12.6k IG followers)',
      '10 complimentary pool party tickets',
    ],
  },
  {
    name: 'Golden Collar',
    price: '$10,000',
    benefits: [
      'Logo placement on signage, apparel, and press',
      'Step & repeat inclusion',
      'Feature in certain marketing collateral and press releases',
      'Social media spotlight (12.6k IG followers)',
      'Option to place branded items on-site',
      'Pre and post-event newsletter spotlight (5k+ subscribers)',
      'Logo on tournament T-shirts',
      '8 complimentary pool party tickets',
    ],
  },
  {
    name: 'Top Dog',
    price: '$5,000',
    benefits: [
      'Logo placement on welcome signage',
      'Mention in press release',
      'Logo on tournament T-shirts',
      'Social media spotlight (12.6k IG followers)',
      'Option to place branded items on-site',
      'Pre and post-event newsletter spotlight (5k+ subscribers)',
      '6 complimentary pool party tickets',
    ],
  },
  {
    name: 'Underdog Hero',
    price: '$2,500',
    benefits: [
      'Logo featured on shared sponsor banner',
      'Inclusion in digital newsletter (5k+ subscribers) + social media shoutout (12.6k IG followers)',
      'Option to place branded items on-site',
      '4 complimentary pool party tickets',
    ],
  },
  {
    name: 'Tail Wagger',
    price: '$1,000',
    benefits: [
      'Logo on shared sponsor banner',
      'Recognition in event email blast',
      'Inclusion in social media thank-you post (12.6k IG followers)',
      '2 complimentary pool party tickets',
    ],
  },
  {
    name: 'Puppy Love',
    price: '$500',
    benefits: [
      'Logo on shared sponsor banner',
      'Inclusion in social media thank-you post (12.6k IG followers)',
      '1 complimentary pool party ticket',
    ],
  },
]

export const sponsorshipSection = {
  label: 'Sponsorship',
  heading: 'Become A Champion For Change',
  subtitle:
    'Partner with us to create lasting impact for animals, children, and communities.',
  previewCount: 5,
}

export const pastEvents = [
  {
    id: 'miami',
    label: 'Miami 2026',
    stat: '600+ guests · 40+ sponsors · 15+ raffle items',
    videoUrl: 'https://www.instagram.com/reels/DVRYyRujrJZ/',
    images: [
      { src: '/images/miami/miami-1.jpg', alt: 'Flyboard water show with the Miami skyline at night' },
      { src: '/images/miami/miami-2.jpg', alt: 'Guest playing on the Miami Mobile Golf simulator' },
      { src: '/images/miami/miami-3.jpg', alt: 'The Farmer\'s Dog booth beside the padel courts at Padel for Purpose Miami' },
      { src: '/images/miami/miami-4.jpg', alt: 'Guests enjoying food and drinks at the Miami event' },
    ],
  },
  {
    id: 'hamptons',
    label: 'Hamptons 2025',
    stat: '200+ in attendance at our first Hamptons fundraiser',
    videoUrl: 'https://www.instagram.com/reels/DOJoAjajm89/',
    images: [
      { src: '/images/hamptons/hamptons-1.jpg', alt: 'Padel tournament winners with medals on court at Padel for Purpose Hamptons' },
      { src: '/images/hamptons/hamptons-2.jpg', alt: 'Guest with a dog at The Brady Hunter Foundation step and repeat' },
      { src: '/images/hamptons/hamptons-3.jpg', alt: 'Padel match action on the Hamptons court' },
      { src: '/images/hamptons/hamptons-4.jpg', alt: 'Guests with a French bulldog at the Hamptons fundraiser' },
    ],
  },
]

export const pressSection = {
  label: 'In The News',
  heading: 'Press Coverage',
  subtitle: 'Sport, style, and philanthropy — as seen in leading publications.',
}

export const press = [
  {
    publication: "Dan's Papers",
    logo: '/images/press/danis.png',
    headline: 'The Brady Hunter Foundation Serves for a Cause',
    url: 'https://www.danspapers.com/2025/09/the-brady-hunter-foundation-serves-for-a-cause/',
  },
  {
    publication: 'Times Square Chronicles',
    logo: '/images/press/t2omline.png',
    headline: 'The Padel Party Charity Of The Year!',
    url: 'https://t2conline.com/prince-mario-max-schaumburg-lippe-the-padel-party-charity-if-the-year/',
  },
  {
    publication: 'Impact Wealth',
    logo: '/images/press/impact-wealth.png',
    headline: 'Game, Set, Match! Padel for a Purpose Hits East Hampton',
    url: 'https://impactwealth.org/game-set-match-padel-for-a-purpose-hits-east-hampton/',
  },
  {
    publication: '27east',
    logo: '/images/press/southampton.png',
    logoWide: true,
    headline: 'Padel for a Purpose Hits East Hampton',
    url: 'https://www.27east.com/east-hampton-press/article_eb1c122e-12b5-5991-8fb7-0a20c15a4e7e.html',
  },
  {
    publication: 'RESIDENT',
    logo: '/images/press/resident.png',
    headline: 'Where Sport, Style, and Philanthropy Converged in Miami',
    url: 'https://resident.com/press-releases/2026/02/26/padel-for-a-purpose-where-sport-style-and-philanthropy-converged-in-miami-with-the-brady-hunter-foundation',
  },
  {
    publication: 'Haute Living',
    logo: '/images/press/haute-living.png',
    headline: 'Where Sport, Style, and Philanthropy Converged in Miami',
    url: 'https://hauteliving.com/2026/02/padel-for-a-purpose-where-sport-style-and-philanthropy-converged-in-miami/785451/',
  },
  {
    publication: "L'Etage Magazine",
    logo: '/images/press/letage.png',
    headline: 'Padel for Purpose Unites Miami for Animals and Children',
    url: 'https://letagemagazine.com/padel-for-purpose-unites-miami-for-animals-and-children/',
  },
  {
    publication: '39 WSFL',
    logo: '/images/press/wsft.png',
    headline: 'Brady Hunter Foundation brings Padel for Purpose to Miami',
    url: 'https://www.wsfltv.com/news/local-news/brady-hunter-foundation-brings-padel-for-purpose-fundraising-event-to-miami-february-21',
  },
]

export const contactSection = {
  badge: 'August 2, 2026 · Bridgehampton',
  heading: 'Join Us on the Court',
  body:
    'Every ticket and sponsorship helps build a forever home for animals and brighter futures for children in need.',
  ctaPrimary: 'Tickets & Sponsorships',
  ctaSecondary: 'Contact Paige',
  contactLabel: 'Custom sponsorship packages & event details',
}

export const navLinks = [
  { label: 'Mission', href: '#mission' },
  { label: 'Venue', href: '#venue' },
  { label: 'Program', href: '#program' },
  { label: 'Tickets', href: '#tickets' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Past Events', href: '#past-events' },
  { label: 'Contact', href: '#contact' },
]

export const ticketGallery = [
  { src: '/images/prop-2.webp', alt: 'Padel court at the private Bridgehampton residence' },
  { src: '/images/prop-4.webp', alt: 'Resort-style pool and lawn at the estate' },
  { src: '/images/prop-6.jpg', alt: 'Guests enjoying the sun-drenched living space' },
]
