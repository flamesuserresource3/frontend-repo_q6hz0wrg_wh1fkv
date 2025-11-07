import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[560px] overflow-hidden bg-[#0a0b0f]">
      {/* Spline 3D scene as full-bleed background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0b0f]/90 via-[#0a0b0f]/60 to-[#0a0b0f]/95" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0b0f] to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Users className="h-3.5 w-3.5 text-white/70" />
            Alumni Platform • Modern • Dark • Gradient
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
            Connect, Celebrate, and Grow Your Alumni Network
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-white/80">
            A clean, modern alumni hub with elegant dark UI, interactive 3D cover, and powerful features for
            profiles, jobs, events, mentoring, and community updates.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-orange-500/20 transition-transform hover:scale-[1.02] focus:outline-none"
            >
              <Rocket className="h-4 w-4" /> Explore Features
            </a>
            <a
              href="#report"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10 focus:outline-none"
            >
              View Stakeholder Report
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
