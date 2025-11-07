import React from 'react';

export default function Report() {
  return (
    <section id="report" className="bg-[#0a0b0f] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur">
          <h2 className="text-2xl md:text-4xl font-semibold text-white">Stakeholder Report</h2>
          <p className="mt-2 text-white/70">
            This concise overview is ready to share with clients, investors, and your portfolio. It outlines the
            architecture, endpoints, features, and deployment guidance of the Alumni Platform.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card title="Key Statistics" items={[
              'Total Lines of Code: 15,000+',
              'Components: 15',
              'API Endpoints: 15+',
              'Database Records: 125+',
              'Features: 8 major features',
              'Development Time: 120+ hours',
              'Performance Score: 92/100',
            ]} />
            <Card title="Highlights" items={[
              'Full documentation of Web Parser with Google CSE integration',
              'LinkedIn Manual Import feature included',
              'Complete API reference with examples',
              'Step-by-step deployment guide',
              'Troubleshooting section',
              'Future roadmap',
            ]} />
          </div>

          <div className="mt-6 text-sm text-white/70">
            <p>
              Detailed sections cover: Project Overview, System Architecture, Technology Stack, Frontend & Backend
              design, Database Schema, 15+ API endpoints, Environment & Deployment, Security & Performance, Testing,
              Future Enhancements, Troubleshooting, and Credits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, items }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0b0d12] p-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-white/70">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}
