import React from 'react';
import { MapPin } from 'lucide-react';
import mapImage from 'figma:asset/23b80b8cb3578e0ef5bbbed2f666a435973ba52a.png';
import logoUrl from 'figma:asset/97693d750a1cc32c5b0b6cb0514f58e421d63f3f.png';

export function GlobalReach() {
  return (
    <section id="global-reach" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-500 tracking-wider uppercase mb-3">Global Reach</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Connecting Talent Across Borders
          </h3>
          <p className="text-lg text-slate-400">
            Our optimized resumes have successfully landed candidates interviews and offers in top tech hubs around the globe, with a strong focus on the US, UK, and India.
          </p>
        </div>

        {/* Custom Map Visualization */}
        <div className="relative w-full max-w-5xl mx-auto h-[300px] md:h-[500px] bg-white rounded-3xl border border-slate-700 backdrop-blur-sm shadow-2xl overflow-hidden mt-12">
          {/* World Map Image */}
          <div className="absolute inset-0">
            <img 
              src={mapImage}
              alt="World Map"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Map Pins / Location Markers */}
          
          {/* North America */}
          <div className="absolute top-[35%] left-[23%] -translate-x-1/2 -translate-y-full group">
            <div className="relative flex flex-col items-center">
              <MapPin className="h-10 w-10 md:h-12 md:w-12 text-emerald-500 fill-emerald-500 drop-shadow-lg group-hover:scale-110 transition-transform" />
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center overflow-hidden border border-emerald-500">
                <img src={logoUrl} alt="HireOrbit" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* South America */}
          <div className="absolute top-[57%] left-[29%] -translate-x-1/2 -translate-y-full group">
            <div className="relative flex flex-col items-center">
              <MapPin className="h-9 w-9 md:h-11 md:w-11 text-emerald-500 fill-emerald-500 drop-shadow-lg group-hover:scale-110 transition-transform" />
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-white flex items-center justify-center overflow-hidden border border-emerald-500">
                <img src={logoUrl} alt="HireOrbit" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Europe */}
          <div className="absolute top-[27%] left-[48%] -translate-x-1/2 -translate-y-full group">
            <div className="relative flex flex-col items-center">
              <MapPin className="h-10 w-10 md:h-12 md:w-12 text-emerald-500 fill-emerald-500 drop-shadow-lg group-hover:scale-110 transition-transform" />
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center overflow-hidden border border-emerald-500">
                <img src={logoUrl} alt="HireOrbit" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Asia */}
          <div className="absolute top-[29%] left-[69%] -translate-x-1/2 -translate-y-full group">
            <div className="relative flex flex-col items-center">
              <MapPin className="h-10 w-10 md:h-12 md:w-12 text-emerald-500 fill-emerald-500 drop-shadow-lg group-hover:scale-110 transition-transform" />
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center overflow-hidden border border-emerald-500">
                <img src={logoUrl} alt="HireOrbit" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Middle East */}
          <div className="absolute top-[44%] left-[56%] -translate-x-1/2 -translate-y-full group">
            <div className="relative flex flex-col items-center">
              <MapPin className="h-9 w-9 md:h-11 md:w-11 text-emerald-500 fill-emerald-500 drop-shadow-lg group-hover:scale-110 transition-transform" />
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-white flex items-center justify-center overflow-hidden border border-emerald-500">
                <img src={logoUrl} alt="HireOrbit" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Australia */}
          <div className="absolute top-[68%] left-[78%] -translate-x-1/2 -translate-y-full group">
            <div className="relative flex flex-col items-center">
              <MapPin className="h-9 w-9 md:h-11 md:w-11 text-emerald-500 fill-emerald-500 drop-shadow-lg group-hover:scale-110 transition-transform" />
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-white flex items-center justify-center overflow-hidden border border-emerald-500">
                <img src={logoUrl} alt="HireOrbit" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}