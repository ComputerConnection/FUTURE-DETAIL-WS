import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | FUTURE DETAIL',
  description: 'Privacy policy for FUTURE DETAIL. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  const lastUpdated = 'February 6, 2026';

  return (
    <div className="bg-black pt-20 min-h-screen">
      <div className="container-wide py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extralight mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-12">Last updated: {lastUpdated}</p>

          <div className="prose prose-invert prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-light text-white mb-4">1. Introduction</h2>
              <p className="text-gray-400 leading-relaxed">
                {siteConfig.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting
                your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">2. Information We Collect</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number when you submit a contact form or book an appointment.</li>
                <li><strong className="text-white">Vehicle Information:</strong> Tesla model, year, and details about services you&apos;re interested in.</li>
                <li><strong className="text-white">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring sources.</li>
                <li><strong className="text-white">Cookies:</strong> We use cookies and similar technologies to improve your browsing experience and analyze website traffic.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Schedule appointments and provide requested services</li>
                <li>Send you quotes, confirmations, and service-related communications</li>
                <li>Improve our website and services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">4. Information Sharing</h2>
              <p className="text-gray-400 leading-relaxed">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
                <li><strong className="text-white">Service Providers:</strong> Third parties who help us operate our business (e.g., email services, scheduling tools, payment processors).</li>
                <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights.</li>
                <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, sale, or acquisition.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">5. Cookies and Tracking</h2>
              <p className="text-gray-400 leading-relaxed">
                We use cookies and similar technologies to analyze website traffic and improve your experience.
                You can control cookies through your browser settings. We may use Google Analytics to understand
                how visitors use our site. Google Analytics collects information anonymously and reports website
                trends without identifying individual visitors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">6. Data Security</h2>
              <p className="text-gray-400 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information.
                However, no method of transmission over the Internet or electronic storage is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">7. Your Rights</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                To exercise these rights, please contact us at{' '}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-cyan-400 hover:underline">
                  {siteConfig.contact.email}
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">8. Third-Party Links</h2>
              <p className="text-gray-400 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy
                practices of these external sites. We encourage you to read their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-gray-400 leading-relaxed">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect
                personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-400 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">11. Contact Us</h2>
              <p className="text-gray-400 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                <p className="text-white font-light">{siteConfig.name}</p>
                <p className="text-gray-400">{siteConfig.contact.address.full}</p>
                <p className="text-gray-400">
                  Email:{' '}
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-cyan-400 hover:underline">
                    {siteConfig.contact.email}
                  </a>
                </p>
                <p className="text-gray-400">
                  Phone:{' '}
                  <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-cyan-400 hover:underline">
                    {siteConfig.contact.phone}
                  </a>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <Link href="/" className="text-cyan-400 hover:underline text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
