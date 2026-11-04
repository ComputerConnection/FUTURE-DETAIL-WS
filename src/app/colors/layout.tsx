import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Color Options | FUTURE DETAIL | Edmond & Oklahoma City',
  description: 'Browse gloss, metallic, and satin color options for your Tesla or Cybertruck, then request a quote or physical samples from FUTURE DETAIL.',
};

export default function ColorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
