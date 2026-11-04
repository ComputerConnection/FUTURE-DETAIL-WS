'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { siteConfig } from '@/config/site';
import { trackEvent } from '@/lib/analytics';

const { gaMeasurementId } = siteConfig.analytics;

export default function Analytics() {
  // Listens at the document level so every tel: link on the site is counted
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (link) {
        trackEvent('phone_click', { page_path: window.location.pathname });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaMeasurementId}');
        `}
      </Script>
    </>
  );
}
