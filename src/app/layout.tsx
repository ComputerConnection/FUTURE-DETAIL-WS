import type { Metadata } from 'next';
import './globals.css';
import AnimatedNavbar from '@/components/AnimatedNavbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  metadataBase: new URL(siteConfig.urls.production),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.urls.production,
    siteName: siteConfig.name,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.urls.production,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AutoRepair',
      '@id': `${siteConfig.urls.production}/#business`,
      name: siteConfig.name,
      description: siteConfig.seo.description,
      url: siteConfig.urls.production,
      telephone: siteConfig.contact.phoneRaw,
      email: siteConfig.contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.contact.address.street,
        addressLocality: siteConfig.contact.address.city,
        addressRegion: siteConfig.contact.address.state,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 35.6528,
        longitude: -97.4781,
      },
      areaServed: [
        { '@type': 'City', name: 'Edmond', '@id': 'https://www.wikidata.org/wiki/Q676171' },
        { '@type': 'City', name: 'Oklahoma City', '@id': 'https://www.wikidata.org/wiki/Q34863' },
      ],
      priceRange: '$$$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: siteConfig.reviews.rating,
        reviewCount: siteConfig.reviews.count,
        bestRating: 5,
        worstRating: 1,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tesla Protection Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Paint Protection Film (PPF)',
              description: 'Self-healing clear film that protects Tesla paint from rock chips, scratches, and UV damage',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Color Change Wraps',
              description: 'Premium vinyl wraps to transform your Tesla with any color or finish',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Ceramic Window Tinting',
              description: 'LLumar ceramic tint with 98% infrared rejection and lifetime warranty',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Ceramic Coating',
              description: 'Hydrophobic nano-coating for long-lasting gloss and protection',
            },
          },
        ],
      },
      sameAs: [
        siteConfig.social.instagram,
        siteConfig.social.facebook,
        siteConfig.social.googleReviews,
      ].filter(Boolean),
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.urls.production}/#website`,
      url: siteConfig.urls.production,
      name: siteConfig.name,
      publisher: { '@id': `${siteConfig.urls.production}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RFV41ZFS70" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RFV41ZFS70');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-white antialiased">
        <AnimatedNavbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
