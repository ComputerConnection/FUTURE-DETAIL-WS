import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions | FUTURE DETAIL',
  description: 'Common questions about Tesla PPF, window tinting, and ceramic coatings. Learn about installation times, warranties, pricing, and care instructions.',
};

// FAQ Schema for rich snippets
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    // PPF Questions
    {
      '@type': 'Question',
      name: 'How long does PPF last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quality PPF from brands like XPEL and 3M typically lasts 7-10 years with proper care. Our installations come with a 10-year manufacturer warranty against yellowing, cracking, peeling, and delamination.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will PPF damage my paint when removed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. When professionally removed, PPF leaves your factory paint in pristine condition underneath. In fact, the paint will look better than unprotected areas because it has been shielded from UV rays and environmental damage.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between gloss and stealth PPF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gloss PPF is optically clear and enhances your existing paint with a wet, shiny look. Stealth (matte) PPF transforms glossy paint into a satin matte finish while providing the same protection. Stealth is especially popular on white and black Teslas.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does PPF installation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Full front coverage takes 1-2 days. Track package takes 2-3 days. Full body coverage takes 3-5 days. We never rush installations to ensure perfect results.',
      },
    },
    // Tint Questions
    {
      '@type': 'Question',
      name: 'What is ceramic tint?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ceramic tint uses nano-ceramic particles instead of dyes or metals to block heat. LLumar Ceramic IRX blocks up to 98% of infrared heat without interfering with electronics, GPS, or cell signals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is window tint legal in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oklahoma allows any tint darkness on rear windows and the back windshield. Front side windows must allow at least 25% light transmission. We help you choose legal options that maximize heat rejection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will tint interfere with Tesla sensors or cameras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our professional-grade ceramic tint does not interfere with Tesla Autopilot, cameras, or sensors. We use signal-friendly ceramic technology specifically designed for modern vehicles.',
      },
    },
    // Coating Questions
    {
      '@type': 'Question',
      name: 'How is ceramic coating different from wax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wax sits on top of paint and wears off in weeks. Ceramic coating chemically bonds with your paint, creating a permanent protective layer that lasts 2-5 years. It provides superior protection, gloss, and hydrophobic properties.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can ceramic coating be applied over PPF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We recommend ceramic coating over PPF. It enhances the hydrophobic properties, makes the PPF easier to clean, and adds an extra layer of UV protection.',
      },
    },
    // General Questions
    {
      '@type': 'Question',
      name: 'Do you offer financing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We partner with Affirm to offer flexible payment plans. Split your purchase into monthly payments with rates as low as 0% APR for qualified buyers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work on vehicles other than Teslas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While we specialize in Teslas and have patterns for every model, we also work on other premium vehicles. Contact us to discuss your specific vehicle.',
      },
    },
  ],
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
