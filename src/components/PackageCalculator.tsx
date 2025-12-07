'use client';

import { useState } from 'react';
import Link from 'next/link';

const models = [
  { name: 'Model 3', multiplier: 1 },
  { name: 'Model Y', multiplier: 1.1 },
  { name: 'Model S', multiplier: 1.2 },
  { name: 'Model X', multiplier: 1.3 },
  { name: 'Cybertruck', multiplier: 1.5 },
];

const services = [
  { id: 'ppf-front', name: 'PPF Full Front', basePrice: 1500, category: 'PPF' },
  { id: 'ppf-track', name: 'PPF Track Package', basePrice: 2800, category: 'PPF' },
  { id: 'ppf-full', name: 'PPF Full Body', basePrice: 5500, category: 'PPF' },
  { id: 'wrap-partial', name: 'Partial Wrap', basePrice: 2500, category: 'Wrap' },
  { id: 'wrap-full', name: 'Full Color Change', basePrice: 4500, category: 'Wrap' },
  { id: 'tint-front', name: 'Tint Front Two', basePrice: 299, category: 'Tint' },
  { id: 'tint-full', name: 'Tint Full Vehicle', basePrice: 599, category: 'Tint' },
  { id: 'coating-basic', name: 'Ceramic Coating', basePrice: 800, category: 'Coating' },
  { id: 'coating-full', name: 'Full Detail + Coating', basePrice: 1500, category: 'Coating' },
];

const addons = [
  { id: 'chrome-delete', name: 'Chrome Delete', price: 400 },
  { id: 'roof-wrap', name: 'Roof Wrap', price: 500 },
  { id: 'wheel-coating', name: 'Wheel Coating', price: 200 },
  { id: 'glass-coating', name: 'Glass Coating', price: 150 },
];

export default function PackageCalculator() {
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    const servicesTotal = selectedServices.reduce((sum, id) => {
      const service = services.find((s) => s.id === id);
      return sum + (service ? service.basePrice * selectedModel.multiplier : 0);
    }, 0);

    const addonsTotal = selectedAddons.reduce((sum, id) => {
      const addon = addons.find((a) => a.id === id);
      return sum + (addon ? addon.price : 0);
    }, 0);

    return Math.round(servicesTotal + addonsTotal);
  };

  const total = calculateTotal();

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black" id="calculator">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Build Your Package</p>
          <h2 className="text-3xl font-extralight mb-4">Estimate Your Investment</h2>
          <p className="text-gray-500">Select your Tesla model and services for an instant estimate</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Selection Panel */}
          <div className="lg:col-span-2 space-y-8">
            {/* Model Selection */}
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-4">1. Select Your Tesla</h3>
              <div className="flex flex-wrap gap-2">
                {models.map((model) => (
                  <button
                    key={model.name}
                    onClick={() => setSelectedModel(model)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedModel.name === model.name
                        ? 'bg-cyan-500 text-black'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    {model.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-4">2. Choose Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedServices.includes(service.id)
                        ? 'border-cyan-500 bg-cyan-500/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className={`text-xs px-2 py-0.5 rounded-full mr-2 ${
                          service.category === 'PPF' ? 'bg-cyan-500/20 text-cyan-400' :
                          service.category === 'Wrap' ? 'bg-purple-500/20 text-purple-400' :
                          service.category === 'Tint' ? 'bg-amber-500/20 text-amber-400' :
                          'bg-emerald-500/20 text-emerald-400'
                        }`}>
                          {service.category}
                        </span>
                        <span className="text-sm">{service.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        ${Math.round(service.basePrice * selectedModel.multiplier).toLocaleString()}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-4">3. Add Extras (Optional)</h3>
              <div className="flex flex-wrap gap-2">
                {addons.map((addon) => (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedAddons.includes(addon.id)
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500'
                        : 'bg-white/5 text-gray-400 border border-transparent hover:bg-white/10'
                    }`}
                  >
                    {addon.name} +${addon.price}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Panel */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="p-6 rounded-2xl border border-cyan-500/30 bg-cyan-500/5">
              <h3 className="text-lg font-light mb-4">Your Estimate</h3>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Vehicle</span>
                  <span>{selectedModel.name}</span>
                </div>
                
                {selectedServices.length > 0 && (
                  <div className="pt-2 border-t border-white/10">
                    {selectedServices.map((id) => {
                      const service = services.find((s) => s.id === id);
                      return service ? (
                        <div key={id} className="flex justify-between text-sm py-1">
                          <span className="text-gray-400">{service.name}</span>
                          <span>${Math.round(service.basePrice * selectedModel.multiplier).toLocaleString()}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}

                {selectedAddons.length > 0 && (
                  <div className="pt-2 border-t border-white/10">
                    {selectedAddons.map((id) => {
                      const addon = addons.find((a) => a.id === id);
                      return addon ? (
                        <div key={id} className="flex justify-between text-sm py-1">
                          <span className="text-gray-400">{addon.name}</span>
                          <span>${addon.price}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/20">
                <div className="flex justify-between items-end mb-6">
                  <span className="text-gray-400">Estimated Total</span>
                  <div className="text-right">
                    <p className="text-3xl font-extralight text-cyan-400">
                      ${total.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">Starting from</p>
                  </div>
                </div>

                <Link
                  href={`/contact?services=${selectedServices.join(',')}&addons=${selectedAddons.join(',')}&model=${selectedModel.name}`}
                  className="block w-full py-3 text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform"
                >
                  Get Exact Quote
                </Link>
              </div>

              <p className="text-xs text-gray-600 text-center mt-4">
                Final price may vary based on vehicle condition
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

