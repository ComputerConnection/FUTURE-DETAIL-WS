import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Color Catalog | FUTURE DETAIL',
  description: 'Browse 80+ wrap colors for your Tesla. Solid, metallic, and satin finishes.',
};

export default function ColorsPage() {
  const colors = [
    { name: 'Cement Gray', hex: '#8B8B8B' },
    { name: 'Midnight Blue', hex: '#191970' },
    { name: 'Nardo Gray', hex: '#6B6B6B' },
    { name: 'Satin Black', hex: '#1A1A1A' },
    { name: 'Gloss White', hex: '#FFFFFF' },
    { name: 'Racing Red', hex: '#C41E3A' },
    { name: 'Forest Green', hex: '#228B22' },
    { name: 'Miami Blue', hex: '#00CED1' },
    { name: 'Sunset Orange', hex: '#FF4500' },
    { name: 'Purple Haze', hex: '#8B008B' },
    { name: 'Frozen Bronze', hex: '#CD7F32' },
    { name: 'Battleship Gray', hex: '#848482' },
  ];

  return (
    <div className="bg-black min-h-screen py-24">
      <div className="container-wide">
        <h1 className="text-5xl font-extralight mb-6 text-center">Color <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Catalog</span></h1>
        <p className="text-gray-400 text-center mb-12">80+ premium wrap colors available. Here are some favorites.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {colors.map((color) => (
            <div key={color.name} className="text-center">
              <div 
                className="w-full aspect-square rounded-2xl mb-2 border border-white/10" 
                style={{ backgroundColor: color.hex }}
              />
              <p className="text-sm text-gray-400">{color.name}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-12">
          Can&apos;t find your color? We can source virtually any color from PurePPF and other premium brands.
        </p>
      </div>
    </div>
  );
}

