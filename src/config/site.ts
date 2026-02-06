export const siteConfig = {
  name: 'FUTURE DETAIL',
  tagline: 'Premium Tesla Protection',

  contact: {
    phone: '(405) 315-9202',
    phoneRaw: '+14053159202',
    email: 'everett@futuredetail.com',
    address: {
      street: '11734 Maui Lane',
      city: 'Edmond',
      state: 'OK',
      full: '11734 Maui Lane, Edmond, OK',
      mapsQuery: '11734+Maui+Lane+Edmond+OK',
    },
  },

  urls: {
    production: 'https://futuredetail.com',
    maps: 'https://maps.google.com/?q=11734+Maui+Lane+Edmond+OK',
  },

  social: {
    instagram: '',
    facebook: '',
    googleReviews: 'https://g.page/futuredetail/review',
  },

  // Booking - UPDATE THIS with actual Calendly URL
  calendly: {
    url: 'https://calendly.com/futuredetail/consultation',
    eventName: 'consultation',
  },

  // Reviews - UPDATE with actual numbers
  reviews: {
    rating: 4.9,
    count: 120,
  },

  seo: {
    title: 'FUTURE DETAIL | Tesla PPF, Wraps, Tint & Ceramic Coatings | Edmond & OKC',
    description: 'Premium Paint Protection Film, color-change wraps, LLumar window tinting, and ceramic coatings for Tesla vehicles in Edmond and Oklahoma City. Call (405) 315-9202.',
    keywords: 'Tesla PPF, Tesla wrap, Tesla tint, ceramic coating, Edmond OK, Oklahoma City, Model 3, Model Y, Model S, Model X, Cybertruck, LLumar',
  },

  // Animation/UI timings (in ms)
  timings: {
    testimonialAutoAdvance: 6000,
    carouselAutoAdvance: 4000,
  },
} as const;

export type SiteConfig = typeof siteConfig;
