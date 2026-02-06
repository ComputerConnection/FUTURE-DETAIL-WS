import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms of Service | FUTURE DETAIL',
  description: 'Terms of service for FUTURE DETAIL. Read about our service terms, warranties, and policies.',
};

export default function TermsPage() {
  const lastUpdated = 'February 6, 2026';

  return (
    <div className="bg-black pt-20 min-h-screen">
      <div className="container-wide py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extralight mb-4">Terms of Service</h1>
          <p className="text-gray-500 mb-12">Last updated: {lastUpdated}</p>

          <div className="prose prose-invert prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-light text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                By accessing our website or using our services, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our services. These terms apply to all
                visitors, customers, and others who access or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">2. Services</h2>
              <p className="text-gray-400 leading-relaxed">
                {siteConfig.name} provides automotive protection services including but not limited to Paint
                Protection Film (PPF) installation, color change wraps, window tinting, ceramic coatings, and
                aftermarket accessory installation. All services are performed at our facility in Edmond, Oklahoma.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">3. Appointments and Scheduling</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>All services are by appointment only.</li>
                <li>A deposit may be required to secure your appointment for certain services.</li>
                <li>We require at least 48 hours notice for cancellations or rescheduling.</li>
                <li>Deposits may be forfeited for no-shows or late cancellations.</li>
                <li>We reserve the right to refuse service to anyone.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">4. Pricing and Payment</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Prices listed on our website are starting prices and subject to change.</li>
                <li>Final pricing depends on vehicle condition, size, and specific requirements.</li>
                <li>A detailed quote will be provided before any work begins.</li>
                <li>Payment is due upon completion of services unless otherwise arranged.</li>
                <li>We accept cash, credit cards, and financing through Affirm (subject to approval).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">5. Vehicle Condition</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                For best results, we recommend:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Vehicles should be clean before drop-off (we will perform final prep).</li>
                <li>Existing damage, scratches, or imperfections should be disclosed before service.</li>
                <li>Paint correction may be recommended before PPF or coating installation.</li>
                <li>We are not responsible for pre-existing damage or defects.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">6. Warranties</h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">Paint Protection Film:</strong> Covered by manufacturer warranty
                  (typically 10 years) against yellowing, cracking, peeling, and delamination. Warranty does not
                  cover damage from accidents, abuse, or improper care.
                </p>
                <p>
                  <strong className="text-white">Color Change Wraps:</strong> Covered by manufacturer warranty
                  (typically 5-7 years) against fading, cracking, and peeling under normal conditions.
                </p>
                <p>
                  <strong className="text-white">Window Tinting:</strong> LLumar products include lifetime warranty
                  against bubbling, peeling, cracking, and color change.
                </p>
                <p>
                  <strong className="text-white">Ceramic Coating:</strong> Warranty period depends on product selected
                  (2-5 years). Warranty requires proper maintenance and care.
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  * All warranties are subject to manufacturer terms and conditions. Warranty claims must be submitted
                  through our shop. Proof of maintenance may be required.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-400 leading-relaxed">
                {siteConfig.name} shall not be liable for any indirect, incidental, special, consequential, or
                punitive damages resulting from your use of our services. Our total liability shall not exceed
                the amount paid for the specific service in question. We are not responsible for damage caused
                by improper aftercare or failure to follow provided care instructions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">8. Care Instructions</h2>
              <p className="text-gray-400 leading-relaxed">
                Following our care instructions is essential to maintain your warranty and the longevity of our
                services. Care guides will be provided upon completion of service. Failure to follow care
                instructions may void applicable warranties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">9. Intellectual Property</h2>
              <p className="text-gray-400 leading-relaxed">
                All content on this website, including text, graphics, logos, and images, is the property of
                {siteConfig.name} or its content suppliers and is protected by copyright laws. You may not
                reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">10. Photos and Marketing</h2>
              <p className="text-gray-400 leading-relaxed">
                We may photograph your vehicle during or after service for use on our website, social media,
                and marketing materials. If you do not wish for your vehicle to be photographed, please inform
                us before service begins. No personally identifiable information (license plates, etc.) will
                be shared without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">11. Dispute Resolution</h2>
              <p className="text-gray-400 leading-relaxed">
                Any disputes arising from these terms or our services shall be resolved through good-faith
                negotiation. If a resolution cannot be reached, disputes shall be subject to the laws of the
                State of Oklahoma and resolved in the courts of Oklahoma County.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">12. Changes to Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately
                upon posting to this page. Your continued use of our services after changes constitutes
                acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-white mb-4">13. Contact Us</h2>
              <p className="text-gray-400 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
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
