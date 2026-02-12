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

  // Booking - Contact form is primary method
  booking: {
    method: 'contact-form',
    phone: '(405) 315-9202',
  },

  // Reviews - 20 five-star Google reviews
  reviews: {
    rating: 5.0,
    count: 20,
  },

  seo: {
    title: 'FUTURE DETAIL | Tesla PPF, Tint & Ceramic Coatings | Edmond & OKC',
    description: 'Premium Paint Protection Film, LLumar window tinting, and ceramic coatings for Tesla vehicles in Edmond and Oklahoma City. Cybertruck specialists. Call (405) 315-9202.',
    keywords: 'Tesla PPF, Tesla tint, ceramic coating, Edmond OK, Oklahoma City, Model 3, Model Y, Model S, Model X, Cybertruck, LLumar, Cybertruck protection',
  },

  // Animation/UI timings (in ms)
  timings: {
    testimonialAutoAdvance: 6000,
    carouselAutoAdvance: 4000,
  },
} as const;

export type SiteConfig = typeof siteConfig;
