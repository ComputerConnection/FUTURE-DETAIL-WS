import type { Metadata } from 'next';
import './globals.css';
import AnimatedNavbar from '@/components/AnimatedNavbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'FUTURE DETAIL | Tesla PPF, Wraps, Tint & Ceramic Coatings | Edmond & OKC',
  description: 'Premium Paint Protection Film, color-change wraps, LLumar window tinting, and ceramic coatings for Tesla vehicles in Edmond and Oklahoma City. Call (405) 315-9202.',
  keywords: 'Tesla PPF, Tesla wrap, Tesla tint, ceramic coating, Edmond OK, Oklahoma City, Model 3, Model Y, Model S, Model X, Cybertruck, LLumar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <AnimatedNavbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
