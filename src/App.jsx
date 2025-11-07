import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Report from './components/Report';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0b0f] text-white font-inter">
      <Hero />
      <Features />
      <Report />
      <Footer />
    </div>
  );
}
